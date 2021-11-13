import colors from 'vuetify/lib/util/colors'
const pantonYellow = Object.freeze({
    base: '#FEDD00',
    lighten5: '',
    lighten4: '',
    lighten3: '',
    lighten2: '',
    lighten1: '',
    darken1: '',
    darken2: '',
    darken3: '',
    darken4: ''
});

export default {
    primary: {
        base: colors.purple.base,
        darken1: colors.purple.darken2,
    },
    secondary: colors.indigo,
    // All keys will generate theme styles,
    // Here we add a custom `tertiary` color
    tertiary: colors.pink.base,
}