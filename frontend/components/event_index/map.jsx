import React from 'react';

const mapOptions = {
    center: { lat: 37.7758, lng: -122.435 }, // this is SF
    zoom: 13
};

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { lat, lng } = this.props.event;

        const mapOptions = {
            center: { lat: lat, lng: lng },
            zoom: 13
        };

        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);

        const position = new google.maps.LatLng(lat, lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map
        })
    }

    render() {
            return (
                <div className="event-map-container" ref="map">
                    <div ref={map => this.mapNode = map} /> 
                </div>
            )
    }
}

export default Map;