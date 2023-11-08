import React, { useState, useEffect } from 'react';
import ImageResults from "../imageResults/imageResults";

function Search() {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = 'https://pixabay.com/api';
  const apiKey = '40545242-4c3e5c5de1d0ec74699ea17e6'; // Replace with your actual API key

  const getImage = async (val) => {
    try {
      const response = await fetch(`${apiUrl}/?key=${apiKey}&q=${val}&image_type=photo&safesearch=true`);
      if (response.ok) {
        const data = await response.json();
        setImages(data.hits);
      } else {
        setError('An error occurred while fetching images.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching images.');
    }
  }

  const onTextChange = (e) => {
    const val = e.target.value;
    setSearchText(val);
    setError(null);
    getImage(val);
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div>
        <div className='searchbar'>

      <input 
        type="text"
        className=" beauty"
        placeholder="Search for images"
        name="searchText"
        value={searchText}
        onChange={onTextChange}
      />
        </div>
      <br />
      {error ? (
        <div>Error: {error}</div>
      ) : images.length > 0 ? (
        <ImageResults images={images} />
      ) : null}
    </div>
  );
}

export default Search;
