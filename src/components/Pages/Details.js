import React,{useContext} from 'react'
import {DataContext} from '../Context/GlobalContext'
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import {Colors} from './Colors';
import './Details.css'



export const Details = () => {
    const { products ,addCart} = useContext(DataContext)

    

    const  {id} =useParams()
    
    // to be able to make id of product equals params id
    const product=(products[id].id)-1


    const shoeData=products.filter(shoe => shoe.id === product)
    console.log(shoeData)




    return (
        <div>
          {
          shoeData.map( (shoe) =>(
            <div className='details' key={shoe.id}>
                <img src={shoe.src}></img>
            
                  <div className='box'> 
                      <div className='row'>
                          <h2>{shoe.title}</h2>
                          <span>${shoe.price}</span>
                      </div>

                      <Colors colors={shoe.colors}/>

                      <p>{shoe.Description}</p>
                      <Link to='/cart' className='cart' onClick={()=>addCart(shoe.id)}>Add to Cart</Link>

                  </div>
            </div>
          ))
          }
           
        </div>
    )
}
