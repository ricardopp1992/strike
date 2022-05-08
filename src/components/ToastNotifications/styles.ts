import { StyleSheet } from "react-native";

export default StyleSheet.create({
  errorToastBox: {

  },
  messageToastBox: {

  },
  warningToastBox: {

  },
  successToastBox: {

  },
  toastBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    padding: '5%',
    borderRadius: 10,
    backgroundColor: '#c9c6c6',
    width: '90%',
    top: '3%',
    left: '5%',
    zIndex: 100,
  },
  closeToast: {
    fontSize: 20,
  }
})