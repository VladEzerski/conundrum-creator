import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#61ace5',
    padding: 32,
    alignItems: 'center',
  },
  inputContainer: {
    marginVertical: 16,
    minHeight: 144,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
  },
  input: {},
  firstBtnContainer: {
    marginVertical: 20,
    height: 48,
  },
  text: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  scrollView: {
    width: '100%',
    padding: 4,
    marginTop: 8,
    marginBottom: 70,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
  },
  additionalText: {
    fontSize: 16,
    lineHeight: 16,
  },
  secBtnContainer: {
    position: 'absolute',
    bottom: 40,
  },
  img: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'yellow',
  },
})
