import FirebaseContext from '../context/firebase';
import { firebase, storage, FieldValue } from '../lib/firebase';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{ firebase, storage, FieldValue }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
