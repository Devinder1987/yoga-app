import { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Layout from '../components/Layout';
import style from '../components/base.module.css';

function ContactUs() {
  const [clientName, setClientName] = useState('');
  const [clientDiseases, setClientDiseases] = useState('');
  const [clientStory, setClientStory] = useState('');
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  async function handleUploadSubmit(event) {
    event.preventDefault();
    const photo = fileInputRef.current.files[0];
    const formData = new FormData();
    console.log('Name: ', event.target[0].name);
    formData.append('photo', photo);

    console.log('Form: ', formData);
    await fetch('/api/uploads', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      'Content-Type': 'multipart/form-data',
      body: formData,
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    }).then((response) => {
      console.log(response);
      formRef.current?.reset();
    });
  }
  async function handleSubmit(event) {
    const photo = fileInputRef.current.files[0];
    event.preventDefault();
    const data = {
      clientName,
      clientDiseases,
      clientStory,
      photoName: photo.name,
    };

    const formData = new FormData();
    formData.append('photo', photo);

    await fetch('/api/uploads', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      'Content-Type': 'multipart/form-data',
      body: formData,
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    }).then((response) => {
      console.log(response);
      formRef.current?.reset();
    });

    await fetch('/api/insertOneRecord', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
    });
  }
  async function fetchData(event) {
    event.preventDefault();
    const data = {
      trainerName,
    };
    await fetch('/api/findRecord', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <Layout htmlTitle="Personal Trainer in Gurgaon">
      <p>Insert Client's Success Story</p>
      <hr />
      <form onSubmit={handleSubmit} className={style.formGrid}>
        <TextField
          required
          onChange={(event) => setClientName(event.target.value)}
          id="clientName"
          name="clientName"
          label="Name"
          variant="filled"
          error={false}
          fullWidth
          helperText=""
        />
        <TextField
          required
          onChange={(event) => setClientDiseases(event.target.value)}
          id="clientDiseases"
          name="clientDiseases"
          label="Diseases"
          variant="filled"
          error={false}
          fullWidth
          helperText=""
        />
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Your Details..."
          value={clientStory}
          minRows={3}
          xs={12}
          onChange={(event) => setClientStory(event.target.value)}
        />
        <label>
          Photo:
          <input
            required
            type="file"
            id="photo"
            name="photo"
            ref={fileInputRef}
          />
        </label>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
      <button onClick={fetchData}>Fetch Data</button>
    </Layout>
  );
}

export default ContactUs;
