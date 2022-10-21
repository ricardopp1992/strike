import { normalTheme } from "@/theme";
import { StyleSheet } from "react-native";

const HomeViewStyles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    paddingHorizontal: '3%',
  },
  welcomeText: {
    textAlign: 'center',
    marginTop: '50%',
    marginBottom: '5%',
    color: normalTheme.primaryColor,
  },
  prevCountText: {
    marginTop: '5%'
  }
  
})

export default HomeViewStyles