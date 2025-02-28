import { StyleSheet, Dimensions, StatusBar } from 'react-native';

export const style = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    container: {
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: 0.85 * Dimensions.get('window').width,
        height: 0.7 * Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 25,
        paddingHorizontal: 25,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    btnIcon: {},
    icon: {},
    title: {
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFF66',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 25,
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: '#FFF',

    },
    btn: {
        backgroundColor: '#8200F5',
        borderRadius: 50,
        width: '100%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    btnTitle: {
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
});
