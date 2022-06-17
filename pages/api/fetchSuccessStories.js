import { MongoClient } from 'mongodb';
async function fetchSuccessStories(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://dshutwal:bB02SOAZwrY8K9kE@cluster0.enc6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();
  const yogaCollection = await db.collection('myFirstDatabase');
  const response = await yogaCollection.find({}).toArray();
  res.status(200).json({ status: 'Success', data: response });
}

export default fetchSuccessStories;
