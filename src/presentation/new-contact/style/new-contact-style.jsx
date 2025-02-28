import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        paddingBottom: 50,
        paddingHorizontal: 25,
        flex: 1,
    },
    selectView: {
        marginBottom: 40,
    },
    header: {
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: '800',
        fontSize: 26,
    },
    button: {
        backgroundColor: '#8200F5',
        borderRadius: 50,
        marginBottom: 100,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 20,
        color: '#FFF',
    },
    containerImg: {
        marginBottom: 40,
        paddingVertical: 15,
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
        backgroundColor: '#0000004D',
        width: 150,
        height: 150,
        borderRadius: 75,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    identyNoImage: {
        backgroundColor: 'rgba(130, 0, 245, 0.6)',
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
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 18,
        fontWeight: '700',
    },
});
