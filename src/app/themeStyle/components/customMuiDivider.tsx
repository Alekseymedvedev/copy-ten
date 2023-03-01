


export const customMuiDivider={
    variants:[
        {
            props: {variant: 'fullWidth'} as object,
            style: {
                position: 'relative',
                right: -1,
                width: `102%`,
            },
        },
        {
            props: {orientation:'vertical'} as object,
            style: {
                position: 'relative',
                right: 0,
                width: 1,
            },
        },
    ],
}as object