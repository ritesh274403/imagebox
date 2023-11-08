import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageResults(props) {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let imageList;

  if (props.images) {
    imageList = (
      <div className="image row">
        {props.images.map((img) => (
          <div key={img.id} className=" col-4">
            <img 
              src={img.largeImageURL}
              alt=""
              className="wow cursor-pointer"
              onClick={() => handleOpen(img.largeImageURL)}
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity group hover:opacity-100">
              <span
                className="text-white bg-gray-800 p-2 rounded-full cursor-pointer flex items-center"
                onClick={() => handleOpen(img.largeImageURL)}
              >
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    imageList = null;
  }

  return (
    <div className="mx-8 my-0">
      {imageList}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-white p-4 max-w-2xl">
            <img src={currentImg} alt="" className="w-full" />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
