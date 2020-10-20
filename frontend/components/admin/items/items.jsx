import React from 'react';

import ItemForm from './item_form';
import ItemList from './item_list';

const Items = () => (
    <div className="admin-item">
        <ItemForm />
        <ItemList />
    </div>
)

export default Items;