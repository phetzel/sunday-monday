import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
import itemApi from '../../util/item_api_util';

const ItemShow = ({ match }) => {
    const [item, setItem] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchItem= () => {
        const id = match.params.id;
        setLoading(true);
        itemApi.fetchItem(id).then(item => {
            setLoading(false);
            setItem(item);
        }, err => {
            setError(err)
        })
    }

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div>
            <BottomNav />
            <div className="item-show content">
                {item && 
                <div className="item-show-details">
                    <img src={item.photoUrl} alt="dj pic"/>

                    <div className="item-show-details-text">
                        <h4 className="p-color">{item.title}</h4>
                        <p>{item.description}</p>
                        <button className="button">Add to Cart</button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
};

export default ItemShow;