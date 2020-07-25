import React,{useContext,useEffect} from 'react';
import { DataContext } from '../Context/GlobalContext'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Colors } from './Colors';
import './Cart.css'


export const Cart = ()=>{

    const { cart, increment, decrement, removeProduct, total, totalAmount}=useContext(DataContext)

    useEffect(()=>{
       totalAmount()
    }, [totalAmount])
   

    
   if(cart.length===0){
      return <h2 style={{textAlign:'center'}}>No Products Sorry</h2>
   }else{
       return (
           <div>
               {
                   cart.map((shoe) => (
                       <div className='details cart' key={shoe.id}>
                           <img src={shoe.src}></img>

                           <div className='box'>
                               <div className='row'>
                                   <h2>{shoe.title}</h2>
                                   <span>${shoe.price * shoe.count}</span>
                               </div>

                               <Colors colors={shoe.colors} />

                               <p>{shoe.Description}</p>
                               <div className='amount'>
                                   <button className='count' onClick={() => decrement(shoe.id)}>-</button>
                                   <span>{shoe.count}</span>
                                   <button className='count' onClick={() => increment(shoe.id)}>+</button>
                               </div>

                               <Link to='/cart' className='cart'>Add to Cart</Link>

                           </div>
                           <div className='delete' onClick={() => removeProduct(shoe.id)}>X</div>
                       </div>
                   ))
               }
               <div className='total'>
                   <Link to='/payment'>Payment</Link>
            <h3>Total:${total}</h3>
               </div>
           </div>
       )
   }

   
}