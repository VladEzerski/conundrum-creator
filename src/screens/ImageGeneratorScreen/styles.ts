import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: 'rgb(52, 53, 65)',
    paddingTop: 16,
  },
  resultView: {
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
  },
  textContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(68, 70, 84)',
    padding: 16,
  },
  text: {
    flexShrink: 1,
    fontSize: 15,
    lineHeight: 16,
    color: '#ffffff',
  },
  imgContainer: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
    marginTop: 8,
  },
  img: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'rgb(68, 70, 84)',
    zIndex: 2,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loader: {
    marginTop: 16,
  },
})

export default styles
