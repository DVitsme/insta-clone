import { useContext } from 'react';

import { storage } from './firebase';

export const getImage = async (imgName) => {
  const storageRef = storage.ref();

  try {
    const imageRef = storageRef.child(imgName);
    console.log('Res received');
    const imageURL = await imageRef.getDownloadURL();
    return imageURL;
  } catch (error) {
    return error;
  }
};

// useEffect(() => {
//   const getFirebaseImages = async () => {
//     const instaLogo = await getImage('images/logo.png');
//     const iphone = await getImage('images/iphone-with-profile.jpg');
//     setImages({ instaLogo, iphone });
//   };
//   getFirebaseImages();
// }, []);
