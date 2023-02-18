import mongoConnect from './monoDBconnect';

async function findRecord(req, res) {
  const data = req.body;
  function callBackFn(err, result) {
    console.log(err, result);
    if (err) {
      res.status(503).json({ status: 'Error', data: null });
    }
    res.status(200).json({ status: 'Success', data: result });
  }
  return await mongoConnect('findOne', data, callBackFn);
}

export default findRecord;
