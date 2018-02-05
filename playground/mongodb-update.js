const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const myDB = db.db('TodoApp');

    myDB.collection('Users').findOneAndUpdate({
        _id: new  ObjectID('5a760908a2efaa030c88fe47'),
    }, {
        $set: {
            name: 'Jane',
        }, 
        $inc: {
            age: 2,
        } 
    }, {
        returnOriginal: false,
    }).then((result) => {
        console.log(result);
    });
    
    //db.close();
});