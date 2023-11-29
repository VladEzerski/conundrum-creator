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
    marginBottom: 100,
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
})

export default styles
