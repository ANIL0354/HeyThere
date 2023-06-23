import React,{useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView,{ Marker }  from 'react-native-maps';
import styles from './styles';

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
    const otherUsers = [
        {
          id: 1,
          name: 'Jimmy',
          latitude: 37.7896386,
          longitude: -122.4224074,
          title:"Jimmy",
          picture:'https://randomuser.me/api/portraits/med/men/46.jpg'
        },
        {
          id: 2,
          name: 'Emily',
          latitude: 37.78825,
          longitude: -122.4324,
          title:"Emily",
          picture:'https://randomuser.me/api/portraits/med/women/46.jpg'
        },
        {
          id: 3,
          name: 'David',
          latitude: 37.788752,
          longitude: -122.422383,
          title:"David",
          picture:'https://randomuser.me/api/portraits/med/men/48.jpg'

        },
        {
          id: 4,
          name: 'Sarah',
          latitude: 37.789122,
          longitude: -122.431824,
          title:"Sarah",
          picture:'https://randomuser.me/api/portraits/med/women/48.jpg'

        },
        {
          id: 5,
          name: 'Michael',
          latitude: 37.789609,
          longitude: -122.430675,
          title:"Michael",
          picture:'https://randomuser.me/api/portraits/med/men/50.jpg'
        },
        {
          id: 6,
          name: 'Sophia',
          latitude: 37.788208,
          longitude: -122.432234,
          title:"Sophia",
          picture:'https://randomuser.me/api/portraits/med/women/50.jpg'

        },
        {
          id: 7,
          name: 'Daniel',
          latitude: 37.789083,
          longitude: -122.431198,
          title:"Daniel",
          picture:'https://randomuser.me/api/portraits/med/men/52.jpg'

        },
        {
          id: 8,
          name: 'Olivia',
          latitude: 37.788976,
          longitude: -122.432567,
          title: 'Olivia',
          picture:'https://randomuser.me/api/portraits/med/women/52.jpg'

        },
        {
          id: 9,
          name: 'Jacob',
          latitude: 37.788602,
          longitude: -122.431027,
          title: 'Jacob',
          picture:'https://randomuser.me/api/portraits/med/men/56.jpg'

        },
        {
          id: 10,
          name: 'Emma',
          latitude: 37.789497,
          longitude: -122.432123,
          title: 'Emma',
          picture:'https://randomuser.me/api/portraits/med/women/56.jpg'

        }
        // Add more users as needed
      ];

    React.useEffect(() => {
        // Fetch user location and other user locations data here
        // setUserLocation(userLocationData);
        // setOtherUserLocations(otherUserLocationsData);
        setUserLocation({...initialRegion})
        setOtherUserLocations([...otherUsers]);
    }, []);

    const handleMarkerPress=useCallback((params:object)=>{
      props.navigation.push('Chat',{...params});
    },[])
    // function handleMarkerPress() {
    //     // alert("props"+JSON.stringify(props))
    //     // Add your custom logic here
    //   };
  return (
    <View style={{ flex: 1 }}>
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