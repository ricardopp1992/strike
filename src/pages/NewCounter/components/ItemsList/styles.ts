import { normalTheme } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
  },
  itemBox: {
    width: '80%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4%',
  },
  itemInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    marginRight: '5%',
    color: normalTheme.primaryColor
  },
  textItem: {
    fontSize: 17,
  },
  editButton: {
    marginRight: '5%',
    color: normalTheme.primaryColor
  },
  editIcon: {
    fontSize: 20,
    color: normalTheme.primaryColor
  }
})