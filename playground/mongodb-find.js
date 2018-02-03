const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const myDB=db.db('TodoApp');
    
    myDB.collection('Todos').find({
        _id : new ObjectID('5a74b42fd95f7b1d8ea37fcc')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos.', err)
    });

    //db.close();
});

