import React from 'react';
import Data from '../Data';
import { NavLink } from 'react-router-dom'
import '../style/Product.css'


const Product = () => {

    const cardItem = (item) => {
        return(
            <div className="card my-4 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                        <h4 className='card-title' > {item.title} </h4>
                        <h5 className='card-title'>$ {item.price} </h5>
                        <NavLink to={`product/${item.id}`} className='btn btn-outline-primary' >Buy Now</NavLink>
                    </div>
            </div>
        )
    }

        
     return (
        <div>
                <div className='container py-5' >
                    <div className="row">
                        <div className="col-12">
                            <h1>Product</h1>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-around ">
                       {Data.map(cardItem)}
                    </div>
                </div>
            </div>
            );
        }
        
        export default Product;
