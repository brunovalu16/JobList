import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Mantém os elementos nos extremos
        padding: 10,
        backgroundColor: '#24212b',
        borderRadius: 5,
        marginBottom: 10
    },

    name: {
        flex: 1,
        color: '#7f7f7f',
        paddingLeft: 15,
    },

    button2: {
        width: 56,
        height: 56,
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },

    button: {
        marginRight: 15
      },

    checkboxContainer: {
        alignItems: 'flex-start', // Alinhado à esquerda
        position: 'relative',
        paddingLeft: 15
      },

      
}) 