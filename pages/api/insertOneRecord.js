import mongoConnect from './monoDBconnect';

function insertOneRecord(req, res) {
  const data = req.body;
  function callBackFn(err, result) {
    if (err) {
      res.status(503).json({ status: 'Error', data: null });
    }
    res.status(200).json({ status: 'Success', data: result });
  }
  mongoConnect('insertOne', data, callBackFn);
}

export default insertOneRecord;
