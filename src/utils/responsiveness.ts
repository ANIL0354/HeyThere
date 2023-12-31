import {Dimensions, Platform} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const isiPAD = viewportHeight / viewportWidth < 1.6;
export const isTablet = viewportHeight / viewportWidth < 1.6;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';


export function wp(percentage:number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export function hp(percentage:number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

// based on iphone 5s's scale
const scale = viewportWidth / 375;

export function normalize(size:number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    }
    return Math.round(newSize);
  }
  if (isTablet) {
    return Math.round(newSize) - wp(1);
  }
  return Math.round(newSize);
}
