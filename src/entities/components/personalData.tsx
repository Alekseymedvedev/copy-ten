import {Button, Divider, Stack} from "@mui/material";
import CustomInput from "../../shared/UI/customInput";
import SettingsItem from "../settingsItem";
import React from "react";


const PersonalData = () => {
    return (
       <SettingsItem>
           <Stack direction="row" alignItems="center" justifyContent="space-between">
               <span className="subHeadersBold">Привязка Telegram</span>
               <Stack direction="row" alignItems="center" spacing={11}>
                   <span className="subHeaders white-80">@ryabishin</span>
                   <Button variant="contained" color="success">Привязано</Button>
               </Stack>
           </Stack>
       </SettingsItem>
    );
};

export default PersonalData;