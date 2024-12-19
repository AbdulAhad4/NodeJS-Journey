const http = require('http'); // Import the http module

// Define the port and hostname
const port = 3000; // Port number for the server
const hostname = '127.0.0.1'; // Hostname to run the server locally

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Tell the browser everything is okay
  res.setHeader('Content-Type', 'text/html'); // Tell the browser we're sending plain text
  res.end('<h1>Hello, this is my Node.js server!</h1>'); // Send the response
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`); // Message when the server starts
});
