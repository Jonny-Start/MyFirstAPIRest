// const express = require('express');
// const router = express.Router();
// const mysqlConnection = require('../DB/connectionDB');


// router.get('/', (req,res)=>{
//     mysqlConnection.query('SELECT * FROM employees',(err, rows, fields)=>{
//         if(!err){
//             res.json(rows);
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.get('/:id', (req,res)=>{
//     const { id } = req.params;
//     mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id] , (err, rows, fields)=>{
//         if(!err){
//             res.json(rows[0]);
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.post('');

// module.exports = router;