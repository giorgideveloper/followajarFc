'use client'

import GoogleMapReact from 'google-map-react';

const defaultProps = {
    center: {
        lat: 41.992724,
        lng: 42.979218
    },
    zoom: 8
};


const Marker = ({ text }: any) => {
    return (
        <p>{text}</p>
    )
}


const Map = () => {
    return (
        <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBzCvOuRZOMAoVHCd3FaP_3lDYfn2jyMoY" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    // lat={59.955413}
                    // lng={30.337844}
                    text="ა"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map