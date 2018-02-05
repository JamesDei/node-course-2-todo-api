const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const myDB = db.db('TodoApp');
    
    // deleteMany
    // myDB.collection('Todos').deleteMany({text : 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });





 

    //db.close();
});