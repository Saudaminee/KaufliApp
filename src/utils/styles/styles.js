import {
  StyleSheet,
  Dimensions,
  StatusBar
} from 'react-native';
import { colors } from '../styles/colors';
// Detect screen width and height
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.GRAYS_WHITE,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 0.1,
    height: 55,
    width: "100%",
    top: 0,
    paddingHorizontal: 10,
    flexDirection: "row",
    elevation: 0.3,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: colors.BASE_TEXT_COLOR
  },
  header_txtStyle: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: '2%',
    fontSize: 18
  },
  headerLogo: {
    width: 43,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 1,
  },
  input: {
    paddingHorizontal: 14,
    overflow: "hidden",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#EDEEF1",
    marginHorizontal: "5%",
    height: 40,
  },
  inputBox: {
    borderColor: "black",
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 23,
    overflow: "hidden",
  },
  //login Screen
  loginText: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
    marginStart: "6%",
    marginTop: "5%",
    textAlign: "left",
  },
  loginButton: {
    backgroundColor: "#242F65",
    color: "red",
    height: 40,
    marginHorizontal: "5%",
    borderRadius: 10,
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  login_txt: {
    color: "#ffffff",
    fontWeight: "500",
  },
  continueText: {
    color: "grey",
    fontSize: 14,
    marginStart: "6%",
    textAlign: "left",
    //marginVertical: "2%",
    marginBottom: "2%",
  },
  forgotPassText: {
    color: "#242F65",
    fontWeight: "500",
    textAlign: "right",
    marginEnd: "5%",
  },
  card: {
    width: "100%",
    height: "70%",
    alignSelf: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  CreteNewButton: {
    color: "red",
    height: 40,
    marginHorizontal: "5%",
    borderRadius: 10,
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#EDEEF1",
  },
  Createnew_txt: {
    color: "#242F65",
    fontWeight: "500",
  },
  card: {
    width: "100%",
    height: "70%",
    alignSelf: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  LogRegText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "500",
    marginTop: "25%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backbtnView: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  backicon: {
    height: "50%",
    width: "50%",
  },
  forgorPassText: {
    fontSize: 20,
    color: "#000",
    marginHorizontal: "7%",
    fontWeight: "500",
  },
  forgotPassSubText: {
    fontSize: 15,
    marginHorizontal: "7%",
    marginVertical: 10,
  },
  logo_style: { height: 180, width: 180, marginTop: 10 },
  TopText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "500",
    textAlign: "left",
  },
  textpara: {
    fontSize: 13,
    marginTop: 10,
    textAlign: "center",
  },
  bottomView: {
    backgroundColor: "#3B2A96",
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "flex-end",
  },
  BottomTxt: {
    color: "#000",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 13,
    textAlign: "center",
  },
  loginEyeCrossiconStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  errorTextStyle: {
    color: "#3B2A96",
    textAlign: "center",
    fontSize: 14,
  },
  text_input: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
  },
  action: {
    flexDirection: "row",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#3B2A96",
    //paddingBottom: 5,
  },
  loginEyeCrossiconStyle: {
    flexDirection: "row",
    right: 40,
    top: 30,
  },
  backbtn: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  backicon: {
    height: "50%",
    width: "50%",
  },

  card1: {
    width: "100%",
    height: "70%",
    alignSelf: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  card2: {
    width: "100%",
    height: "60%",
    alignSelf: "center",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  eyebutton_style: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  eye_icon_style: { position: "absolute", right: 12, bottom: 10 },
  eye_icon: {
    height: 15,
    width: 18,
    tintColor: "grey",
  },
  //detailed Screen style
  image_background_color: {
    backgroundColor: "#F0F1F2",
    flex: 2,
  },
  inputBox:{
    borderColor: 'black', backgroundColor: 'red', borderWidth: 1,borderRadius:23, overflow: 'hidden'
  },
  content: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:colors.WHITE,
    marginTop:5,
    padding:10,
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },
  headerContainerDashboard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop:StatusBar.currentHeight,
    paddingTop:24,
    paddingBottom:20
  },
  seeAll:{
      width:20,
      height:20,
      backgroundColor:colors.GRAYS_WHITE,
      borderColor:colors.GRAYS_WHITE,
      borderWidth:1,
      borderRadius:40,
      marginRight: 16,
      justifyContent:'center',
      alignItems:'center'
  },
  seeAllicon: {
    width: 18,
    height: 18
    
  },
  categoryStyle:{
    width:60,
    height:60,
    backgroundColor:colors.GRAYS_WHITE,
    borderColor:colors.GRAYS_WHITE,
    borderWidth:1,
    borderRadius:50,
    marginRight: 16,
    justifyContent:'center',
    alignItems:'center'
},
containerCategory: {
  marginVertical:10
},
brandContainer: {
  width:60,
  height:60,
  borderRadius:50,
  borderRadius: 8,
  marginRight: 16,
  marginLeft:10,
  marginVertical:15,
  justifyContent:'center',
  alignItems:'center'
},
listContainer: {
  flexDirection: 'column',
},
itemContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 16,
},
itemImage: {
  width: 80,
  height: 80,
  borderRadius: 8,
  marginRight: 16,
},
itemName: {
  fontSize: 18,
  flex: 1,
},
removeButton: {
  color: 'red',
},
image: {
  width: "100%",
  height: 150,
  resizeMode: "cover", // or 'contain' based on your preference
  borderRadius: 8,
  marginBottom: 8,
  overflow: "hidden",
  position: "relative", // or 'absolute' based on your layout
},
wish_container: {
  flex: 1,
  margin: 10,
  backgroundColor: colors.GRAYS_WHITE,
  borderRadius: 8,
  padding: 8,
},
remove: {
  width: 28,
  height: 28,
  backgroundColor: colors.GRAYS_WHITE,
  right: "5%",
  marginTop: 5,
  position: "absolute",
  borderRadius: 40,
  justifyContent: "center",
  alignItems: "center",
}
 
});

export default styles;
