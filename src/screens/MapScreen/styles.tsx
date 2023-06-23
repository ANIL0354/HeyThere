import { StyleSheet } from 'react-native';
import {normalize,hp} from '../../utils/responsiveness'
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
    },
    icon:{
      width:hp(1.6),
      height:hp(1.6)
    }
  });


  export default styles