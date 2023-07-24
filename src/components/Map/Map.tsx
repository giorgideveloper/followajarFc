'use client'

import { useEffect, useState } from 'react';

// import GoogleMapReact from 'google-map-react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import * as L from "leaflet";


const markers = [
    {
        letter: 'ა',
        title: 'ანბანის კოშკი',
        position: {
            lat: 41.6562587,
            lng: 41.6406700
        },
    },
    {
        letter: 'ბ',
        title: 'ბოტანიკური ბაღი',
        position:
        {
            lat: 41.6921091,
            lng: 41.7074848
        },
    },
    {
        letter: 'გ',
        title: 'გონიოს ციხე',
        position:
        {
            lat: 41.5736833,
            lng: 41.5724976
        },
    },
    {
        letter: 'დ',
        title: 'დანდალოს ხიდი',
        position:
        {
            lat: 41.6466546,
            lng: 42.1072594,
        },
    },
    {
        letter: 'ზ',
        title: 'ზღვა',
        position:
        {
            lat: 41.656423,
            lng: 41.633144
        },
    },
    {
        letter: 'თ',
        title: 'თაგო',
        position:
        {
            lat: 41.6268891,
            lng: 42.3125161
        },
    },
    {
        letter: 'ი',
        title: 'იახნი',
        position:
        {
            lat: 41.799330,
            lng: 41.787096
        },
    },
    {
        letter: 'კ',
        title: 'კვარიათი',
        position:
        {
            lat: 41.5511055,
            lng: 41.5643521
        },
    },
    {
        letter: 'ლ',
        title: 'ლაზური ნავი',
        position:
        {
            lat: 41.529038,
            lng: 41.5489589
        },
    },
    {
        letter: 'მ',
        title: 'მაჭახელა',
        position:
        {
            lat: 41.4881364,
            lng: 41.8591731
        },
    },
    {
        letter: 'ნ',
        title: 'ნობელები',
        position:
        {
            lat: 41.6620388,
            lng: 41.6801917
        },
    },
    {
        letter: 'ო',
        title: 'ოდა სახლი',
        position:
        {
            lat: 41.8562561,
            lng: 41.9275329
        },
    },
    {
        letter: 'პ',
        title: 'პეტრას ციხე',
        position:
        {
            lat: 41.7672517,
            lng: 41.7536537
        },
    },
    {
        letter: 'ჟ',
        title: 'ჟანგბადი',
        position:
        {
            lat: 41.863777,
            lng: 41.790268
        },
    },
    {
        letter: 'რ',
        title: 'რვაფეხა',
        position:
        {
            lat: 41.6503631,
            lng: 41.6253826
        },
    },
    {
        letter: 'ს',
        title: 'სხალთა',
        position:
        {
            lat: 41.5846583,
            lng: 42.3264525
        },
    },
    {
        letter: 'ტ',
        title: 'ტბიყელის ტბა',
        position:
        {
            lat: 41.771111,
            lng: 42.090757
        },
    },
    {
        letter: 'უ',
        title: 'უჩხო ',
        position:
        {
            lat: 41.6390650,
            lng: 42.3046284
        },
    },
    {
        letter: 'ფ',
        title: 'ფრინველებზე დაკვირვება',
        position:
        {
            lat: 41.6840167,
            lng: 41.7315113
        },
    },
    {
        letter: 'ქ',
        title: 'ქობულეთი',
        position:
        {
            lat: 41.8471496,
            lng: 41.7777128
        },
    },
    {
        letter: 'ღ',
        title: 'ღამის ბათუმი',
        position:
        {
            lat: 41.6367312,
            lng: 41.6197333
        },
    },
    {
        letter: 'ყ',
        title: 'ყავა ბათუმური',
        position:
        {
            lat: 41.655644,
            lng: 41.642918
        },
    },
    {
        letter: 'შ',
        title: 'შუქურა',
        position:
        {
            lat: 41.6559280,
            lng: 41.6414262
        },
    },
    {
        letter: 'ჩ',
        title: 'ჩირუხი',
        position:
        {
            lat: 41.5564324,
            lng: 42.3068915
        },
    },
    {
        letter: 'ც',
        title: 'ციხისძირი',
        position:
        {
            lat: 41.759875,
            lng: 41.746332
        },
    },
    {
        letter: 'ძ',
        title: 'ძველი ბათუმი',
        position:
        {
            lat: 41.651531,
            lng: 41.638223
        },
    },
    {
        letter: 'წ',
        title: 'წვიმა',
        position:
        {
            lat: 41.680043,
            lng: 41.860286
        },
    },
    {
        letter: 'ჭ',
        title: 'ჭვანა',
        position:
        {
            lat: 41.705598,
            lng: 42.179650
        },
    },
    {
        letter: 'ხ',
        title: 'ხიხანი',
        position:
        {
            lat: 41.541672,
            lng: 42.565229
        },
    },
    {
        letter: 'ჯ',
        title: 'ჯარა',
        position:
        {
            lat: 41.570796,
            lng: 41.979458
        },
    },
    {
        letter: 'ჰ',
        title: 'ჰორიზონტები',
        position:
        {
            lat: 41.625699,
            lng: 41.656162
        },
    },
]

const Map = () => {
    const LeafIcon = L.Icon.extend({
        options: {}
    });

    //@ts-ignore
    const Icon = new LeafIcon({
        iconUrl:
            "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    })
    // const [inBrowser, setInBrowser] = useState(false)

    // useEffect(() => {
    //     setInBrowser(true)
    // }
    //     , [])

    // if (!inBrowser) {
    //     return null;
    // }
    return (
        <MapContainer center={{ lat: 41.675633, lng: 42.104738 }}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: '60vh', width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((item, index) =>
                <Marker key={index} position={item.position} icon={Icon}>
                    <Tooltip direction="bottom" offset={[0, 20]} opacity={1}  >
                        {item.title}
                    </Tooltip>
                    {/* <Popup>{item.title}</Popup> */}
                </Marker>
            )}
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