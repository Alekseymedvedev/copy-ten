import {themeColors} from "../themeColors";

const settingsChip = (colorBtn: string, variantBtn?: string) => {
    const colorType = {
        props: {variant: variantBtn, color: colorBtn} as object,
        style: (({theme}: any) => ({
            backgroundColor:
                (variantBtn === 'outlined') ? 'transparent' :
                    (variantBtn === 'filled' && colorBtn === 'success') ? theme.palette.success.main :
                        (variantBtn === 'filled' && colorBtn === 'info') ? theme.palette.info.main :
                        (variantBtn === 'filled' && colorBtn === 'error') ? theme.palette.error.main :
                            (variantBtn === 'filled' && colorBtn === 'neutral') ? theme.palette.neutral.light :
                                null,
            color: (colorBtn === 'secondary') ? theme.palette.secondary.main :
                (variantBtn === 'filled' && colorBtn === 'neutral') ? theme.palette.neutral.contrastText :
                (variantBtn === 'outlined' && colorBtn === 'neutral') ? theme.palette.neutral.contrastText :
                    null,

        }))
    }
    return colorType

}
export const customChip = {
    variants: [
        settingsChip('success', 'filled'),
        settingsChip('info', 'filled'),
        settingsChip('error', 'filled'),
        settingsChip('secondary'),
        settingsChip('neutral', 'filled'),
        settingsChip('neutral', 'outlined'),

    ],
    styleOverrides: {
        root: {
            fontWeight: 600,
            fontSize: 12,
            lineHeight: `15px`,
            backgroundColor: themeColors.black80,
            borderRadius: 5,
            border: `0.5px solid #3C3C3C`,
            textTransform: 'capitalize',
        }
    },
} as object