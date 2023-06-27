export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const myOb = {
      firstName,
      lastName,
    };
    resolve(myOb);
  });
}
