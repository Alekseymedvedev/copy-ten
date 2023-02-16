import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from '@mui/material/styles';


declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'] ;
    }
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}

declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        neutral: true;
    }
}

declare module '@mui/material/Stack' {
    interface StackPropsColorOverrides {
        variant?: true;
        size?: string;
    }
}

