fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => console.log(products))
  .catch((error) => console.log(error));


//   fetch("https://fakestoreapi.com/products"): This line initiates a network request to the URL "https://fakestoreapi.com/products" using the fetch function. This function returns a Promise that resolves to the Response to that request.

// .then((res) => res.json()): Once the initial fetch is successful, the .then method is used to handle the response. It takes a callback function that receives the Response object as an argument. In this callback function, res.json() is called. This method parses the Response body as JSON and returns a Promise that resolves to the parsed JSON data. This is a common pattern when working with APIs that return JSON data.

// .then((products) => console.log(products)): After the JSON data is successfully parsed, another .then method is used to handle the resolved JSON data (referred to as "products" in this case). The callback function takes the parsed JSON data as an argument and logs it to the console using console.log.

// .catch((error) => console.log(error)): If any error occurs during the fetch or JSON parsing process, the .catch method is used to handle the error. The callback function takes the error as an argument and logs it to the console using console.log.

// In summary, this code makes a network request to the "https://fakestoreapi.com/products" URL, retrieves JSON data, parses it, and then logs the parsed data to the console. If any errors occur at any stage, those errors will be caught and logged to the console as well. This is a common pattern for fetching and handling data from APIs in JavaScript.




