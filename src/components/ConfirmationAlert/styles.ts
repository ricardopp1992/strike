import { normalTheme } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  viewContainer: {
    height: '30%',
    width: '95%',
    left: '3%',
    borderRadius: normalTheme.borderRadius,
    marginTop: '50%',
    padding: '5%',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff'
  },
  headerText: {
    fontWeight: '500',
    fontSize: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})