import React, { useState } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import Modal from './modal';
import eventApi from '../../../util/event_api_util';
import performApi from '../../../util/perform_api_util';


const EventForm = ({history}) => {
    const [date, setDate] = useState(new Date());
    const [performs, setPerforms] = useState([]);
    const [visible, setVisible] = useState(false);
    const [photo, setPhoto] = useState();

    const initialValues = {
        title: "",
        description: "",
        address: "",
        city: "",
        stateInit: ""
    }

    const handleFile = (e) => {
        setPhoto(e.currentTarget.files[0]);
    };

    const handleSubmit =  (event) => {
        const add = event.address.split(' ').join('+');
        const cit = event.city.split(' ').join('+');
        const string = `${add}+${cit},+${event.state}`;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${string}&key=${window.googleAPIKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data =>  {
                const res = data.results[0].geometry.location;
                const formData = new FormData();

                formData.append('event[title]', event.title);
                formData.append('event[description]', event.description);
                formData.append('event[address]', `${event.address} ${event.city} ${event.stateInit}`);
                formData.append('event[lat]', res.lat);
                formData.append('event[lng]', res.lng);
                formData.append('event[datetime]', date);
                formData.append('event[photo]', photo);

                eventApi.createEvent(formData).then(res => {
                    performs.forEach(perform => {
                        const newPerform = { event_id: res.id, artist_id: perform };
                        performApi.createPerform(newPerform);
                    });

                    history.push(`/events/${res.id}`);
                });
            })
    }

    const handleModal = (val) => setVisible(val);

    return (
        <div className="admin-event-form-container">
            <Modal 
                performs={performs}
                setPerforms={setPerforms}
                setVisible={setVisible}
                visible={visible}/>

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

                        <input 
                            onChange={handleFile}
                            type="file"/>

                        <div className="admin-release-buttons">
                            <button 
                                className="button"
                                onClick={handleSubmit} 
                                title="Add Event" 
                                type='submit'>
                                Add Event
                            </button>

                            <button 
                                className="button"
                                onClick={() => handleModal('true')} 
                                title="Add Artists" >
                                Add Artists
                            </button>
                        </div>
                    </ div>
                )}

            </Formik>
        </div>
    )
}

export default withRouter(EventForm);