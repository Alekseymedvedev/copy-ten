import React, {useEffect, useState} from 'react';
import Navigation from "../entities/components/navigation";
import HeaderSidebar from "../entities/components/headerSidebar";
import {IconButton, Stack, useMediaQuery} from "@mui/material";
import IconMenu from "../shared/assets/images/icons/iconMenu";
// @ts-ignore
import logo from '../shared/assets/images/logo.svg'


const style = {
    maxWidth: 320,
    padding: `0 10px`,
    borderRight: `4px solid #1F1F1F;`,
}
const styleMediaQuery = {
    maxWidth: 'unset',
    padding: `0 10px`,
    width: `100%`,
    zIndex: 10,
    top: `65px`,
    left: 0,
    background: `#212121`,
    position: 'fixed'
}


const Sidebar = () => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [visibleMenu, setVisibleMenu] = useState(true)
    useEffect(() => {
        if (!mediaQuery) {
            setVisibleMenu(false)
        } else {
            setVisibleMenu(true)
        }
    }, [mediaQuery])

    const handleMenu = () => {
        setVisibleMenu(!visibleMenu)
    }

    return (
        <>
            {
                !mediaQuery ?
                    <Stack direction="row" alignItems="center" justifyContent="space-between"
                           sx={{ml: -5, mr: -5,height:`65px`, padding: `14px 28px`, background: `#212121`}}>
                        <IconButton onClick={handleMenu}>
                            <IconMenu active={visibleMenu}/>
                        </IconButton>
                        <img src={logo} alt="logo"/>
                    </Stack>
                    : null
            }
            {
                visibleMenu ?
                    <Stack sx={!mediaQuery ? styleMediaQuery : style}>
                        <Stack spacing={7}>
                            <Stack spacing={7}>
                                <HeaderSidebar name="Remy Sharp" images="" account="2" balance="10 000 000"/>
                            </Stack>
                            <Navigation/>
                        </Stack>
                    </Stack>
                    : null
            }
        </>
    );
};

export default Sidebar;