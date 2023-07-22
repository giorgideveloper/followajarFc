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
        <div style={{ height: '60vh', width: '100%', margin: 'auto' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? '' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={41.992724}
                    lng={42.979218}
                    text="ა"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map