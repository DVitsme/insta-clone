import { firebase } from './firebase';

export async function doesUsernameExist(username) {
  const getUsers = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  // result.docs.map((user) => user.data().length > 0);
  const result = getUsers.docs.length !== 0;
  return result;
}
