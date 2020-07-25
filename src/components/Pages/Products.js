import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import {DataContext} from '../Context/GlobalContext'
import './Product.css'



export const Products = ()=>{

    const {products,addCart}   = useContext(DataContext);
   


    return(
        <div id='product'>
            {
                products.map(product =>(
                    <div className='card' key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.src} ></img>
                        </Link>
                        <div className='context'>
                            <h3>
                                <Link to={`/product/${product.id}`}>{product.title}</Link>
               
                            </h3>
                            <span>{product.price}</span>
                            <p>{product.Description}</p>
                            <button onClick={()=> addCart(product.id)}>Add to Cart</button>

                        </div>
                    </div>

                ))
            }
        </div>
    )

}