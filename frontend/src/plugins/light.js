/* light 테마 파일 */
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

const MMMtheme = Object.freeze({
    accent: "",
    error: "",
    info: "",
    primary: {
        base: "",
        darken1: ""
    },
    secondary: {
        base: "",
        darken1: ""
    },
    success: "",
    warning: ""
})

export default {
    primary: {
        base: pantonYellow.base,
        darken1: colors.purple.darken2,
    },
    secondary: colors.indigo,
    // All keys will generate theme styles,
    // Here we add a custom `tertiary` color
    // 아래 코드처럼 primary,secondary 외에도 tertiary 색을 추가할 수 있다.
    // tertiary: colors.pink.base,
}

// 원본 코드 ( 혹시몰라 남겨둠 )
// export default {
//     primary: {
//         base: colors.purple.base,
//         darken1: colors.purple.darken2,
//     },
//     secondary: colors.indigo,
//     // All keys will generate theme styles,
//     // Here we add a custom `tertiary` color
//     // 아래 코드처럼 primary,secondary 외에도 tertiary 색을 추가할 수 있다.
//     // tertiary: colors.pink.base,
// }