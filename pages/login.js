import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import FirebaseContext from '../context/firebase';
import { getImage } from '../lib/storage';

const Login = () => {
  const router = useRouter();
  const { firebase, storage } = useContext(FirebaseContext);

  // all the Form Stuff
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isValid = password === '' || email === '';
  const [images, setImages] = useState({
    instaLogo: '',
    iphone: ''
  });

  useEffect(() => {
    const getFirebaseImages = async () => {
      const instaLogo = await getImage('images/logo.png');
      const iphone = await getImage('images/iphone-with-profile.jpg');
      setImages({ instaLogo, iphone });
    };
    getFirebaseImages();
  }, []);

  return (
    <div>
      <Head>
        <title>Login - Instagram</title>
      </Head>
      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5">
          <img src={images.iphone} alt="" />
        </div>
        <div className="flex w-2/5">
          <h1>Over here</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
