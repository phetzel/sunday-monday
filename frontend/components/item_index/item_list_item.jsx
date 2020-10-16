import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemListItem = ({item, history}) => {
    const handleClick = () => {
        history.push(`/store/${item.id}`);
    }

    const getImg = () => {
        switch (item.category) {
            case 'hat': 
                return <img src={window.hat} alt="item pic"/>;
            case 'shirt': 
                return <img src={window.shirt} alt="item pic"/>;
            case 'misc': 
                return <img src={window.misc} alt="item pic"/>;
            case 'sweatshirt': 
                return <img src={window.sweatshirt} alt="item pic"/>;
            case 'album': 
                return <img src={window.album} alt="item pic"/>;
        }
    }

    const image = getImg();

    return (
        <div className="item-list-item" onClick={handleClick}>
            {image}
            <h4>{item.title}</h4>
            <h6 className="money">${item.price}</h6>
        </div>
    )
}

export default withRouter(ItemListItem);