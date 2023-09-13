function verifyToken(req, res, next) {
    // Get the token from the request headers or query string
    const token = req.headers.authorization || req.query.token;
    const secretKey = 'secret_key';
    if (!token) {
      return res.send({ error: 'Token is missing.' });
    }
  
    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.send({ error: 'Token is invalid.' });
      }
  
      // Token is valid, attach the decoded user information to the request
      req.user = decoded;
      next();
    });
  }

module.exports={verifyToken}
