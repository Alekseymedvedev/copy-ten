import React from 'react';
import cls from './sidebar.module.scss'
import MenuList from "../../entities/menuList/menuList";
import HeaderSidebar from "../../entities/headerSidebar/headerSidebar";
import {Stack} from "@mui/material";
import IconAccount from "../../shared/assets/images/icons/iconAccount";
import MenuItem from "../../shared/assets/components/menuItem/menuItem";


const Sidebar = () => {
    return (
        <section className={cls.section}>
            <Stack spacing={21}>
                <Stack spacing={7}>
                    <HeaderSidebar name="Remy Sharp" images="" account="2" many="10 000 000"/>
                   <ul>
                       <MenuItem path='/' name="Продукты" navigateClass="navigationYellow">
                           <IconAccount/>
                       </MenuItem>
                   </ul>
                </Stack>

                <MenuList/>
            </Stack>
        </section>
    );
};

export default Sidebar;