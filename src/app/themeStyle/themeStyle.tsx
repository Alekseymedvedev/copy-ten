import {createTheme} from "@mui/material/styles";

import {customMuiButton} from "./components/customMuiButton";
import {themeColors} from "./themeColors";
import {customInput} from "./components/customInput";
import {customChip} from "./components/customChip";
import {customSelect} from "./components/customSelect";


export const darkTheme = createTheme({
    spacing: 2,

    palette: {
        background: {
            default: ' #242424'
        },
        mode: "dark",
        primary: {
            main: themeColors.greenLight,
            dark: themeColors.greenDark,
            contrastText: themeColors.white100,
        },
        text: {
            primary: themeColors.white100,
            secondary: themeColors.white80,
        },
        secondary: {
            main: themeColors.pinkLight,
            dark: themeColors.pinkDark,
            contrastText: themeColors.pinkLight,
        },
        success: {
            main: themeColors.greenLight,
            dark: themeColors.greenDark,
            contrastText: themeColors.greenLight,
        },
        error: {
            main: themeColors.redLight,
            dark: themeColors.redDark,
            contrastText: themeColors.redLight
        },
        warning: {
            main: themeColors.yellowLight,
            dark: themeColors.yellowDark,
            contrastText: themeColors.yellowLight,
        },
        neutral: {
            light: themeColors.white70,
            main: themeColors.white80,
            dark: themeColors.black50,
            contrastText: themeColors.white90,
        },
        info: {
            main: themeColors.blueLight,
            dark: themeColors.blueDark,
            contrastText: themeColors.white100,
        },

    },

    breakpoints: {},

    typography: {
        fontFamily: [
            '-apple-system',
            'Montserrat, sans-serif',
        ].join(','),
        // Заголовки разделов сайта
        h1: {
            fontWeight: 600,
            fontSize: 21,
            lineHeight: 26 + 'px',
            textAlign: 'left'
        },

        // Оглавление блоков, большие кнопки
        h2: {
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 20 + 'px',
            textAlign: 'left'
        },
        // Сопровождение к элементам
        h3: {

            fontWeight: 600,
            fontSize: 12,
            lineHeight: 15 + 'px',
            textAlign: 'left'
        },
        // Оглавление блоков Subheader1 - Medium
        subtitle1: {
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 15 + 'px',
            textAlign: 'left'
        },
        // Оглавление блоков Subheader1 - Medium
        subtitle2: {
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 15 + 'px',
            textAlign: 'left'
        },
        button: {
            fontWeight: 600,
            fontSize: 12,
            lineHeight: 15 + 'px',
            textTransform: 'capitalize',
            letterSpacing: 'normal',
        },
        caption: {
            fontSize: 12,
            margin: 0
        },
    },
    components: {
        MuiButton: customMuiButton,
        MuiOutlinedInput: customInput,
        MuiChip: customChip,
        MuiMenuItem: customSelect,
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 12,
                }
            }

        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        // MuiSwitch: {
        //     styleOverrides: {
        //
        //         track: {
        //             backgroundColor: themeColors.white70
        //         },
        //     }
        // },
        MuiContainer: {
            styleOverrides: {
                root: {

                    "@media (min-width: 600px)":{
                        maxWidth:1280,
                        padding: `28px 14px`,
                    }
                },
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: `0.5px solid #3c3c3c`,
                    borderRadius: 10
                },
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    border: `0.5px solid #3c3c3c`,
                    borderRadius: 10,
                    "&:first-of-type":{
                        borderRadius: 10,

                    }
                },
            }
        },
    },
});
