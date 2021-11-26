/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getProduct, ProductType } from '../api/api';
import { Header, Divider, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

const ProductItem: NextPage = () => {
  const route = useRouter();
  const { id } = route.query;
  const [item, setItem] = useState<ProductType>();

  useEffect(() => {
    if (id) {
      getProduct(Number(id)).then((res) => setItem(res));
    }
  }, [id]);

  console.log(item);

  return (
    <Item>
      <Header as='h2'>어머나! 너무 선택했어요!</Header>
      <Divider />

      <article>
        <div className='content'>
          <img alt={item?.name} src={item?.image_link} />
          <div>
            <strong className='title'>{item?.name}</strong>
            <div className='price'>${item?.price}</div>
            <strong className='type'>{item?.product_type}</strong>
            <Button color='blue'>구매하기</Button>
          </div>
        </div>
        <div className='description'>
          <Header as='h3'>Description</Header>
          <p>{item?.description}</p>
        </div>
      </article>
    </Item>
  );
};

export default ProductItem;

const Item = styled.div`
  padding: 20px;

  article {
    margin-top: 20px;

    .content {
      ${flexSet('flex-start', 'center', 'column')}

      img {
        width: 240px;
        padding: 20px;
      }

      div {
        padding: 20px 40px;

        .title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        .price {
          padding: 20px 0;
          font-size: 36px;
          color: ${({ theme }) => theme.colors.blue};
          font-weight: 800;
        }

        .type {
          display: block;
          padding-bottom: 40px;
          color: ${({ theme }) => theme.colors.grey};
          font-size: 124x;
        }
      }
    }

    .description {
      padding: 40px 20px;
      color: ${({ theme }) => theme.colors.grey};
      line-height: 1.2;
    }
  }
`;
