import React from 'react'
import LoginForm from '../../components/common/forms/loginForm';
import Layout from '../../components/common/layout';

const Login: React.FC = () => {
  return (
    <Layout pageTitle={'Login'}>
        <LoginForm/>
    </Layout>
  )
}

export default Login;
