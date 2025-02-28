import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    screen: {
        backgroundColor: '#000',
    },
    principal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        marginTop: 50,
        marginBottom: 30,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    headerContent: {
        alignItems: 'center',
    },
    manageContact: {
        flexDirection: 'row',
        gap: 25,
    },
    name: {
        fontFamily:'Montserrat-ExtraBold',
        fontSize: 25,
        color: '#FFF',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 250,
        marginTop: 30,
        marginBottom: 30,
    },
    imgUser: {
        backgroundColor: 'rgba(130, 0, 245, 0.8)',
        borderRadius: 250,
        width: 120,
        height: 120,
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dataContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
    },
    dataText: {
        color: '#FFF',
        fontSize: 17,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '200',
    },
    // bottomSheet: {
    //     paddingHorizontal: 40,
    //     alignItems: 'flex-start',
    //     paddingVertical: 20,
    //     gap: 40,
    // },
    // bottomSheetBtn: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 30,
    // },
    // bottomSheetText: {
    //     color: 'rgba(255, 255, 255, 0.8)',
    //     fontSize: 18,
    //     fontWeight: '700',
    // },
});
