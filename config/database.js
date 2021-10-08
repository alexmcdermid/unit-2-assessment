const mongoose = require('mongoose');
const db = mongoose.connection;

//for whatever reason my process.env was not working
mongoose.connect(process.env.DATABASE_URL,err => {
    if(err) throw err;
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


