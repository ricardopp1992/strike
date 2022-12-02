import { StyleSheet } from "react-native";

import { normalTheme } from "@/theme";

const fontSize = 25

export default StyleSheet.create({
  container: {
    marginBottom: '3%',
    paddingVertical: '3%',
    marginHorizontal: '2%',
    paddingHorizontal: '5%',
    borderColor: normalTheme.borderColor,
    borderWidth: normalTheme.borderWidth,
    borderRadius: normalTheme.borderRadius,
  },
  iconBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginVertical: '3%',
    width: '60%'
  },
  icon: {
    fontSize,
    paddingTop: 2,
    color: normalTheme.primaryColor,
  },
  name: {
    fontSize,
    marginLeft: '5%'
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    paddingVertical: '3%',
    width: '100%',
  },
  buttons: {
    width: 80,
    alignItems: 'center',
  },
  value: {
    fontSize,
    marginHorizontal: '10%',
  },
})