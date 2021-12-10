/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getProduct, ProductType } from '../../src/common/api/api';
import Product from '../product/index';
import { Loader } from 'semantic-ui-react';

const DetailItem: NextPage = ({ item, name }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline='centered'>
          Loading...
        </Loader>
      </div>
    );
  }

  return (
    item && (
      <>
        {item && (
          <>
            <Head>
              <title>{item.name}</title>
              <meta name='description' content={item.description}></meta>
            </Head>
            {name} 환경 입니다.
            <Product list={item} title={''} />
          </>
        )}
      </>
    )
  );
};

export default DetailItem;

export async function getStaticPaths() {
  const url: string =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior';
  const { data } = await axios.get<ProductType[]>(url);

  return {
    paths: data.slice(0, 6).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const id = context?.params.id;
  const data = await getProduct(Number(id));

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
