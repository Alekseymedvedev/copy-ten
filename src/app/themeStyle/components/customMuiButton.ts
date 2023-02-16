


const settingsBtn = (variantBtn: string, colorBtn: string) => {
    const colorType = {
        props: {variant: variantBtn, color: colorBtn} as object,
        style: (({theme}: any) => ({
            backgroundColor:
                (variantBtn === 'outlined') ? 'transparent' :
                    (variantBtn === 'contained' && colorBtn === 'success') ? theme.palette.success.dark :
                        (variantBtn === 'contained' && colorBtn === 'error') ? theme.palette.error.dark :
                            (variantBtn === 'contained' && colorBtn === 'warning') ? theme.palette.warning.dark :
                                null,
            color: (colorBtn === 'neutral') ? theme.palette.neutral.main : null,
            "&:hover": {
                color: (colorBtn === 'neutral') ? theme.palette.neutral.light : null,
                borderColor: (colorBtn === 'neutral') ? theme.palette.neutral.main : null,
            },
            "&:active": {
                backgroundColor:
                    (colorBtn === 'success') ? theme.palette.success.dark :
                        (colorBtn === 'error') ? theme.palette.error.dark :
                            (colorBtn === 'warning') ? theme.palette.warning.dark :
                                (colorBtn === 'neutral') ? theme.palette.neutral.dark :
                                    null,
                color:
                    (colorBtn === 'neutral') ? theme.palette.neutral.contrastText :
                        null
            }
        }))
    }
    return colorType

}
export const customMuiButton = {
    variants: [
        settingsBtn("contained", 'success'),
        settingsBtn("outlined", 'success'),
        settingsBtn("contained", 'error'),
        settingsBtn("outlined", 'error'),
        settingsBtn("contained", 'warning'),
        settingsBtn("outlined", 'warning'),
        settingsBtn("outlined", 'neutral'),

    ],
    defaultProps: {
        disableRipple: true,
    },

    styleOverrides: {
        root: ({ownerState}: any) =>
            ({
                padding: 8 + 'px' + ' ' + 14 + 'px',
                borderRadius: 5,
                borderStyle: 'solid',
                borderWidth: 0.5,
                borderColor: '#3C3C3C',

                "&:hover": {
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderWidth: 0.5,
                    borderColor: 'inherit',
                }
            })

    },
}