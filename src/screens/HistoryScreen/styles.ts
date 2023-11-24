import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(52, 53, 65)',
    position: 'relative',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  clearBtn: {
    backgroundColor: '#ab2323',
    borderColor: '#ab2323',
  },
  clearBtnText: {
    color: '#ffffff',
  },
})
