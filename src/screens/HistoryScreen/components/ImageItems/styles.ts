import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#a5a5a5',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    lineHeight: 25,
    color: '#ffffff',
  },
  titleModal: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 16,
  },
  imgContainer: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})
