import React, { Component } from 'react';
//import { connect } from 'react-redux'
import ReactMapboxGl, {
    Source,
    Layer,
    Feature,
    Popup,
    GeoJSONLayer
} from "react-mapbox-gl";

// import * as MapboxGL from "mapbox-gl";

const geojson = require('../jabalpur.geojson');

const accessToken = "pk.eyJ1Ijoic2FqYWwtdnJ0ZWNoIiwiYSI6ImNqemRzeDJldjAzZ24zZ3BocDlsZzNwdDgifQ.-K6a-NHMP1k2Pxl9A91pWg";
const style = "mapbox://styles/mapbox/streets-v9";

const data = {
    type: 'Feature',
    geometry: {
        type: 'Polygon',
        coordinates: [
            [
                [-67.13734351262877, 45.137451890638886],
                [-66.96466, 44.8097],
                [-68.03252, 44.3252],
                [-69.06, 43.98],
                [-70.11617, 43.68405],
                [-70.64573401557249, 43.090083319667144],
                [-70.75102474636725, 43.08003225358635],
                [-70.79761105007827, 43.21973948828747],
                [-70.98176001655037, 43.36789581966826],
                [-70.94416541205806, 43.46633942318431],
                [-71.08482, 45.3052400000002],
                [-70.6600225491012, 45.46022288673396],
                [-70.30495378282376, 45.914794623389355],
                [-70.00014034695016, 46.69317088478567],
                [-69.23708614772835, 47.44777598732787],
                [-68.90478084987546, 47.184794623394396],
                [-68.23430497910454, 47.35462921812177],
                [-67.79035274928509, 47.066248887716995],
                [-67.79141211614706, 45.702585354182816],
                [-67.13734351262877, 45.137451890638886]
            ]
        ]
    }
};

const MapComponent = ReactMapboxGl({
    accessToken: accessToken
});

const markerCoords = [
    {
        name: 'Gol Bazar',
        icon: 'airport-15',
        lat: 23.170104781,
        long: 79.927141010
    },
    {
        name: 'Ranital',
        icon: 'amusement-park-15',
        lat: 23.172570622,
        long: 79.922817289
    },
    {
        name: 'Stadium',
        icon: 'bakery-15',
        lat: 23.164502220,
        long: 79.927280484
    },
    {
        name: 'Ghanta Ghar',
        icon: 'bank-15',
        lat: 23.169480916,
        long: 79.940096079
    },
    {
        name: 'Central Jail',
        icon: 'car-15',
        lat: 23.172935563,
        long: 79.954795926
    },
    {
        name: 'Dumna Park',
        icon: 'doctor-15',
        lat: 23.169521602,
        long: 80.012726276
    }
]

const lineCoords = [
    [79.927141010, 23.170104781],
    [79.927280484, 23.164502220],
    [79.940096079, 23.169480916],
    [79.954795926, 23.172935563]
    // [80.012726276, 23.169521602]
];

const polygonCoords = [
    [
        [
            [79.92709721350627, 23.18183957066586],
            [79.92833639407115, 23.18150424213409],
            [79.92815936827617, 23.17985224371677],
            [79.92696310305553, 23.180024841520474],
            [79.92635155940013, 23.179990321977545],
            [79.9259492280479, 23.180014978794826],
            [79.925788295507, 23.180167850960604],
            [79.92609943175273, 23.180764543871888]
        ]],
    [[
        [79.93020771417741, 23.15976035278073],
        [79.93048129949693, 23.160801023768194],
        [79.93149517450456, 23.163341016158263],
        [79.93262170229082, 23.163195522749206],
        [79.93367849264268, 23.163517334230228],
        [79.93552921686296, 23.164322476042045],
        [79.93670402441148, 23.163084553093693],
        [79.93756233129625, 23.15839415157901],
        [79.93634698961091, 23.156434145028047],
        [79.93399946142108, 23.155926605443643],
        [79.93354452934204, 23.156896029739475],
        [79.93197379831292, 23.15646470088241]
    ]]
];

