import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import FirebaseContext from '../context/firebase';

const Login = () => {
  const router = useRouter();
  const { firebase } = useContext(FirebaseContext);

  // all the Form Stuff
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || email === '';

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/dashboard');
    } catch (err) {
      setEmail('');
      setPassword('');
      setError(err.message);
    }
  };
  return (
    <div>
      <Head>
        <title>Login - Instagram</title>
      </Head>
      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5">
          <img src="images/area-we-serve-bg.jpg" alt="" />
        </div>
        <div className="flex flex-col w-2/5">
          <div className="flex flex-col items-center bg-white p-4 border border-gray-300 mb-4">
            <div className="flex justify-center w-full">
              <img
                src="/images/logo.png"
                alt="Insta Logo"
                className="mt-2 w-6/12 mb-4"
              />
            </div>
            {error && <p className="mb-4 text-xs text-red-600">{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                aria-label="Phone number, username, or email"
                type="text"
                placeholder="Phone number, username, or email"
                className="text-sm text-gray-400 w-full mr-3 py-5 px-4 h-2 border border-gray-400 rounded mb-2 "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                aria-label="Enter Your Password"
                type="password"
                placeholder="Password"
                className="text-sm text-gray-400 w-full mr-3 py-5 px-4 h-2 border border-gray-400 rounded mb-2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                type="submit"
                disabled={isInvalid}
                className={`bg-blue-500 text-white w-full rounded mt-2 h-8 font-bold ${
                  isInvalid && 'opacity-50'
                }`}
              >
                Log In
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center flex-col w-full bg-white p-5 border border-gray-300">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link href="/sign_up">
                <a className="text-blue-500 font-bold">Sign Up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
