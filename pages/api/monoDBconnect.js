import { MongoClient } from 'mongodb';

async function mongoConnect(operation, data, callBackFn) {
  const client = await MongoClient.connect(
    'mongodb+srv://dshutwal:bB02SOAZwrY8K9kE@cluster0.enc6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );

  const db = client.db();
  const yogaCollection = await db.collection('myFirstDatabase');
  switch (operation) {
    case 'insertMany':
      yogaCollection.insertMany(data, function (err, result) {
        callBackFn(err, result);
        client.close();
      });
      break;
    case 'find':
      yogaCollection.find(data).toArray(function (err, result) {
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

export default mongoConnect;
