import { normalTheme } from '@/theme'
import { StyleSheet } from 'react-native'

const BORDER_RADIUS = 50

export default StyleSheet.create({
  container: {
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'flex-start',
    paddingTop: '8%',
    paddingHorizontal: '5%',
  },
  iconsContainer: {
    marginTop: '2%',
    paddingHorizontal: '3%',
    height: '45%',
    width: '100%',
    justifyContent: 'space-between',
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
  },
  iconSelected: {
    backgroundColor: normalTheme.selectedBackground,
    borderRadius: 10,
  },
  saveButton: {
    marginVertical: '5%',
    alignSelf: 'center',
  },
  errorMessage: {
    color: 'red'
  }
})