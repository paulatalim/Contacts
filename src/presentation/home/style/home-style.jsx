import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    header: {
        backgroundColor: '#ffc700',
        paddingVertical: 20,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#000',
    },
    moreOption: {},
    moreOptionIcon:{},
    identyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        gap: 20,
    },
    identyText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    identyImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    identyNoImage: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    identyName: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
    },
    identyCaract: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Roboto-Bold',
        fontWeight: '700',
    },
    floatActionButton: {
        position: 'absolute',
        backgroundColor: '#ffc700',
        width: 70,
        height: 70,
        borderRadius: 20,
        bottom: 50,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
