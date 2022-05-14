import mongoConnect from './monoDBconnect';

async function handler(req, res) {
  console.log('Api Request');
  switch (req.method) {
    case 'POST':
      console.log('Post Request:', req.body);
      break;
    case 'GET':
      console.log('Get Request:', req.query);
      break;
    case 'DELETE':
      console.log('Delete Request:', req.body);
      break;
    default:
      break;
  }
  const data = await mongoConnect();
  res.status(200).json({ status: 'Success', data: data });
}

export default handler;
