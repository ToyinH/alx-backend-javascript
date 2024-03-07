import { uploadPhoto, createUser } from './utils';

// eslint-disable-next-line no-unused-vars
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      console.error('Signup system offline');
    });
}
