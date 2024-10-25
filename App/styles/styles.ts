import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13111c',
        padding: 24
    },

    eventName: {
        color: '#31CF67',
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
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
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
        paddingTop: 20,
        marginBottom: 42
    },

    listEmptyText: {
        color: '#7f7f7f',
        fontSize: 14,
        textAlign: 'center'
    }

});