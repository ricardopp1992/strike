import { normalTheme } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: '90%',
    minHeight: 10,
    maxHeight: 450,
    alignItems: 'center',
  },
  itemBox: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
    maxWidth: '60%',
  },
  actionsBox: {
    flexDirection: 'row'
  },
  actionButton: {
    marginHorizontal: 10,
  },
  actionIcon: {
    fontSize: 20,
    color: normalTheme.primaryColor
  },
})