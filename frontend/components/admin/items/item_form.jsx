import React from 'react';
import { Formik } from 'formik'

import itemsApi from '../../../util/item_api_util';

const categories = ["shirt", "sweatshirt", "hat", "album", "misc"]

const ItemForm = (props) => {
    const initialValues = {
        title: "",
        description: "",
        price: "",
        category: ""
    }

    const handleSubmit = (item) => {
        itemsApi.createItem(item);
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
                            <option value='' placeholder>Category</option>
                            {
                                categories.map((cat, idx) => (
                                    <option key={idx} value={cat}>{cat}</option>
                                ))
                            }
                        </select>

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

export default ItemForm;