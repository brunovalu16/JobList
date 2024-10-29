import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13111c',
        padding: 24
    },

    eventName: {
        color: '#4EA8DE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16
    },

    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },

    input: {
        backgroundColor: '#24212b',
        color: '#7f7f7f',
        paddingLeft: 10,
        height: '100%',
        fontSize: 13,
        flex: 1,
        marginRight: 8,
        borderRadius: 3
    },

    button: {
        width: 56,
        height: 56,
        backgroundColor: '#4EA8DE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    buttonText: {
        color: '#fff',
        fontSize: 24,
        
    },

    iconadd: {
        color: '#fff',
        
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        top: '50%',
        marginBottom: 15.
    },

    listEmptyText: {
        color: '#7f7f7f',
        fontSize: 14,
        textAlign: 'center'
    },

    flatList: {
        top: '30%',
        flex: 1,
    },

    logo: {
        width: 100,
        height: 100,
        top: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
      },

      contagem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        top: '60%',
        zIndex: 1,
        marginBottom: 10
      },

      criadasContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        color: "#fff",
      },

      titulo:{
        top: '18%'
      }

    
   

});