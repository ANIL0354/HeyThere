import {StyleSheet} from 'react-native'
import { hp,wp,normalize } from '../../utils/responsiveness';

const styles = StyleSheet.create({
  container:{
    flex:1
  },
   headerWrap:{
    flexDirection: "row",
    alignItems: "center",
  },
  headerUserImage:{
    width: hp(4),
    height: hp(4),
    borderRadius: hp(4 / 2),
    marginRight: wp(0.6),
  },
  headerTxt:{
    fontSize: normalize(16),
    lineHeight: hp(1.9),
    color: "#17282F",
    paddingLeft:wp(1.4),
    textAlign:"center"
  }
});


export default styles