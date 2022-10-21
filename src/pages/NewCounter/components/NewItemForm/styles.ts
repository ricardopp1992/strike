import { normalTheme } from '@/theme'
import { StyleSheet } from 'react-native'

const BORDER_RADIUS = 50

export default StyleSheet.create({
  container: {
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    borderWidth: 2,
    borderColor: normalTheme.primaryColor,
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'flex-start',
    paddingTop: '8%',
    paddingHorizontal: '5%',
  },
  nameLabel: {
    marginBottom: '2%',
  },
  inputName: {
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: '5%',
    marginVertical: '1%',
    color: normalTheme.primaryColor,
    backgroundColor: normalTheme.grayColor,
  },
  iconsContainer: {
    marginTop: '2%',
    paddingHorizontal: '2%',
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
  itemLabel: {
    marginTop: '2%'
  },
  icon: {
    padding: 4,
    fontSize: 40,
    color: normalTheme.primaryColor,
  },
  iconSelected: {
    backgroundColor: normalTheme.selectedBackground,
    borderRadius: normalTheme.borderRadius,
  },
  saveButton: {
    marginVertical: '5%',
    alignSelf: 'center',
  },
})