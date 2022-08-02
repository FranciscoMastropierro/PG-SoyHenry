import React, { useState } from 'react';
import Axios from 'axios';

export default function CreateProducts() {

  const [input, setInput] = useState({
    name: '',
    price: '',
    brand: '',
    rating: '',
    description: '',
    image: '',
    stock: 0,
    categories: [],
  });
  
  let arr;
  const uploadImage = (files) => {
    const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', 'ecommercegrupo05');
      const newAxios = Axios.create();
      newAxios
        .post('https://api.cloudinary.com/v1_1/deaf0qceq/image/upload', formData)
        // eslint-disable-next-line no-loop-func
        .then((res) => {
          arr=(res.data.secure_url);
          setInput({
            ...input,
            images: arr,
          });
        });
    
  }

  function handleDeleteImage(e) {
    e.preventDefault();
    setInput({
      ...input,
      images: "",
    });
  }
  return (
    <>
      <div>
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
        ></input>
      </div>
      <div>
        {input.images &&
              <div>
                <img src={input.images} alt="" width='500px'/>
                <button
                  name={input.images}
                  onClick={(name) => handleDeleteImage(name)}
                >
                  X
                </button>
              </div>
        }
      </div>

    </>
  )
} 