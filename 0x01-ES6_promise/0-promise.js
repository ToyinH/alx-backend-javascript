// eslint-disable-next-line no-unused-vars
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve('API response data'); // Resolve with response data
      } else {
        reject(new Error('Failed to get response from API')); // Reject with an error
      }
    }, 2000); // Simulate a delay of 2 seconds
  });
}
