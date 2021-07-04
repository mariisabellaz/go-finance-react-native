import {RFValue} from "react-native-responsive-fontsize";

export default {
    colors: {
        primary: '#5636D3',
        secondary: '#FF872C',
        secondary_light: '#FED8B1',
        shape: '#FFFFFF',
        text: {
            shape: '#FFFFFF',
            text_dark: '#363F5F',
            default: '#969CB2',
            dark: '#000000',
            income: '#12A454',
            outcome: '#E83F5B',
        },
        background: '#F0F2F5',
        icon: {
            default: '#FF872C',
            inverted: '#363F5F',
            vector: '#000000',
            shape: '#FFFFFF',
            income: {
                default: '#12A454',
                background: 'rgba(18, 164, 84, 0.5)',
            },
            outcome: {
                default: '#E83F5B',
                background: 'rgba(232, 63, 91, 0.5)',
            },
            light: '#969CB2'
        },
        button: {
            text: '#FFFFFF',
            background: '#FF872C',
        },
    },

    fontFamily: {
        italic: 'Poppins_300Light_Italic',
        regular: 'Poppins_400Regular',
        medium: 'Poppins_500Medium',
        bold: 'Poppins_700Bold',
    },

    fontsize: {
        title: RFValue(27),
        currency: RFValue(20),
        greetings: RFValue(18),
        chart: RFValue(18),
        percent: RFValue(16.65),
        medium: RFValue(16),
        description: RFValue(15),
        regular: RFValue(14),
        helper: RFValue(12),
    }
}
