import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '100%',
    alignItems: 'center',
    paddingTop: '5%'
  },
  iconsContainer: {
    marginTop: '2%',
    paddingHorizontal: '3%',
    height: '60%',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  columnWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingVertical: 5,
    width: '100%',
  },
  icon: {
    padding: 4,
    fontSize: 40,
    backgroundColor: 'yellow'
  },
  saveButton: {
    marginTop: '5%'
  }
})