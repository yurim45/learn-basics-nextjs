import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Admin: NextPage = () => {
  const router = useRouter();
  const [isLogin, setIslogin] = useState(false);

  const login = () => {
    axios.get('/api/isLogin').then((res) => {
      if (res?.status == 200 && res?.data.name) {
        setIslogin(true);
      } else {
        router.push('/login');
      }
    });
  };

  const logout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <AdminWrap>
      <div>admin 페이지입니다.</div>
      {isLogin && (
        <Button color='blue' onClick={logout}>
          Logout
        </Button>
      )}
    </AdminWrap>
  );
};

export default Admin;

const AdminWrap = styled.div`
  margin: 50px;
  padding: 100px 0;
  text-align: center;

  div {
    padding: 50px 0;
  }
`;
