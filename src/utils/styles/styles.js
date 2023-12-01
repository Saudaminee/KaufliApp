import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../styles/colors";
// Detect screen width and height
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: colors.WHITE,
    flexDirection: "column",
  },
  headerContainer: {
    flex: 0.1,
    height: 55,
    width: "100%",
    top: 0,
    paddingHorizontal: 10,
    flexDirection: "row",
    elevation: 0.3,
    alignItems: "center",
    position: "absolute",
    backgroundColor: colors.BASE_TEXT_COLOR,
    // backgroundColor:colors.HEADER_COLOR
  },
  header_txtStyle: {
    color: "white",
    // color: colors.BASE_TEXT_COLOR,
    textAlign: "center",
    alignSelf: "center",
    marginLeft: "2%",
    fontSize: 18,
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
});

export default styles;
