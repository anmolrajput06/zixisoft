const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../../connection')
function login(req, res) {
    try {
        const { email, password } = req.body;

        // Check if the request body is empty or missing fields
        if (!email || !password) {
            return res.status(400).json({ error: 'Missing required fields', status: false });
        }

        // Query the database to retrieve the user's hashed password
        connection.query(
            'SELECT id, email, password FROM registration_user_tb WHERE email = ?',
            [email],
            (err, results) => {
                if (err) {
                    console.error('Database query failed: ' + err);
                    return res.send({ error: 'Internal server error', status: false });
                }
                console.log(results, '---');
                if (results.length === 0) {
                    return res.send({ error: 'Authentication failed' });
                }

                const user = results[0];

                // Compare the provided password with the hashed password from the database
                bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
                    if (bcryptErr) {
                        console.error('Password comparison failed: ' + bcryptErr);
                        return res.send({ error: 'Internal server error', status: false });
                    }

                    if (!bcryptResult) {
                        return res.send({ error: 'Authentication failed' });
                    }

                    // Generate a JWT token for successful authentication
                    const token = jwt.sign({ userId: user.id, email: user.email }, 'secret_key', {
                        expiresIn: '1h', // Token expires in 1 hour
                    });

                    res.send({ msg: "login successfully", token });
                });
            }
        );
    }
    catch (error) {
        console.log(error);
        return res.send({ data: error, status: false })
    }
}

module.exports = { login }