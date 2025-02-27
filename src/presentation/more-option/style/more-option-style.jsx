import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    body: {
        backgroundColor: '#ffffc0',
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        marginVertical: 20,
    },
    perfil: {
        backgroundColor: '#FFF',
        alignItems: 'left',
        borderRadius: 10,
        elevation: 15,
        paddingVertical: 40,
        paddingHorizontal: 20,
        gap: 10,
    },
    name: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
    },
    email: {
        color: '#434343',
        fontSize: 18,
        fontWeight: '400',
    },
    setting: {
        marginTop: 50,
    },
    settingTitle: {
        color: '#000',
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 30,
    },
    settingContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 20,
        elevation: 15,
        borderRadius: 15,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    idioma: {
        color: '#000',
        fontWeight: '400',
        fontSize: 20,
    },
    dropDown: {
        borderColor: 'transparent',
    },
    dropDownContainer: {
        width: '50%',
    },
    dropDownContainerStyle: {
        borderRadius: 20,
        borderColor: '#00000000',
        backgroundColor: '#fffff0',
        elevation: 5,
    },
    dropDownLabelStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    dropDownItemLabelStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
    dropDownIcon: {
        tintColor: '#00000090',
        width: 26,
    },
    logout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: '0A0',
        marginTop: 100,
    },
    logoutButton: {
        color:'#A00',
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});
