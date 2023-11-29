import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
  },
  inputWrapper: {
    height: 44,
    maxHeight: 200,
    backgroundColor: 'rgb(64, 65, 79)',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(32, 33, 35, 0.5)',
    marginVertical: 16,
    padding: 8,
  },
  input: {
    height: 44,
    color: '#ffffff',
    paddingVertical: 10,
    paddingLeft: 12,
    paddingRight: 40,
  },
  btnContainer: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    backgroundColor: 'rgb(25, 195, 125)',
    borderRadius: 6,
    padding: 4,
  },
})