const layerPaint = {
    'heatmap-weight': {
        property: 'priceIndicator',
        type: 'exponential',
        stops: [[0, 0], [5, 2]]
    },
    // Increase the heatmap color weight weight by zoom level
    // heatmap-ntensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': {
        stops: [[0, 0], [5, 1.2]]
    },
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0,
        'rgba(33,102,172,0)',
        0.25,
        'rgb(103,169,207)',
        0.5,
        'rgb(209,229,240)',
        0.8,
        'rgb(253,219,199)',
        1,
        'rgb(239,138,98)',
        2,
        'rgb(178,24,43)'
    ],
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': {
        stops: [[0, 1], [5, 50]]
    }
};

const geoJsonData = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {"name": "my point"},
        "geometry": {
            "type": "Point",
            "coordinates": [
                79.927141010,
                23.170104781
            ]
        }
    }]
}

const RASTER_SOURCE_OPTIONS = {
    "type": "raster",
    "tiles": [
      "https://api.mapbox.com/v4/mapbox.satellite/1/0/0@2x.jpg90?access_token=pk.eyJ1Ijoic2FqYWwtdnJ0ZWNoIiwiYSI6ImNqemRzeDJldjAzZ24zZ3BocDlsZzNwdDgifQ.-K6a-NHMP1k2Pxl9A91pWg",
    ],
    "tileSize": 512
  };

