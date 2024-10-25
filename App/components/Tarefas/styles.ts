import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      position: 'relative',
      zIndex: 1,
      flexDirection: 'row', // Coloca os elementos na mesma linha
      alignItems: 'center',
      top: '57%',
      width: '90%', // Largura do container é fixa em 90% da tela
      height: '30%',
      marginLeft: 1,
      justifyContent: 'space-between', // Espaça os elementos no container
      marginBottom: -190,
      // flexWrap removido: para que o container se ajuste ao conteúdo
      },
  
      inputComponente: {
        backgroundColor: '#262626',
        paddingLeft: 55,
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 13,
        borderRadius: 5,
        color: '#808080',
        flex: 1, // Permite que o input ocupe o espaço disponível
        position: 'absolute',
        width: '100%',
      },

      checkboxContainer: {
        alignItems: 'flex-start', // Alinhado à esquerda
        position: 'relative',
        paddingLeft: 15
      },

      button: {
        marginRight: 15
      }
})
