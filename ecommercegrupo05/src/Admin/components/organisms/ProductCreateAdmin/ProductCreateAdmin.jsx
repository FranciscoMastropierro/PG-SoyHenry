import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
   import {
    getProducts,
    createProduct,
    getAllCategories,

   } from "../../../../redux/actions";

import style from './ProductCreateAdmin.module.css'


const inputValidate = (estado) => {
  let errors = {};
  if(!isNaN(Number(estado.name))) {
  errors.name = 'The name cannot contain only numbers';
} if(estado.name === "") {
  errors.name = 'The name is required';
} if(estado.name.length <4) {
  errors.name = 'Name must contain at least four (4) characters';
} if(!estado.price.length) {
  errors.price = `price is required`;
} if(estado.brand.length === 0) {
  errors.brand = 'You must select a brand';
} if(estado.category) {
  errors.category = 'You must select a category';
} if(estado.image === "") {
    errors.image = 'put a valid image';
} if(estado.stock <0) {
    errors.stock = 'invalid stock number';
} if(estado.stock >1000) {
    errors.stock = 'stock cannot surpass 1000';
} if(estado.rating === "" || estado.rating > 5 || estado.rating < 1) {
    errors.rating = 'insert a valid rating number (1-5)';
} if(estado.description === "") {
    errors.description = 'description is required';
} 
console.log("error", errors)
return errors;
};

export default function CreateForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();


  const products = useSelector((state) => state.data);

  const category = useSelector((state) => state.allCategories);

    
  
  const [err, SetErr] = useState({});
  const [estado, setEstado] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",        
    categories: "",
    stock:"",
    rating:"",
    description:"",
  });
  console.log("estado",estado);
  
  // crea un set de brands para el select 
  const setBrand = [];
  products.map((e) =>setBrand.push(e.brand));
  let newDatas = [...new Set(setBrand)];

  

  
  
  //cambia el estado
  function handleChange(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    SetErr(inputValidate({ ...estado, [e.target.name]: e.target.value }));
  }

  //
  function handleSelectCat(e) {
    
    //let result  = estado.category.includes(e.target.value)
    //console.log("resultado", result)
    //if(!result){ 
    //
    setEstado({
      ...estado,
      categories: [e.target.value]
    });
    SetErr(inputValidate({
      ...estado,
      categories: [e.target.value]
    }));
    //} else {
    //  swal("you cant do that")
    //}

  }

 //function Handledelete(e){
 //  
 //  
 //  setEstado({
 //      ...estado,
 //      category: estado.category.filter(el=>el !== e.target.value)
 //  })
 //  console.log( "this", e.target.value)

 //}


  function handleSelectBrand(e) {
    setEstado({
      ...estado,
      brand: e.target.value,
    });
    console.log(estado.brand)
    SetErr(inputValidate({
      ...estado,
      brand: [e.target.value]
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(err).length)
{return alert("fields missing")}
    dispatch(createProduct(estado));
    
    setEstado({
        name: "",
        brand: "",
        image: "",
        price: "",        
        categories: "",
        stock:"",
        rating:"",
        description:"",
    });
    alert("created")
    setTimeout(() => {
     // nav(-1)
      }, 1000);

  }
//useEffect(() => {
  //  dispatch(getAllProducts());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getAllCategories());
  // }, [dispatch]);

    useEffect(() => {
      dispatch(getProducts());
      dispatch(getAllCategories());
     }, []);

     

  return (
    <div className={style.backg}>
    <div className={style.wrapper}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h1 className={style.titleform}>Create New Product</h1>
            <div className={style.divcell}>
            <label className={style.label1}>Name: </label>
            <input
              className={style.input1}
              type="text"
              value={estado.name}
              name="name"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.name}
          </div>
            <div className={style.divcell}>
            <label className={style.label1}>Description: </label>
            <input
              className={style.input1}
              type="text"
              value={estado.description}
              name="description"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.name}
          </div>
          <div className={style.divcell}>
            <label className={style.label1}>Price: </label>
            <input
              className={style.input1}
              type="number"
              value={estado.price}
              min="0"
              max="1000"
              name="price"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.price}
          </div>
          <div className={style.divcell}>
            <label className={style.label1}>stock: </label>
            <input
              className={style.input1}
              type="number"
              value={estado.stock}
              min="1"
              max="1000"
              name="stock"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.stock}
          </div>
          <div className={style.divcell}>
            <label className={style.label1}>Rating: </label>
            <input
              className={style.input1}
              type="number"
              value={estado.rating}
              min="1"
              max="1000"
              name="rating"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.rating}
          </div>
          <div className={style.divcell}>
            <label className={style.label1}>Image: </label>
            <input
              className={style.input1}
              // key="image"
              type="text"
              value={estado.image}
              name="image"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.image}
          </div>
          <div>
            <div>
              <label className={style.label1}>Brand: </label>

              <select className={style.input1} onChange={(e) => handleSelectBrand(e)}>
                 <option value="none" selected disabled > Select Brand</option>
                {newDatas?.map((e) => (
                  <option className={style.input1} key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {err.brand}              
            </div>

            <div>
              <label className={style.label1}>Category: </label>

              <select className={style.input1} onChange={(e) => handleSelectCat(e)}>
                <option value="none" selected disabled > Select Category</option>
                {category?.map((e) => (
                  <option className={style.input1} key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
                {err.category}
              </select>
            </div>

            <div>
              <button type="submit" className={style.btn}  onClick={handleSubmit}>
                Create
              </button>
              <Link to="/admin/products">
                <button className={style.btn}>Go Back</button>
              </Link>
            </div>

            
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}