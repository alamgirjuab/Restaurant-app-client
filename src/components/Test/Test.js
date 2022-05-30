import React, { useEffect, useState } from 'react';
// import data from '../../data';
import SingleItem from '../../SingleItem';

const Test = () => {
    // console.warn(data.productData);
    const [productData, setProductData] = useState([]);
    const url = 'http://localhost:5000/FoodItemsLists';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])
    return (
        <div>
            <h3 className="text-center">Welcome to ThumbStack Restaurant</h3>
            <h4 className="text-center mt-3">All Items</h4>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        productData.map((item, index) => <SingleItem item={item} key={index} />)
                    }
                </div>

            </section>
        </div>
    );
};

export default Test;