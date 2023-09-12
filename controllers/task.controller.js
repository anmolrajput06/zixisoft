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
              res.send({ error: 'Error inserting data' ,status:false});
            } else {
              console.log('Data inserted successfully.');
              res.send({ data: result, status: true });
            }
          }
        );
      }
    catch (err) {
        console.log("err", err);
    }
}


function gettask(req, res) {
    try {
        connection.query("SELECT * FROM `task`", (err, result) => {
            console.log(result);
            res.send({ data: result, status: true })
        })
    }
    catch (err) {
        console.log("err", err);
    }
}
module.exports = { addtask, gettask }


