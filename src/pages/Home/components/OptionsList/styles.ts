import { normalTheme } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  listRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: normalTheme.primaryColor,
    padding: 2,
    marginVertical: 3,
  },
  container: {
    borderWidth: 0,
    flexWrap: 'nowrap',
    flexDirection: 'column'
  },
  text: {
    fontSize: 15,
  },
  closeButton: {
    borderWidth: 0,
  },
  removeIcon: {
    fontSize: 20,
  }
})