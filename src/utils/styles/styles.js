import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { colors } from '../styles/colors';
// Detect screen width and height
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 0.1,
    height: 55,
    width: '100%',
    top: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    elevation: 0.3,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: colors.BASE_TEXT_COLOR
    // backgroundColor:colors.HEADER_COLOR
  },
  header_txtStyle: {
    color: 'white',
    // color: colors.BASE_TEXT_COLOR,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: '2%',
    fontSize: 18
  },
  headerLogo: {
    width: 43,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1
  }, 
  input: {
    paddingHorizontal:14,
    overflow:'hidden'
  },
  inputBox:{
    borderColor: 'black', backgroundColor: 'red', borderWidth: 1,borderRadius:23, overflow: 'hidden'
  }
 
});

export default styles;