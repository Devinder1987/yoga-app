import { useState, useEffect } from 'react';

function Search(props) {
  const [searchData, setSearchData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch('https://dummyjson.com/products', {
      method: 'get',
      cache: 'no-cache',
      'Content-Type': 'multipart/form-data',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProductData(response.products);
      });
  }, []);

  function handleSearch(e) {
    setSearchText(e.target.value);
    const fieldVal = e.target.value;
    setSearchData(() =>
      productData.filter((val) => val.title.toLowerCase().includes(fieldVal))
    );
  }

  return (
    <div>
      <h1>Search Page</h1>
      <input
        value={searchText}
        onChange={(e) => handleSearch(e)}
      />
      <h2>Searched Data</h2>
      <ul>
        {searchData.map((val) => (
          <li key={val.title}>{val.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
