import { View, Text, StyleSheet } from 'react-native';
import {normalize} from '../../utils/responsiveness'
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    title:{
        fontSize:normalize(20),
        color:'purple',
        fontWeight:'500'
    }
  });


  export default styles