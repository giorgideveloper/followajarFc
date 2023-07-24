'use client'

import { useEffect, useState } from 'react';
// import GoogleMapReact from 'google-map-react';
import { MapContainer, Popup, TileLayer } from 'react-leaflet';

// const defaultProps = {
//     center: {
//         lat: 41.992724,
//         lng: 42.979218
//     },
//     zoom: 8
// };


const Marker = ({ text }: any) => {
    return (
        <p>{text}</p>
    )
}

const position = [41.992724, 42.979218]

const Map = () => {
    // const [inBrowser, setInBrowser] = useState(false)

    // useEffect(() => {
    //     setInBrowser(true)
    // }
    //     , [])

    // if (!inBrowser) {
    //     return null;
    // }
    return (
        // <div style={{ height: '60vh', width: '100%', margin: 'auto' }}>
            <MapContainer center={{ lat: 41.992724, lng: 42.979218 }} zoom={8} scrollWheelZoom={false} style={{ height: '60vh', width: "100%" }}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}  text="ა">
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        // {/* </div> */}
        // <div style={{ height: '60vh', width: '100%', margin: 'auto' }}>
        //     <GoogleMapReact
        //         bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? '' }}
        //         defaultCenter={defaultProps.center}
        //         defaultZoom={defaultProps.zoom}
        //     >
        //         <Marker
        //             lat={41.992724}
        //             lng={42.979218}
        //             text="ა"
        //         />
        //     </GoogleMapReact>
        // </div>
    )
}

export default Map