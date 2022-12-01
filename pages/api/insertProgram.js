import { MongoDBConnect } from './monoDBconnect';

function insertProgram(req, res) {
  const data = req.body;
  // @Todo: Get/POST api validation, data validation
  function callBackFn(err, result) {
    if (err) {
      res.status(503).json({ status: 'Error: ', data: null });
    }
    res
      .status(200)
      .json({
        statusMsg: 'Success: One record inserted successfully!!!',
        data: result,
      });
  }
  MongoDBConnect('program', 'insertOne', data, callBackFn);
}

export default insertProgram;
