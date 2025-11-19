const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use environment variable for port

// Redirect all incoming requests to google.com
app.get('*', (req, res) => {
  res.redirect('https://www.google.com');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
