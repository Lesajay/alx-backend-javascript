import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promi1 = uploadPhoto();
  const promi2 = createUser();

  return Promise.all([promi1, promi2]).then((promi1) => {
    console.log(`${promi1[0].body} ${promi1[1].firstName} ${promi1[1].lastName}`);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}
