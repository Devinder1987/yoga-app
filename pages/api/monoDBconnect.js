import { MongoClient } from 'mongodb';

export async function MongoDBConnect(collection, operation, data, callBackFn) {
  const client = await MongoClient.connect(
    'mongodb+srv://dshutwal:bB02SOAZwrY8K9kE@cluster0.enc6r.mongodb.net/yogaApp?retryWrites=true&w=majority'
  );

  const db = client.db();
  const myCollection = await db.collection(collection);
  myCollection[operation](data, function (error, result) {
    callBackFn(error, result);
    client.close();
  });
}

export async function mongoConnect(operation, data, callBackFn) {
  const client = await MongoClient.connect(
    'mongodb+srv://dshutwal:bB02SOAZwrY8K9kE@cluster0.enc6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );

  const db = client.db();
  const yogaCollection = await db.collection('myFirstDatabase');

  switch (operation) {
    case 'insertOne':
      yogaCollection.insertOne(data, function (err, result) {
        callBackFn(err, result);
        client.close();
      });
      break;
    case 'findOne':
      yogaCollection.findOne(data, function (err, result) {
        callBackFn(err, result);
        client.close();
      });
      break;
    case 'deleteMany':
      yogaCollection.deleteMany(data, function (err, result) {
        callBackFn(err, result);
        client.close();
      });
      break;
    case 'updateOne':
      const newValues = { $set: data.newValues };
      console.log(data.query, ' | ', newValues);
      yogaCollection.updateOne(data.query, newValues, function (err, result) {
        callBackFn(err, result);
        client.close();
      });
      break;
    default:
      break;
  }
}
