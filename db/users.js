const {v4:uuid} = require('uuid');

const users = {
    "data":[
        {
            id:uuid(),
            username:"chitranayal",
            password:"cn123",
            emailid:"cn@gmail.com"
        },
        {
            id:uuid(),
            username:"pinkibisht",
            password:"pink@1234",
            emailid:"pinki@gmail.com"
        }
    ]
}

module.exports = users;