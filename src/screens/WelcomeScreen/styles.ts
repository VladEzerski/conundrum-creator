import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#61ace5',
    padding: 32,
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginBottom: 32,
  },
  text: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
  },
})
