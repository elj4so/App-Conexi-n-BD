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
  title1: {
    fontSize: 55,
    color: '#363636',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 130,
  },
  title2: {
    fontSize: 55,
    color: '#363636',
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 140,
    marginBottom: 10,
  },
  halfScreenCard: {
    flex: 1,
    marginTop: 10,
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
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: '#3EC1D5',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 10,
  },
  inputWithIcon: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
  },
  inputTitle: {
    color: '#363636',
    paddingLeft: 40,
    fontWeight: '500',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#363636',
    marginVertical: 20,
  },
});
