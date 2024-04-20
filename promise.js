const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation, e.g., fetching data from a server
    setTimeout(() => {
      const data = 'Some data fetched from the server';
      // If the operation is successful, call resolve with the result
      resolve(data);
      // If there is an error, call reject with the error
      // reject(new Error('An error occurred'));
    }, 2000);
  });

  myPromise.then((result) => {
    console.log('Promise resolved:', result);
  }).catch((error) => {
    console.error('Promise rejected:', error);
  });


  // Function to simulate fetching user data from a server
function fetchUserData() {
    return new Promise((resolve, reject) => {
      // Simulate a delay for fetching data (e.g., from a server)
      setTimeout(() => {
        const userData = { id: 1, name: 'bhuppi', email: 'bhuppi9927@example.com' };
        // Simulate success by resolving the Promise with the fetched data
        resolve(userData);
        // Simulate error by rejecting the Promise
        // reject(new Error('Failed to fetch user data'));
      }, 2000);
    });
  }
  
  // Usage: Call the fetchUserData function and handle the Promise
  fetchUserData()
    .then(userData => {
      console.log('User data:', userData);
      // You can return another Promise here if you want to chain async operations
      // return someOtherAsyncOperation();
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  
  