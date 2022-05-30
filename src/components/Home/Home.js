import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const Home = () => {
    // const [foodItems, setFoodItems] = useState([]);
    // const url = 'http://localhost:5000/FoodItemsLists';
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setFoodItems(data));
    // }, []);
    return (
        <div>
            <h3 className="text-center">Welcome to ThumbStack Restaurant</h3>
            <h4 className="text-center mt-3">All Items</h4>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        // foodItems.map(item => <ItemCard
                        //     item={item}
                        // // key={item._id}
                        // />)
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;