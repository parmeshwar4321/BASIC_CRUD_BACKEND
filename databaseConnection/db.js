const mongoose = require('mongoose');
const url =process.env.databaseUrl
mongoose.connect( url, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        keepAlive: true
    },
    (err)=>{
        if(err){
            console.log('DB Error!', err)
        }
        else{
            console.log("DB connected!");
        }
    }
)