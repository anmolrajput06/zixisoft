const connection = require('../connection')

function addcategory(req, res) {
    try {

        // if (!req.file) {
        //     return res.status(400).send('No file uploaded.');
        // }
        const { category_name, logo } = req.body;

        // Perform the database insertion

        if (!category_name) {
            return res.send({ error: 'pleace enter category_name', status: false });
        }

        // Check if the category already exists in the database
        connection.query(
            'SELECT * FROM category_tbl WHERE category_name = ?',
            [category_name],
            (err, rows) => {
                if (err) {
                    console.error('Error checking for existing category: ' + err);
                    return res.send({ error: 'Error checking for existing category', status: false });
                }

                // If a category with the same name exists, return an error
                if (rows.length > 0) {
                    return res.send({ error: 'Category already exists', status: false });
                }

                // If the category doesn't exist, insert it into the database
                connection.query(
                    'INSERT INTO category_tbl (category_name) VALUES (?)',
                    [category_name],
                    (insertErr, result) => {
                        if (insertErr) {
                            console.error('Error inserting data: ' + insertErr);
                            return res.send({ error: 'Error inserting data', status: false });
                        } else {
                            console.log('Data inserted successfully.');
                            return res.send({ data: result, status: true });
                        }
                    }
                );
            }
        );
    }
    catch (error) {
        return res.send({ data: error, status: false })
    }
}

function getcategory(req, res) {
    try {
        connection.query("SELECT * FROM `category_tbl`", (err, result) => {
            console.log(result);
            return res.send({ data: result, status: true })
        })
    }
    catch (error) {
        return res.send({ data: error, status: false })
    }
}


function deletecategory(req, res) {
    try {
        const { id } = req.body
        if (!id) {
            return res.send({ data: "please enter your id", status: false })

        }
        connection.query(`select id  FROM category_tbl WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query(`DELETE FROM category_tbl WHERE category_tbl.id = ${id}`, (err, result1) => {
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

function updatecategory(req, res) {
    try {
        const { id, category_name } = req.body;

        if (!id) {
            return res.send({ data: "please enter your id", status: false })

        }

        connection.query(`select id  FROM category_tbl WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query('UPDATE category_tbl SET category_name=? WHERE id=?',
                    [category_name, id], (err, result1) => {
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
module.exports = { addcategory, getcategory, deletecategory, updatecategory }