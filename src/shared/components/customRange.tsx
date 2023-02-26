import React, {FC, useState} from 'react';
import {Chip, Slider, Stack, Switch} from "@mui/material";

interface IType {
    title?: string;
    required?: boolean;
    minValue?: number;
    maxValue?: number;
    defaultValue?: number;
    step?: number;
    swift?: boolean;
}

const CustomRange: FC<IType> = ({
                                    title,
                                    required,
                                    minValue,
                                    maxValue,
                                    swift,
                                    step,
                                    defaultValue
                                }) => {
    const [marks, setMarks] = useState([
        {value: minValue!==undefined ? minValue : 0, label: minValue ? minValue : 0},
        {value:maxValue!==undefined ? maxValue : 1, label: maxValue ? maxValue : 1 },
    ]);
    const [value, setValue] = useState(0);
    const [invisible, setInvisible] = useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (

        <Stack sx={{p: `12px 8px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <span className="subHeaders">{title} {required && <span className="red">*</span>}</span>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Chip label={value} variant="filled" color="neutral"/>
                    {
                        swift &&
                        <Switch
                            defaultChecked
                            size="small"
                            checked={!invisible}
                            onChange={handleBadgeVisibility}
                        />
                    }
                </Stack>
            </Stack>
            <Stack sx={{m: 7, mb:0}}>
                <Slider
                    size="small"
                    defaultValue={defaultValue ? defaultValue : 0}
                    min={minValue ?minValue :0}
                    max={maxValue ? maxValue :1}
                    step={step ?step : 0.01}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    marks={marks}
                    disabled={invisible}
                />
            </Stack>
        </Stack>
    );
};

export default CustomRange;