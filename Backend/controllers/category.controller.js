const connection = require('../connection')

function addcategory(req, res) {
    try {
        console.log(req.body);
        const { category_name } = req.body;
        const file = req.files;
        if (file.logo === undefined) {
            return res.status(200).json({ error: true, message: "Please select any file", data: null })
        }
        // Perform the database insertion
        if (category_name === "") {
            return res.status(200).json({ error: true, message: "Please enter the category name", data: null })
        }

        // Check if the category already exists in the database
        connection.query(
            'SELECT * FROM category_tbl WHERE category_name = ?',
            [category_name],
            (err, rows) => {
                if (err) {
                    // return res.send({ error: 'Error checking for existing category', status: false });
                    return res.status(200).json({ error: true, data: err })
                } else {
                    // If a category with the same name exists, return an error
                    if (rows.length > 0) {
                        return res.send({ error: 'Category already exists', status: false });
                    } else {
                        // If the category doesn't exist, insert it into the database
                        connection.query(
                            'INSERT INTO category_tbl (category_name, logo) VALUES (?,?)',
                            [category_name, file.logo[0].filename],
                            (insertErr, result) => {
                                if (insertErr) {
                                    return res.send({ error: 'Error inserting data', status: false });
                                } else {
                                    console.log("insert");
                                    return res.status(200).json({error: false, message: "Category successfully add", data: null})
                                }
                            }
                        );
                    }
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
        connection.query("SELECT * FROM `category_tbl`", (err, result) => {
            console.log(result);
            return res.send({ data: result, status: true })
        })
    }
    catch (error) {
        return res.send({ data: error, status: false })
    }
}

function getcategoryById(req, res) {
    const { id } = req.body
    try {
        connection.query(`select * FROM category_tbl WHERE id = ${id}`, (err, result) => {
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
        const file = req.files;
        if (!id) {
            return res.send({ data: "please enter your id", status: false })

        }

        connection.query(`select id  FROM category_tbl WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query('UPDATE category_tbl SET category_name=?,logo=? WHERE id=?',
                    [category_name, file.logo[0].filename,id], (err, result1) => {
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
module.exports = { addcategory, getcategory, deletecategory, updatecategory, getcategoryById }