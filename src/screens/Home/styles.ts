import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 8,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  emptyListText: {
    color: '#FDFCFE',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
