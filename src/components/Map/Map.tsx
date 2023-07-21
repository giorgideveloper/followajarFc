import GoogleMapReact from 'google-map-react';

const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};


const Marker = ({ text }) => {
    return (
        <p>{text}</p>
    )
}


const Map = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBzCvOuRZOMAoVHCd3FaP_3lDYfn2jyMoY" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    // lat={59.955413}
                    // lng={30.337844}
                    text="ა"
                />
            </GoogleMapReact> */}
        </div>
    )
}

export default Map