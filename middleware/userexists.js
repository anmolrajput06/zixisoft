const connection = require('../connection')
// Middleware function to check if a user is already registered

function checkIfUserExists(req, res, next) {
    const email = req.body.email; // Assuming email is sent in the request body

    connection.query(
        'SELECT * FROM registration_user_tb WHERE email = ?',
        [email],
        (err, results) => {
            if (err) {
                console.error('Error checking email existence: ' + err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (results.length > 0) {
                // User with this email already exists
                return res.status(409).json({ error: 'User already registered with this email' });
            } else {
                // User is not registered, proceed to the next middleware or route handler
                next();
            }
        }
    );
}

module.exports = { checkIfUserExists };
