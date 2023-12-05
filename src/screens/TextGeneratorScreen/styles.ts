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
  text: {
    flexShrink: 1,
    fontSize: 15,
    lineHeight: 16,
    color: '#ffffff',
  },
})

export default styles
