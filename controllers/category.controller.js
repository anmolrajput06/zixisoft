const connection = require('../connection')

function addcategory(req, res) {
    try {
        const { category_name } = req.body;

        // Perform the database insertion

        if (!category_name) {
            return res.send({ error: 'pleace enter category_name', status: false });
        }
        connection.query(
            // 'INSERT INTO task ( brand_logo, task_name, task_description, price) VALUES (?, ?, ?, ?, ?)',
            `INSERT INTO category_tb ( category_name) VALUES (?);`,
            [category_name],
            (err, result) => {
                if (err) {
                    console.error('Error inserting data: ' + err);
                    return res.send({ error: 'Error inserting data', status: false });
                } else {
                    console.log('Data inserted successfully.');
                    return res.send({ data: result, status: true });
                }
            }
        );
    }
    catch (error) {
        return res.send({ data: error, status: false })
    }
}

function getcategory(req, res) {
    try {
        connection.query("SELECT * FROM `category_tb`", (err, result) => {
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
        connection.query(`select id  FROM category_tb WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query(`DELETE FROM category_tb WHERE category_tb.id = ${id}`, (err, result1) => {
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

        connection.query(`select id  FROM category_tb WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query('UPDATE category_tb SET category_name=? WHERE id=?',
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