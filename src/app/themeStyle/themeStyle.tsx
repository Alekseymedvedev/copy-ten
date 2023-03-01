import {createTheme} from "@mui/material/styles";

import {customMuiButton} from "./components/customMuiButton";
import {themeColors} from "./themeColors";
import {customInput} from "./components/customInput";
import {customChip} from "./components/customChip";
import {customSelect} from "./components/customSelect";
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
            // paper: `background:linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`
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
    },
});
