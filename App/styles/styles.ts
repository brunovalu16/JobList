import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191919',
      alignItems: 'center',
    },

    backgroundTop: {
      backgroundColor: '#0D0D0D',
      width: '100%',
      height: '30%',
      position: 'absolute',
      top: 0,
      zIndex: -1,
    },

    logo: {
      width: 90,
      height: 90,
      top: 100,
      alignSelf: 'center',
      resizeMode: 'contain',
    },

    form: {
      position: 'relative',
      zIndex: 1,
      flexDirection: 'row', // Coloca os elementos na mesma linha
      alignItems: 'center',
      top: '57%',
      width: '90%',
    },

    input: {
      backgroundColor: '#262626',
      paddingLeft: 10,
      paddingTop: 15,
      paddingBottom: 15,
      fontSize: 10,
      borderRadius: 5,
      color: '#808080',
      flex: 1, // Permite que o input ocupe o espaço disponível
      marginRight: 5,
    },
    button: {
      backgroundColor: '#4EA8DE',
      width: 56,
      height: 56,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    contagem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      top: '70%',
      zIndex: 1,
    },

    concluidasContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    concluidas: {
      color: '#8284FA',
      paddingRight: 10
    },

    caixaConcluidas: {
      backgroundColor: '#333333',
      width: 22,
      height: 22,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    numeroConcluidas: {
      color: "#fff"
    },


    criadasContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    criadas: {
      color: '#4EA8DE',
      paddingRight: 10
    },

    caixaCriadas: {
      backgroundColor: '#333333',
      width: 22,
      height: 22,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    numeroCriadas: {
      color: "#fff"
    },

    

   
  })