//const map;

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: [79.927141010, 23.170104781],
            zoom: [13],
            popName: '',
            popLat: '',
            popLong: '',
            showPopup: false,
            popName2: '',
            popLat2: '',
            popLong2: '',
            showPopup2: false
        }
    }

    componentDidMount() {
        // let map = new ReactMapboxGl.Map({
        //   container: this.mapContainer,
        //   style: 'mapbox://styles/mapbox/streets-v9'
        // });
    }

    componentWillUnmount() {
        // const map = this.map;
        // map.remove();        
    }

    handleonDrag = (viewport) => {
        console.log('map scrolled')
    }

    markerClick = (mark) => {
        //console.log('hi sajal ', mark);
        this.setState({
            center: [mark.long, mark.lat],
            zoom: [14],
            popName: mark.name,
            popLat: mark.lat,
            popLong: mark.long,
            showPopup: true
        })
    }

    polygonClick = (coords) => {
        this.setState({
            popName2: coords,
            popLat2: coords[1],
            popLong2: coords[0],
            showPopup2: true
        })
    }

    handleMapClick = () => {
        this.setState({
            showPopup: false,
            showPopup2: false
        })
    }

    render() {
        console.log('geoJsonData = ', geoJsonData)
        return (
            <div className="innercontent">
                <h1>Map Page</h1>
                <div className="mapcontainer">
                    <div className="maptitle">Markers with popup</div>
                    <MapComponent
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={this.state.center}
                        zoom={this.state.zoom}
                    // flyToOptions={{speed: 0.8}}
                    >
                        {
                            markerCoords.map((mark) => (
                                <Layer
                                    key={mark.name}
                                    type="symbol"
                                    layout={{ "icon-image": mark.icon, "icon-size": 1.5 }}
                                    onClick={() => this.markerClick(mark)}>
                                    <Feature coordinates={[mark.long, mark.lat]} />
                                </Layer>
                            ))
                        }
                        {(this.state.showPopup) ?
                            <Popup coordinates={[this.state.popLong, this.state.popLat]}>
                                {this.state.popName}
                            </Popup>
                            : ''}
                    </MapComponent>
                </div>
                <div className="mapcontainer">
                    <div className="maptitle">Line, Circle, Polygon</div>
                    <MapComponent
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={this.state.center}
                        zoom={this.state.zoom}
                        onDrag={() => this.handleonDrag()}
                        onClick={() => this.handleMapClick()}
                    >
                        <Layer
                            id='route'
                            type='line'
                            source='route'
                            layout={{
                                'line-join': 'round',
                                'line-cap': 'round'
                            }}
                            paint={{
                                'line-color': '#ff5294',
                                'line-width': 6
                            }}
                        >
                            <Feature coordinates={lineCoords} />
                        </Layer>
                        <Layer
                            id='poly'
                            type='fill'
                            paint={{
                                'fill-color': '#b169f5',
                                'fill-opacity': 0.5,
                                'fill-outline-color': '#88898F'
                            }}
                            onClick={() => this.polygonClick(polygonCoords[0][0][0])}
                        >
                            <Feature coordinates={polygonCoords} />
                        </Layer>
                        <Layer
                            id='circle'
                            type='circle'
                            paint={{
                                'circle-radius': 10,
                                'circle-color': '#B42222',
                                'circle-opacity': 0.8,
                            }}
                        >
                            <Feature coordinates={[79.92445977150669, 23.172215223051538]} />
                            <Feature coordinates={[79.92304356514683, 23.169660603766015]} />
                        </Layer>
                        {(this.state.showPopup2) ?
                            <Popup coordinates={[this.state.popLong2, this.state.popLat2]}>
                                {this.state.popName2}
                            </Popup>
                            : null}
                    </MapComponent>
                </div>
                <div className="mapcontainer">
                    <div className="maptitle">Heatmap</div>
                    <MapComponent
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={[79.92709286050604, 23.17011148959141]}
                        zoom={[13]}
                    >
                        <Layer
                            id='heat'
                            type='heatmap'
                            paint={layerPaint}
                        >
                            <Feature coordinates={[79.92445977150669, 23.172215223051538]} />
                            <Feature coordinates={[79.92304356514683, 23.169660603766015]} />

                            <Feature coordinates={[79.929501, 23.168839]} />
                            <Feature coordinates={[79.922442, 23.171091]} />
                            <Feature coordinates={[79.924381, 23.171833]} />
                        </Layer>
                    </MapComponent>
                </div>                
                <div className="mapcontainer" id="map5">
                    <div className="maptitle">Geojson Layer</div>
                    <MapComponent
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={[79.927052, 23.170114]}
                        zoom={[15]}
                    >
                        <GeoJSONLayer
                            data={geojson}
                            symbolLayout={{
                                "icon-image": "car-15",
                                "text-field": "{name}",
                                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                                "text-offset": [0, 0.6],
                                "text-anchor": "top"
                            }}
                            symbolPaint={{ 'text-color': 'red' }}
                            // circlePaint={{'circle-color': 'white'}}
                            fillPaint={{ 'fill-color': '#b169f5', 'fill-opacity': 0.5, 'fill-outline-color': '#88898F' }}
                        />
                    </MapComponent>
                </div>
                <div className="mapcontainer">
                    <div className="maptitle">Source</div>
                    <MapComponent
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={[79.92709286050604, 23.17011148959141]}
                        zoom={[15]}
                    >
                        <Source id="source_id" type="geojson" data={geojson} />
                        <Layer id="layer_id" type="symbol" source="source_id" layout={{ "icon-image": "car-15", "text-field": "hallu", "icon-size": 1.5 }} />
                    </MapComponent>
                </div> 
                {/* <div className="mapcontainer">
                    <div className="maptitle">Source</div>
                    <MapComponent
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={[79.927052, 23.170114]}
                        zoom={[15]}
                    >
                        <GeoJSONLayer
                            data={geojson}
                            // symbolLayout={{
                            //     "icon-image": "car-15",
                            //     "text-field": "{name}",
                            //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                            //     "text-offset": [0, 0.6],
                            //     "text-anchor": "top"
                            // }}
                            // symbolPaint={{ 'text-color': 'red' }}
                            circlePaint={layerPaint}
                            // fillPaint={{ 'fill-color': '#b169f5', 'fill-opacity': 0.5, 'fill-outline-color': '#88898F' }}
                            fillPaint={layerPaint}
                        />
                    </MapComponent>
                </div>  */}

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     //console.log('new state = ', state);
//     return {
//         loggedUser: state.loggedUser.user
//     }
// }

//export default connect(mapStateToProps)(Map);

export default Map;