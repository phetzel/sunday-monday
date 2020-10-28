import React from 'react';


class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { lat, lng } = this.props.event;

        const mapOptions = {
            center: { lat: lat, lng: lng },
            zoom: 13,
            zoomControl: true
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