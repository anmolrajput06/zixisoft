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
                    return res.send({ data: result, status: true ,msg:"registration successfully"});
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
module.exports = { signUp ,getuser}
