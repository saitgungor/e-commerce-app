import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://osg:zzqB5xDEf35bV2@e-commerce.zqpgwwg.mongodb.net/products?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('women');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
  }
}

export default handler;
