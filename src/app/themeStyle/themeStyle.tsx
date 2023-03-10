import {createTheme} from "@mui/material/styles";
import {customMuiButton} from "./components/customMuiButton";
import {themeColors} from "./themeColors";
import {customInput} from "./components/customInput";
import {customMuiChip} from "./components/customMuiChip";
import {customMuiSelect} from "./components/customMuiSelect";
import {customMuiFormLabel} from "./components/customMuiFormLabell";
import {customMuiCheckbox} from "./components/customMuiCheckbox";
import {customMuiContainer} from "./components/customMuiContainer";
import {customMuiCard} from "./components/customMuiCard";
import {customMuiAccordion} from "./components/customMuiAccordion";
import {customMuiSlider} from "./components/customMuiSlider";
import {customMuiBackdrop} from "./components/customMuiBackdrop";
import {customMuiModal} from "./components/customMuiModal";
import {customMuiTabs} from "./components/customMuiTabs";
import {customMuiTab} from "./components/customMuiTab";
import {customMuiPaper} from "./components/customMuiPaper";
import {customMuiDivider} from "./components/customMuiDivider";


export const darkTheme = createTheme({
    spacing: 2,

    palette: {

        background: {
            default: ' #1C1B1A',
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
        info: {
            main: themeColors.blueLight,
            dark: themeColors.blueDark,
            contrastText: themeColors.white100,
        },
        neutral: {
            light: themeColors.white70,
            main: themeColors.white80,
            dark: themeColors.black50,
            contrastText: themeColors.white90,
        },


    },

    breakpoints: {},

    typography: {
        fontFamily: [
            '-apple-system',
            'Montserrat, sans-serif',
        ].join(','),
        // ?????????????????? ???????????????? ??????????
        h1: {
            fontWeight: 600,
            fontSize: 21,
            lineHeight: 26 + 'px',
            textAlign: 'left'
        },

        // ???????????????????? ????????????, ?????????????? ????????????
        h2: {
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 20 + 'px',
            textAlign: 'left'
        },
        // ?????????????????????????? ?? ??????????????????
        h3: {

            fontWeight: 600,
            fontSize: 12,
            lineHeight: 15 + 'px',
            textAlign: 'left'
        },
        // ???????????????????? ???????????? Subheader1 - Medium
        subtitle1: {
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 15 + 'px',
            textAlign: 'left'
        },
        // ???????????????????? ???????????? Subheader1 - Medium
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
        MuiChip: customMuiChip,
        MuiSelect: customMuiSelect,
        MuiMenuItem: customMuiSelect,
        MuiFormLabel: customMuiFormLabel,
        MuiCheckbox: customMuiCheckbox,
        MuiContainer: customMuiContainer,
        MuiCard: customMuiCard,
        MuiAccordion: customMuiAccordion,
        MuiSlider: customMuiSlider,
        MuiBackdrop: customMuiBackdrop,
        MuiModal: customMuiModal,
        MuiTabs: customMuiTabs,
        MuiTab: customMuiTab,
        MuiPaper: customMuiPaper,
        MuiDivider: customMuiDivider,
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    border: ` 0.5px solid #828282`,
                    borderRadius: 10,
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: (({theme}: any) => ({
                    color: '#828282',
                    fontWeight: 500,
                    fontSize: 8,
                    padding: `10px 0`,
                    borderRight: ` 0.5px solid #828282`,
                    textAlign: 'center',
                    lineHeight: `10px`,
                    ' &:last-child': {
                        borderRight: `none`,
                    },

                     "&.red": {
                        backgroundColor: theme.palette.error.dark,
                        color: theme.palette.error.light,
                    },
                    "&.green": {
                        backgroundColor: theme.palette.success.dark,
                        color: theme.palette.success.light,
                    }
                }))

            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    'table &:last-child td, &:last-child th': {
                        borderBottom: `none`,
                    },
                    'table &:first-of-type td, &:first-of-type th': {
                        borderBottom: ` 0.5px solid #828282`,
                    },

                }
            }
        },

    },
});
