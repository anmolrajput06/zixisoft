const connection = require('../../connection')

function signUp(req, res) {
    try {
        const { name, email, mobile_number } = req.body;

        // Perform the database insertion
        if (!req.body) {
            return res.send({ error: 'body empty', status: false });
        }
        connection.query(
            'INSERT INTO registration_users_tb (name, email, mobile_number) VALUES (?, ?, ?)',
            [name, email, mobile_number],
            (err, result) => {
                if (err) {
                    console.error('Error inserting data: ' + err);
                    return res.send({ error: 'Error inserting data', status: false });
                } else {
                    console.log('Data inserted successfully.');
                    return res.send({ data: result, status: true, msg: "registration successfully" });
                }
            }
        );
    }
    catch (error) {
        return res.send({ data: error, status: false })
    }
}
function getuser(req, res) {
    try {
        connection.query("SELECT * FROM `registration_users_tb`", (err, result) => {
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
        const { id, name, email, mobile_number } = req.body;
        if (!id) {
            return res.send({ data: "please enter your id", status: false })

        }

        connection.query(`select id  FROM registration_users_tb WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query('UPDATE registration_users_tb SET name=?, email=?, mobile_number=? WHERE id=?',
                    [name, email, mobile_number, id], (err, result1) => {
                        console.log(result1);
                        if (result1) {
                            return res.send({ data: result1, msg: "update successfully", status: true })

                        }
                    })
            }
            else {
                return res.send({ msg: "not exist id ", status: true })
            }
        })

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
        connection.query(`select id  FROM registration_users_tb WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query(`DELETE FROM registration_users_tb WHERE registration_users_tb.id = ${id}`, (err, result1) => {
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
