import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const ItemCard = () => {
    const [foodItems, setFoodItems] = useState([]);
    const url = 'http://localhost:5000/FoodItemsLists';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoodItems(data));
    }, []);

    const { addItem } = useCart();
    return (
        <div>
            {
                foodItems.map(item => <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={item._id}>
                    <div className="card p-0 overflow-hidden h-100 shadow">
                        <img src={item.img} className="card-img-top img-fluid" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">Price : ${item.price}</p>
                            <Button className="btn btn-success" onClick={() => addItem(item)}>Add to Cart</Button>
                        </div>
                    </div>
                </div>)
            }

        </div>

    );
};

export default ItemCard;

{/* <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">Price : ${props.price}</p>
                    <Button className="btn btn-success" onClick={() => addItem(props._id)}>Add to Cart</Button>
                </div>
            </div>
        </div> */}