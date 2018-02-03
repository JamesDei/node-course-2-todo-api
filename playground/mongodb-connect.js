const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const myDB=db.db('TodoApp');
    // myDB.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err,result) => {
    //     if(err) { return console.log('Unable to insert todo', err); 
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });

    myDB.collection('Users').insertOne({
        name: 'James',
        age: 28,
        location: 'Nantes'
    }, (err, result) => {
        if(err) { 
            return console.log('Unable to insert user.', err);
        }
    
    console.log(result.ops[0]._id.getTimestamp());

    });

    db.close();
});

