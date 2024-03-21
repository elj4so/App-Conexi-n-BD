import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 50, 
    marginBottom: 40,
    width: 35,
    height: 35,
  },

  halfScreenCard: {
    flex: 1,
    marginTop: 485, 
    margin: -6,
    backgroundColor: '#D8F2F6',
    borderRadius: 70,
    padding: 25,
  },

  text1: {
    fontSize: 12,
    color: '#363636',
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 3,
  },
  navbarButton: {
    color: '#3E70A1', // Negro como ejemplo
  },
});
