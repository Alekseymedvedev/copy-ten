import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import styles from '@mui/material/styles';
import {customChip} from "./components/customChip";


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
declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        neutral: true;
    }
}

declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        neutral: true;
    }
}

// declare module '@mui/material/Stack' {
//     interface StackPropsVariantsOverrides {
//         variant?: true;
//     }
// }

