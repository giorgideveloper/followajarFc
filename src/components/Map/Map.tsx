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
            lat: 41.695768,
            lng: 41.712146
        },
    },
    {
        letter: 'გ',
        title: 'გონიოს ციხე',
        position:
        {
            lat: 41.573170,
            lng: 41.573216
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
        letter: 'ე',
        title: 'ევროპის მოედანი',
        position:
        {
            lat: 41.651120,
            lng: 41.636191
        },
    },
    {
        letter: 'ვ',
        title: 'ველობილიკი ',
        position:
        {
            lat: 41.647591,
            lng: 41.620594
        },
    },
    {
        letter: 'ზ',
        title: 'ზღვა',
        position:
        {
            lat: 41.8286517, 
            lng: 41.7750078
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
            lat: 41.797924,
            lng:  41.786068
        },
    },
    {
        letter: 'კ',
        title: 'კვარიათი',
        position:
        {
            lat: 41.545749, 
            lng: 41.561787
        },
    },
    {
        letter: 'ლ',
        title: 'ლაზური ნავი',
        position:
        {
            lat: 41.521867, 
            lng: 41.549204
        },
    },
    {
        letter: 'მ',
        title: 'მაჭახელა',
        position:
        {
            lat: 41.489290, 
            lng: 41.858906
        },
    },
    {
        letter: 'ნ',
        title: 'ნობელები',
        position:
        {
            lat: 41.661698,
            lng:  41.680265
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
            lat: 41.768576, 
            lng:41.753206
        },
    },
    {
        letter: 'ჟ',
        title: 'ჟანგბადი',
        position:
        {
            lat:41.863688,
            lng:  41.789911
        },
    },
    {
        letter: 'რ',
        title: 'რვაფეხა',
        position:
        {
            lat: 41.650014, 
            lng: 41.625316
        },
    },
    {
        letter: 'ს',
        title: 'სხალთა',
        position:
        {
            lat: 41.584570,
            lng: 42.329392
        },
    },
    {
        letter: 'ტ',
        title: 'ტბიყელის ტბა',
        position:
        {
            lat: 41.770887, 
            lng:42.090285
        },
    },
    {
        letter: 'უ',
        title: 'უჩხო ',
        position:
        {
            lat: 41.696954, 
            lng:42.310812
        },
    },
    {
        letter: 'ფ',
        title: 'ფრინველებზე დაკვირვება',
        position:
        {
            lat: 41.684470,
            lng:  41.729928
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
            lat: 41.636654, 
            lng: 41.618648
        },
    },
    {
        letter: 'ყ',
        title: 'ყავა ბათუმური',
        position:
        {
            lat:41.649380, 
            lng:41.644850
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
            lat: 41.476720,
            lng:  42.469798
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
            lat: 41.6502136, 
            lng: 41.6385755
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
            lat: 41.569776, 
            lng: 41.979913
        },
    },
    {
        letter: 'ჰ',
        title: 'ჰორიზონტები',
        position:
        {
            lat: 41.5424240,
            lng:  41.5578457
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