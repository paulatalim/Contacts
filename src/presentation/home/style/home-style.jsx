import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    screen: {
        backgroundColor: '#000',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    header: {
        backgroundColor: '#8200F5',
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#FFF',
    },
    contactContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        gap: 20,
    },
    contactText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    contactNoImage: {
        backgroundColor: '#8200F5',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactName: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
    },
    floatActionButton: {
        position: 'absolute',
        backgroundColor: '#8200F5',
        width: 70,
        height: 70,
        borderRadius: 20,
        bottom: 50,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
