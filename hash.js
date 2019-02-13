const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {MD5} = require('crypto-js')

// bcrypt.genSalt(10,(err, salt) => {
//     if(err) return next(err);const bcrypt = require('bcrypt')

//     bcrypt.hash('pass1234', salt, (err, hash) => {
//         if(err) return next(err);
//         console.log(hash)

//     })
// })
const id = '1000';
const secret = 'supersecret'


const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(token, secret);

console.log(decodeToken)