const express = require('express');
const app = express();

const cors = require('cors');

app.use((cors({
    origin: "http://localhost:3000",
})))

// new API route: GET /users, returning a list of users
app.get('/users', (request, response) => {
  response.json([
    { id: 546, username: 'John' },
    { id: 894, username: 'Mary' },
    { id: 326, username: 'Jane' }
  ]);
});

// DELETE user
app.delete('/users', (request, response) => {
  response.json({ result: 'success' });
});

app.listen(5000, () => {console.log("server is running on port 5000")});