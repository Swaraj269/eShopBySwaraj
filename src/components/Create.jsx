import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {

  var navigate = useNavigate();
  var [product,setProduct] = useContext(ProductContext);
  var [title, setTitle]  = useState("");
  var [price, setPrice] = useState("");
  var [description, setDescription] = useState("");
  var [category, setCategory] = useState("");
  var [image, setImage] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    if(title.trim().length < 5 || price.trim().length < 1 || description.trim().length < 5 || category.trim().length < 5 || image.trim().length < 5 ){
      alert('All fields must be filled out with at least 5 characters');
      return;
    }
    const newProduct = {id:product.length+1 ,title, price, description, category, image};
    setProduct([...product, newProduct]);
    localStorage.setItem('product', JSON.stringify([...product, newProduct]));
    toast.success("Product Added Successfully")
    navigate('/');


  }

  return (
    <div className='h-screen w-[78vw] bg-[#e9e9e9] flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-4xl text-[#151812] font-bold'>Add New Product</h1>
        <form action="" onSubmit={handleAddProduct} className='h-[70%] flex gap-4 flex-col justify-start items-start px-4 w-[50%] py-16 bg-white'>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder='Enter the title of your product' className='w-full bg-[#e9e9e9]  px-4 py-2 border-2 text-xl ' />
            <input type="url" onChange={e => setImage(e.target.value)} value={image} placeholder='Enter the Image URL of your product' className='w-full bg-[#e9e9e9] px-4 py-2  border-2 text-xl ' />
            <div className="priceandcategory flex justify-between ">
            <input type="text" onChange={e => setCategory(e.target.value)} value={category} placeholder='Enter the Category' className='w-[46%] bg-[#e9e9e9]  px-4 py-2 border-2 text-xl ' />
            <input type="text" onChange={e => setPrice(e.target.value)} value={price} placeholder='Enter the Price' className='w-[46%] bg-[#e9e9e9] px-4 py-2  border-2 text-xl ' />
            </div>
            <textarea name="description" onChange={e => setDescription(e.target.value)} value={description} rows='4' placeholder='Enter the Description of Your Product' className='w-full bg-[#e9e9e9] px-4 py-2  border-2 text-xl ' id=""></textarea>
            <button type="submit" className='px-5 py-2 mt-2 bg-[#151812] text-[#fff]'>Add the Product</button>
        </form>
    </div>
  )
}

export default Create