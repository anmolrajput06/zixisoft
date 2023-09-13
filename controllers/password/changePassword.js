const connection = require('../../connection')
const bcrypt = require('bcrypt');

function changepassword(req,res)
{
    const { email, oldPassword, newPassword } = req.body;

    // Check if the request body is missing fields
    if (!email || !oldPassword || !newPassword) {
      return res.status(400).json({ error: 'Missing required fields', status: false });
    }
  
    // Retrieve the user's hashed password from the database
    connection.query(
      'SELECT id, password FROM registration_users_tb WHERE email = ?',
      [email],
      (err, results) => {
        if (err) {
          console.error('Database query failed: ' + err);
          return res.status(500).json({ error: 'Internal server error', status: false });
        }
  
        if (results.length === 0) {
          return res.status(401).json({ error: 'User not found' });
        }
  
        const user = results[0];
  
        // Compare the provided old password with the hashed password from the database
        bcrypt.compare(oldPassword, user.password, (bcryptErr, bcryptResult) => {
          if (bcryptErr) {
            console.error('Password comparison failed: ' + bcryptErr);
            return res.status(500).json({ error: 'Internal server error', status: false });
          }
  
          if (!bcryptResult) {
            return res.status(401).json({ error: 'Incorrect old password' });
          }
  
          // Hash the new password
          bcrypt.hash(newPassword, 10, (hashErr, hashedPassword) => {
            if (hashErr) {
              console.error('Password hashing failed: ' + hashErr);
              return res.status(500).json({ error: 'Internal server error', status: false });
            }
  
            // Update the user's password in the database
            connection.query(
              'UPDATE registration_users_tb SET password = ? WHERE email = ?',
              [hashedPassword, email],
              (updateErr, updateResult) => {
                if (updateErr) {
                  console.error('Error updating password: ' + updateErr);
                  return res.status(500).json({ error: 'Error updating password', status: false });
                }
  
                console.log('Password updated successfully.');
                return res.status(200).json({ status: true, msg: 'Password updated successfully' });
              }
            );
          });
        });
      }
    );
  
}

function resetpasswoed(req,res)
{
    const { email, newPassword } = req.body;

    // Check if the request body is missing fields
    if (!email || !newPassword) {
      return res.status(400).json({ error: 'Missing required fields', status: false });
    }
  
    // Hash the new password
    bcrypt.hash(newPassword, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        console.error('Password hashing failed: ' + hashErr);
        return res.status(500).json({ error: 'Internal server error', status: false });
      }
  
      // Update the user's password in the database
      connection.query(
        'UPDATE registration_users_tb SET password = ? WHERE email = ?',
        [hashedPassword, email],
        (updateErr, updateResult) => {
          if (updateErr) {
            console.error('Error updating password: ' + updateErr);
            return res.status(500).json({ error: 'Error updating password', status: false });
          }
  
          if (updateResult.affectedRows === 0) {
            // If no rows were affected, the user with the provided email does not exist
            return res.status(404).json({ error: 'User not found', status: false });
          }
  
          console.log('Password reset successfully.');
          return res.status(200).json({ status: true, msg: 'Password reset successfully' });
        }
      );
    });
}
module.exports= {changepassword,resetpasswoed}