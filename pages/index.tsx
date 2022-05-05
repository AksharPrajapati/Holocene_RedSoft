import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAuthUser, useLoginWithRedirect } from '@frontegg/nextjs'
import styles from '../styles/Home.module.css'



import Router from 'next/router'

const Home: NextPage = () => {
  // const user = useAuthUser();
  const isAuthenticated = useAuthUser();
  // const { user, isAuthenticated } = useAuthUser ();
  const loginWithRedirect = useLoginWithRedirect();

  const router = useRouter()
  
  if (isAuthenticated) {
    Router.push('/dashboard')
  }

  return !isAuthenticated ? (
    <div>
      <button onClick={() => loginWithRedirect()}>Click me to login</button>
    </div>
  ) : null;
};

export default Home;
