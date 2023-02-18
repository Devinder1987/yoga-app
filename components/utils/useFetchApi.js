import { useEffect, useState } from 'react';

function useFetchApi(apiUrl, data) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState({ err: 'Nothing.' });
  useEffect(() => {
    fetch(apiUrl, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log('Fetch: ', response);
        return response.json();
      })
      .then((response) => {
        setResponse({ hook: 'Custom Hook', ...response });
      })
      .catch((error) => {
        setError({ err: 'No Error', ...error });
      });
  }, [apiUrl]);
  return [response, error];
}
export default useFetchApi;

/* How to use:
import useFetchApi from './utils/useFetchApi';
const [response, error] = useFetchApi('/api/findRecord', data);
*/
