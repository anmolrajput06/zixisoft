const connection = require('../connection')

function addtask(req, res) {
    try {
        const { category_select, brand_logo, task_name, task_description, price } = req.body;

        // Perform the database insertion
        connection.query(
            'INSERT INTO task (category_select, brand_logo, task_name, task_description, price) VALUES (?, ?, ?, ?, ?)',
            [category_select, brand_logo, task_name, task_description, price],
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

function gettask(req, res) {
    try {
        connection.query("SELECT * FROM `task`", (err, result) => {
            console.log(result);
            return res.send({ data: result, status: true })
        })
    }
    catch (error) {
        return res.send({ data: error, status: false })
    }
}

function deletetask(req, res) {
    try {
        const { id } = req.body
        if (!id) {
            return res.send({ data: "please enter your id", status: false })

        }
        connection.query(`select id  FROM task WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query(`DELETE FROM task WHERE task.id = ${id}`, (err, result1) => {
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

function updatetask(req, res) {
    try {
        const { id, category_select, brand_logo, task_name, task_description, price } = req.body;

        if (!id) {
            return res.send({ data: "please enter your id", status: false })

        }

        connection.query(`select id  FROM task WHERE id = ${id}`, (err, result) => {
            console.log(result);
            if (result.length != 0) {
                connection.query('UPDATE task SET category_select=?, brand_logo=?, task_name=?, task_description=?, price=? WHERE id=?',
                    [category_select, brand_logo, task_name, task_description, price, id], (err, result1) => {
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
module.exports = { addtask, gettask, deletetask,updatetask }


