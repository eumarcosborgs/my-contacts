module.exports = ((request, response, next) => {
  // Wildcard -> Joker (Coringa) response.setHeader('Acess-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next();
});
