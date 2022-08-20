import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    paddingVertical: 120
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 80,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  pokemonName: {
    color: 'darkcyan',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 30,
    textTransform: 'capitalize',
  },
  buttonText: {
    backgroundColor: 'darkgray',
    borderRadius: 8,
    color: 'white',
    fontSize: 20,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 10,
  }

});

