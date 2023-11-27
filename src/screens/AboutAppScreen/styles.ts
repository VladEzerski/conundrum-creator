import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(52, 53, 65)',
    padding: 32,
    alignItems: 'center',
  },
  img: {
    width: 128,
    height: 128,
    borderRadius: 16,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    color: '#ffffff',
  },
  socialContainer: {
    position: 'absolute',
    bottom: 16,
  },
})
