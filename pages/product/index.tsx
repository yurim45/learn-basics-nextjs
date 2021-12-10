/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { ProductType } from '../../src/common/api/api';
import Link from 'next/link';
import styled from 'styled-components';
import { Divider, Grid, Header } from 'semantic-ui-react';

export type ProductComponent = {
  list: ProductType[];
  title: string;
};

const Product: React.FunctionComponent<ProductComponent> = ({
  list,
  title,
}) => {
  return (
    <>
      <Header as='h3' style={{ paddingTop: 40 }}>
        {title}
      </Header>
      <Divider />
      <ProductsWrap>
        <Grid columns={3}>
          <Grid.Row>
            {list?.map((item: any) => {
              return (
                <Grid.Column style={{ padding: '20px' }} key={item.id}>
                  <Link href={`/product/${item.id}`}>
                    <a>
                      <img alt={item.name} src={item.image_link} />
                      <strong className='title'>{item.name}</strong>
                      <div className='info'>
                        {item.category} {item.product_type}
                      </div>
                      <strong className='price'>${item.price}</strong>
                    </a>
                  </Link>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </ProductsWrap>
    </>
  );
};

export default Product;

const ProductsWrap = styled.div`
  padding-bottom: 20px;
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
    width: 180px;
    height: 180px;
  }

  .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 160px;
    margin: 10px auto;
  }

  .info {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
  }

  .price {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 800;
  }
`;
