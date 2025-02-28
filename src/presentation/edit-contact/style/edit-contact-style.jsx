import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#000',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    title: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: '800',
        fontSize: 22,
        textTransform: 'capitalize',
    },
    containerImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    imgSty: {
        borderRadius: 150,
    },
    imgFiltro: {
        backgroundColor: 'rgba(130, 0, 245, 0.4)',
        width: 150,
        height: 150,
        borderRadius: 75,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContactNoImage: {
        backgroundColor: 'rgba(130, 0, 245, 0.8)',
        width: 150,
        height: 150,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelInput: {
        color: '#fff',
        fontFamily:'Montserrat-ExtraBold',
        marginBottom: 15,
        fontSize: 18,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        padding: 15,
        marginBottom: 25,
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
    },
    bottomSheet: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    bottomSheetBtn: {
        alignItems: 'center',
        gap: 15,
    },
    bottomSheetText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },
});
