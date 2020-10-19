import React, { useState } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';

import itemsApi from '../../../util/item_api_util';

const categories = ["shirt", "sweatshirt", "hat", "album", "misc"]

const ItemForm = ({history}) => {
    const [photo, setPhoto] = useState();

    const initialValues = {
        title: "",
        description: "",
        price: "",
        category: ""
    }

    const handleFile = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleSubmit = (item) => {
        const formData = new FormData();

        formData.append('item[title]', item.title);
        formData.append('item[description]', item.description);
        formData.append('item[price]', item.price);
        formData.append('item[category]', item.category);
        formData.append('item[photo]', photo);

        itemsApi.createItem(formData)
            .then(res => history.push(`/store/${res.id}`));;
    }

    return (
        <div className="admin-item-form-container">
            <h2 className="p-color">Add a New Item</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                // validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit}) => (
                    <div className="admin-item-form" >
                        <input 
                            onChange={handleChange("title")} 
                            placeholder="Title"
                            type="text"/>

                        <textarea 
                            onChange={handleChange("description")}
                            placeholder="Description" />

                        <input 
                            onChange={handleChange("price")} 
                            placeholder="Price"
                            type="text"/>

                        <select onChange={handleChange("category")}>
                            <option value='' >Category</option>
                            {
                                categories.map((cat, idx) => (
                                    <option key={idx} value={cat}>{cat}</option>
                                ))
                            }
                        </select>

                        <input 
                            onChange={handleFile}
                            type="file"/>

                        <button 
                            className="button"
                            onClick={handleSubmit} 
                            title="Add Item" 
                            ype='submit'>
                            Add Item
                        </button>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default withRouter(ItemForm);