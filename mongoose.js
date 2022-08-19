const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adnan:12345@cluster0.pjnep.mongodb.net/test',)
.then(() =>{
    console.log('DB connected')
})
.catch(err =>{
    console.log(err)
})