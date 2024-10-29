import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
        marginTop: '25%'
    },

    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },

    input: {
        backgroundColor: '#24212b',
        color: '#7f7f7f',
        paddingLeft: 10,
        height: '102%',
        fontSize: 13,
        flex: 1,
        marginRight: 8,
        borderRadius: 3
    },

    button: {
        width: 35,
        height: 35,
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
        top: '25%',
        marginBottom: 15
    },

    listEmptyText: {
        color: '#7f7f7f',
        fontSize: 14,
        textAlign: 'center'
    },

    flatList: {
        top: '17%',
        flex: 1,
    },

    logo: {
        width: 100,
        height: 100,
        top: 60,
        alignSelf: 'center',
        resizeMode: 'contain',
      },

      contagem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        top: '30%',
        zIndex: 1,
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

      

      titulo: {
        flexDirection: 'row',
        alignItems: 'center',  // Centraliza verticalmente os itens
        justifyContent: 'space-between',  // Espaça os itens igualmente na linha
        top: '15%',
        marginRight: 20,
        borderColor: '#4EA8DE',
        borderWidth: 0.5,
        padding: 10,
        width: '100%',
        borderRadius: 5
      },
      buttonToucha: {
        backgroundColor: '#4EA8DE',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5, // Espaçamento entre os botões
      },
      buttonTextToucha: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
      },
      init: {
        fontSize: 14,
        marginHorizontal: 5, // Espaçamento entre o texto da data e os botões
        color: '#fff'
      },
      label: {
        fontSize: 16,
      },
   

});