import React, { useEffect, useState } from 'react';

import BottomNav from '../navBar/bottom_nav';
import itemApi from '../../util/item_api_util';
import ItemListItem from './item_list_item';

const ItemIndex = props => {
    const [category, setCategory] = useState('');

    const [items, setItems] = useState();

    let data = { category: category};

    const fetchItems = (data) => {
        itemApi.fetchItems(data).then(items => {
            const itemsArray = Object.values(items);
            setItems(Array.from(itemsArray));
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
        <div>
            <BottomNav />
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
                            className={isActiveCat('album')} 
                            onClick={() => handleClick('album')}>Albums</li>
                        <li 
                            className={isActiveCat('misc')} 
                            onClick={() => handleClick('misc')}>Other</li>
                    </ul>
                    <button>&#128722;</button>
                </div>

                <ul className="item-index">
                {items && items.map(item =>
                    <ItemListItem item={item} key={item.id} />)}
                </ul>
            </div>
        </div>
    )
}

export default ItemIndex;