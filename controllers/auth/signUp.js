const connection = require('../../connection')
const bcrypt = require('bcrypt');

function signUp(req, res) {
    try {
        const { name, email, mobile_number, password } = req.body;

        // Perform the database insertion
        if (!name || !email || !mobile_number || !password) {
            return res.status(400).json({ error: 'Missing required fields', status: false });
        }

        bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
            if (hashErr) {
                console.error('Password hashing failed: ' + hashErr);
                return res.status(500).json({ error: 'Internal server error', status: false });
            }

            // Perform the database insertion with the hashed password
            connection.query(
                'INSERT INTO registration_user_tb (name, email, mobile_number, password) VALUES (?, ?, ?, ?)',
                [name, email, mobile_number, hashedPassword],
                (err, result) => {
                    if (err) {
                        console.error('Error inserting data: ' + err);
                        return res.status(500).json({ error: 'Error inserting data', status: false });
                    } else {
                        console.log('Data inserted successfully.');
                        return res.status(201).json({ data: result, status: true, msg: "Registration successful" });
                    }
                }
            );
        });
    }
    catch (error) {
        console.log(error);
        return res.send({ data: error, status: false })
    }
}
function getuser(req, res) {
    try {
        connection.query("SELECT * FROM `registration_user_tb`", (err, result) => {
            console.log(result);
            return res.send({ data: result, status: true })
        })
    }
    catch (error) {
        return res.send({ data: error, status: false })
    }
}
function updateuser(req, res) {
    try {
        const { id, name, email, mobile_number, role_id, active } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'Please provide an ID' });
        }

        // Check if the user with the provided ID exists
        connection.query(
            'SELECT id FROM registration_user_tb WHERE id = ?',
            [id],
            (err, result) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ error: 'Database error' });
                }

                if (result.length === 0) {
                    return res.status(404).json({ error: 'User not found' });
                }

                // Update user information
                connection.query(
                    'UPDATE registration_user_tb SET name=?, email=?, active=?, mobile_number=?, role_id=? WHERE id=?',
                    [name, email, active, mobile_number, role_id, id],
                    (err, result1) => {
                        if (err) {
                            console.error('Update error:', err);
                            return res.status(500).json({ error: 'Update error' });
                        }

                        return res.status(200).json({ success: true, message: 'User updated successfully' });
                    }
                );
            }
        );


    } catch (error) {
        console.log('update task error ->', error);
        return res.send({ data: error, status: false })
    }
}
function deleteuser(req, res) {
    try {
        const { id } = req.body
        if (!id) {
            return res.send({ data: "please enter your id", status: false })

        }
        connection.query(`select id  FROM registration_user_tb WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query(`DELETE FROM registration_user_tb WHERE registration_user_tb.id = ${id}`, (err, result1) => {
                    console.log(result1);
                    if (result1) {
                        return res.send({ data: result1, msg: "delete successfully", status: true })

                    }


                })

            }
            else {
                return res.send({ msg: "not exist id ", status: true })
            }
        })

    } catch (error) {
        console.log('delete task error ->', error);
        return res.send({ data: error, status: false })
    }
}
module.exports = { signUp, getuser, updateuser, deleteuser }
