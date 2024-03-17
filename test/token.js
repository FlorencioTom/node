const { jwtDecode } = require("jwt-decode");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjY2M2UxOTQ3YzIwMjE5MmRlMmY5NyIsImVtYWlsIjoidXNlcjJAdGVzdC5lcyIsImlhdCI6MTcxMDY0Njg4NiwiZXhwIjoxNzEwNzMzMjg2fQ.W-PvnZ5lKxFqnGd3GL6vtZf36vpNDFG2Q9EaXqtQtkg";
const decoded = jwtDecode(token);

console.log(decoded.email);