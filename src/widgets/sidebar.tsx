import React from 'react';
import cls from './styles/sidebar.module.scss'
import MenuList from "../entities/components/menuList";
import HeaderSidebar from "../entities/components/headerSidebar";
import {Stack} from "@mui/material";
import MenuItem from "../shared/components/menuItem";
import IconProducts from "../shared/assets/images/icons/iconProducts";


const Sidebar = () => {
    return (
        <section className={cls.section}>
            <Stack spacing={21}>
                <Stack spacing={7}>
                    <HeaderSidebar name="Remy Sharp" images="" account="2" balance="10 000 000"/>
                   <ul>
                       <MenuItem path='/' name="Продукты" navigateClass="navigationYellow">
                           <IconProducts active={true}/>
                       </MenuItem>
                   </ul>
                </Stack>

                <MenuList/>
            </Stack>
        </section>
    );
};

export default Sidebar;