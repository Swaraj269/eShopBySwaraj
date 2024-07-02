import { useParams } from 'react-router-dom';
// import axios from '../utils/Axios';
import React, { useContext, useEffect, useState} from 'react'
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

function Carddetails() {
    var [product] = useContext(ProductContext);
    console.log(product);
    const [data, setData] = useState([]);
    const {id} = useParams();
    // const getSingleProduct = async () => {
    //     try {
    //         const {data} = await axios(`/products/${id}`);
    //         setData(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    useEffect(()=>{
        if(data.length === 0 || !data){
            console.log(product.filter(e => (e.id)-1 == id)[0]);
            setData(product.filter(e => (e.id)-1 == id)[0]);
        }
        // getSingleProduct();
    },[]);
  return ( data ?
    (<div className='h-screen w-[78vw] bg-[#e9e9e9] flex items-center justify-center'>
        <div className="details h-[80%] w-[80%] bg-white   flex">
            <div className="image p-16 w-1/2 h-full flex justify-center items-center">
                <img src={data.image} alt="Card Image" className="object-contain w-full h-full"/>
            </div>
            <div className="details h-full w-1/2 flex flex-col justify-center pr-4">
                <h1 className='text-4xl leading-[1.1] font-bold '>{data.title}</h1>
                <div className="catgory mt-5">
                    <h1 className='text-lg'>{data.category}</h1>
                </div>
                <div className="price mt-5">
                    <h1 className='text-2xl font-bold'>${data.price}</h1>
                </div>
                <div className="description mt-5">
                    <h1 className='text-xl font-bold'>Description:</h1>
                    <p className='mt-2'>{data.description}</p>
                </div>
                <div className="buttons mt-8">
                    <button className='px-6 py-2 mr-5 text-white bg-[#151812]'>Buy Now</button>
                    <button className='px-6 py-2 text-white bg-[#151812]'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    </div>) : (
        <Loading />
    )
  )
}

export default Carddetails