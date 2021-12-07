import type { NextPage } from 'next';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const router = useRouter();
  const login = () => {
    axios.post('/api/login').then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        router.push('/admin');
      }
    });
  };

  return (
    <LoginWrap>
      <Form>
        <Form.Field inline>
          <input placeholder='ID를 입력하세요' />
        </Form.Field>
        <Form.Field inline>
          <input type='password' placeholder='Password를 입력하세요' />
        </Form.Field>
        <Button color='blue' onClick={login}>
          Login
        </Button>
      </Form>
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  margin: 50px;
  padding: 100px 0;
  text-align: center;
`;
