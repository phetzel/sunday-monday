import React, { useState } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import eventApi from '../../../util/event_api_util';


const EventForm = ({history}) => {
    const [date, setDate] = useState(new Date());

    const initialValues = {
        title: "",
        description: "",
        address: "",
        city: "",
        stateInit: ""
    }

    const getLngLat = (address, city, state) => {
        let res;

        const add = address.split(' ').join('+');
        const cit = city.split(' ').join('+');
        const string = `${add}+${cit},+${state}`;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${string}&key=${window.googleAPIKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data =>  {
                res = data.results[0].geometry.location;
                setLat(res[0]);
                setLng(res[1]);
            })
    }

    const handleSubmit =  (event) => {
        const add = event.address.split(' ').join('+');
        const cit = event.city.split(' ').join('+');
        const string = `${add}+${cit},+${event.state}`;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${string}&key=${window.googleAPIKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data =>  {
                const res = data.results[0].geometry.location;
                console.log(res);
                const formData = new FormData();

                formData.append('event[title]', event.title);
                formData.append('event[description]', event.description);
                formData.append('event[address]', `${event.address} ${event.city} ${event.stateInit}`);
                formData.append('event[lat]', res.lat);
                formData.append('event[lng]', res.lng);
                formData.append('event[datetime]', date);

                eventApi.createEvent(formData)
                    .then(res => history.push(`/events`));;
            })
    }


    return (
        <div className="admin-event-form-container">
            <h2 className="p-color">Add an Event</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                { ({ handleChange, handleSubmit}) => (
                    <div className="admin-event-form" >
                        <input 
                            onChange={handleChange("title")} 
                            placeholder="Title"
                            type="text"/>

                        <input 
                            onChange={handleChange("address")} 
                            placeholder="Address"
                            type="text"/>

                        <div className="event-city-state">
                            <input 
                                onChange={handleChange("city")} 
                                placeholder="City"
                                type="text"/>

                            <input 
                                onChange={handleChange("stateInit")} 
                                placeholder="State Initials"
                                type="text"/>
                        </div>

                        <textarea 
                            onChange={handleChange("description")}
                            placeholder="Description" />
                        

                        <DatePicker
                            onChange={date => setDate(date)}
                            selected={date}
                            showTimeSelect
                            dateFormat="Pp"/>


                        <button 
                            className="button"
                            onClick={handleSubmit} 
                            title="Add Event" 
                            type='submit'>
                            Add Event
                        </button>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default withRouter(EventForm);