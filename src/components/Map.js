import React from 'react';
import MapView, {Polyline} from 'react-native-maps';
import {Text, StyleSheet} from 'react-native';

const Map = () => {

    let points = [];
    for(let i=0;i<20;i++) {
        points.push({
            latitude: 37.3323 + i * 0.001,
            longitude: -122.03121 + i * 0.001
        })
    }

    return (
        <MapView 
        style={styles.map}
        initialRegion={{
            latitude: 37.3323,
            longitude: -122.0333,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01
        }}
        >
            <Polyline coordinates={points}/>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;