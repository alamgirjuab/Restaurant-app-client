import React from 'react';
import { useCart } from 'react-use-cart';

const SingleItem = ({ item }) => {
    const { addItem } = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Price : ${item.price}</p>
                    <button className="btn btn-success" onClick={() => addItem(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;