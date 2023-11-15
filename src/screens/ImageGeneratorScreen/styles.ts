import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: 'rgb(52, 53, 65)',
    paddingTop: 32,
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
    marginBottom: 8,
    padding: 16,
  },
  circle: {
    width: 32,
    height: 32,
    backgroundColor: 'rgb(156, 157, 168)',
    borderRadius: 100,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    paddingTop: 3,
  },
  text: {
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#ffffff',
  },
  imgContainer: { maxHeight: '75%' },
  img: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'rgb(68, 70, 84)',
  },
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

export default styles
