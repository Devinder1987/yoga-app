import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';
import style from '../../components/base.module.css';

function InsertProgram() {
  const [title, setTitle] = useState('');
  const [successMsg, setSuccessMsg] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [description, setDescription] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      title,
      description,
    };
    await fetch('/api/insertProgram', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setSuccessMsg(response.body.statusMsg);
        console.log(response);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }
  return (
    <Layout htmlTitle='Insert Program'>
      <h2>Insert the new program</h2>
      {/* Api success failure notification */}
      <form
        onSubmit={handleSubmit}
        className={style.formGrid}
      >
        <TextField
          required
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          id='title'
          name='title'
          label='Title'
          variant='filled'
          error={false}
          fullWidth
          helperText=''
        />
        <TextareaAutosize
          aria-label='empty textarea'
          placeholder='Program Description...'
          value={description}
          minRows={3}
          xs={12}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Layout>
  );
}

export default InsertProgram;
