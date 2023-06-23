import React,{useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView,{ Marker }  from 'react-native-maps';
import styles from './styles';
const otherUsers=require('../../utils/nearByUser.json')
interface userType {
  id: number;
  name: string;
  latitude: number;
  longitude: number,
  title:string;
}

interface myProps {
  navigation: any;
}

const MapScreen = (props:myProps) => {
    const [userLocation, setUserLocation] = React.useState({});
    const [otherUserLocations, setOtherUserLocations] = React.useState([]);

    const initialRegion={
        latitude: 37.789,
        longitude: -122.432,
    }


    React.useEffect(() => {
        // Fetch user location and other user locations data here
        setUserLocation({...initialRegion})
        setOtherUserLocations([...otherUsers]);
    }, []);

    const handleMarkerPress=useCallback((params:object)=>{
      props.navigation.push('Chat',{...params});
    },[])

  return (
    <View style={styles.container}>
        <MapView
         style={styles.map}
         region={userLocation}
         initialRegion={{
            latitude: 37.789,
            longitude: -122.432,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}    
         loadingEnabled={true}
         loadingIndicatorColor="#666666"
         loadingBackgroundColor="#eeeeee"
         moveOnMarkerPress={false}
         showsUserLocation={true}
         showsCompass={true}
         showsPointsOfInterest={false}
         provider="google"
         >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="You are here"
          />
        )}
         {otherUserLocations.map((marker:userType)  => (  
              <Marker
                key={marker.id}
                coordinate={{
                    latitude:marker.latitude,
                    longitude:marker.longitude
                }}
                title={marker.title}
                onPress={()=>handleMarkerPress(marker)}
              >
                <Text style={styles.title}>{marker.title}</Text></Marker>
                ))
         }
      </MapView>
    </View>
  );
};


export default MapScreen;