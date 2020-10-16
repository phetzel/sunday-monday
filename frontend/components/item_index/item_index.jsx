import React, { useEffect, useState } from 'react';

import itemApi from '../../util/item_api_util';
import ItemListItem from './item_list_item';

const ItemIndex = props => {
    const [category, setCategory] = useState('');

    const [items, setItems] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    let data = { category: category};

    const fetchItems = (data) => {
        setLoading(true);
        itemApi.fetchItems(data).then(items => {
            const itemsArray = Object.values(items);
            setLoading(false);
            setItems(Array.from(itemsArray));
        }, err => {
            setError(err)
        })
    }

    useEffect(() => {
        fetchItems(data);
    }, []);

    const handleClick = (category) => {
        setCategory(category);
        fetchItems({ category: category });
    }

    const isActiveCat = (cat) => cat === category ? "p-color" : "nav-not-active";

    return (
        <div className="item-index-container content">
            <div className="item-index-sidebar">
                <h2 className="p-color">Categories</h2>
                <ul>
                    <li 
                        className={isActiveCat('')} 
                        onClick={() => handleClick('')}>All</li>
                    <li 
                        className={isActiveCat('hat')} 
                        onClick={() => handleClick('hat')}>Hats</li>
                    <li 
                        className={isActiveCat('shirt')} 
                        onClick={() => handleClick('shirt')}>Shirts</li>
                    <li 
                        className={isActiveCat('sweatshirt')} 
                        onClick={() => handleClick('sweatshirt')}>Sweatshirts</li>
                    <li 
                        className={isActiveCat('albumn')} 
                        onClick={() => handleClick('albumn')}>Albumns</li>
                    <li 
                        className={isActiveCat('misc')} 
                        onClick={() => handleClick('misc')}>Other</li>
                </ul>
            </div>

            <ul className="item-index">
            {items && items.map(item =>
                <ItemListItem item={item} key={item.id} />)}
            </ul>
        </div>
    )
}

export default ItemIndex;