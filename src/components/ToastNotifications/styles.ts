import { normalTheme } from "@/theme";
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
    backgroundColor: normalTheme.modalBackground,
    width: '90%',
    top: '3%',
    left: '5%',
    zIndex: 100,
  },
  closeToast: {
    fontSize: 20,
    color: normalTheme.primaryColor,
  }
})