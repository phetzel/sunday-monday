import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemListItem = ({item, history}) => {
    const handleClick = () => {
        history.push(`/store/${item.id}`);
    }

    const getSrc = () => {
        switch (item.category) {
            case 'hat': 
                return window.hat;
            case 'shirt': 
                return window.shirt;
            case 'misc': 
                return window.misc;
            case 'sweatshirt': 
                return window.sweatshirt;
            case 'albumn': 
                return window.albumn;
        }
    }

    return (
        <div className="item-list-item" onClick={handleClick}>
            <img src={window.shirt} alt="item pic"/>
            <h4>{item.title}</h4>
            <h6 className="money">${item.price}</h6>
        </div>
    )
}

export default withRouter(ItemListItem);