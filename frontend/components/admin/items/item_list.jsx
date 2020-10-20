import React, { useState, useEffect } from 'react';

import itemApi from '../../../util/item_api_util';

const ItemsList = () => {
    const [items, setItems] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const fetchItems= () => {
        setLoading(true);
        itemApi.fetchItems({ category: '' }).then(items => {
            const itemsArray = Object.values(items);
            setLoading(false);
            setItems(Array.from(itemsArray));
        }, err => {
            setError(err)
        })
    }

    const deleteItem = (id) => {
        itemApi.deleteItem(id).then(items => {
            const itemsArray = Object.values(items);
            setItems(Array.from(itemsArray));
        });
    }

    useEffect(() => {
        fetchItems();
    }, []);

    console.log(items);

    return (
        <div className="admin-list">
            <h2 className="p-color">Edit Items</h2>
            <ul>
                { items &&
                    items.map(item => (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <i onClick={() => deleteItem(item.id)}>&#128465;</i>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemsList;