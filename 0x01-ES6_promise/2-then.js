// eslint-disable-next-line no-unused-vars
export default function handleResponseFromAPI(promise) {
  return promise
  // eslint-disable-next-line no-unused-vars
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error('Error:', error.message);
      return new Error(); // Return an empty Error object
    });
}
