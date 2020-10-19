import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemListItem = ({item, history}) => {
    const handleClick = () => {
        history.push(`/store/${item.id}`);
    }

    console.log(item);
    return (
        <div className="item-list-item" onClick={handleClick}>
            <img src={item.photoUrl} alt="item pic"/>
            <h4>{item.title}</h4>
            <h6 className="money">${item.price}</h6>
        </div>
    )
}

export default withRouter(ItemListItem);