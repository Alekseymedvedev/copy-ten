import React, {FC, useEffect, useState} from 'react';
import {Chip, Paper, Slider, Stack, Switch} from "@mui/material";

interface IType {
    title?: string;
    required?: boolean;
    minValue?: number;
    maxValue?: number;
    defaultValue?: number;
    step?: number;
    isSwitch?: boolean;
    isSwitchChecked?: boolean;
    isSliderRange?: boolean;
    onChange?: (value: any) => void;
    onChangeSwift?: (value: any) => void;
}

const CustomRange: FC<IType> = ({
                                    title,
                                    required,
                                    minValue,
                                    maxValue,
                                    isSwitch,
                                    isSwitchChecked,
                                    step,
                                    defaultValue,
                                    isSliderRange,
                                    onChange,
                                    onChangeSwift
                                }) => {
    const [marks, setMarks] = useState([
        {value: minValue !== undefined ? minValue : 0, label: minValue ? minValue : 0},
        {value: maxValue !== undefined ? maxValue : 100, label: maxValue ? maxValue : 100},
    ]);
    const [value, setValue] = useState(defaultValue ? defaultValue : 0);
    const [invisible, setInvisible] = useState(false);
    const [switchChecked, setSwitchChecked] = useState(isSwitchChecked);

    useEffect(() => {
        if (isSwitchChecked) setSwitchChecked(isSwitchChecked)

    }, [isSwitchChecked])
    const handleBadgeVisibility = () => {
        setSwitchChecked(!switchChecked)
        setInvisible(!invisible);
        if (onChangeSwift) onChangeSwift(invisible)
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
            if (onChange) {
                onChange(newValue)
            }
        }
    }

    return (

        <Paper
            sx={{
                "@media (min-width:980px)": {
                    padding: `12px 8px`,
                }, borderRadius: `5px`
            }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <span className="subHeaders">{title} {required && <span className="red">*</span>}</span>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    {isSliderRange && <Chip label={value} variant="filled" color="neutral" sx={{height: 23,p:`8px 2px`}}/>}

                    {
                        isSwitchChecked !== undefined ?
                            <Switch
                                checked={switchChecked}
                                size="small"
                                onChange={(e) => {
                                    setSwitchChecked(e.target.checked)
                                    handleBadgeVisibility()
                                }}
                            />
                            : isSwitch ?
                                <Switch
                                    defaultChecked
                                    size="small"
                                    onChange={handleBadgeVisibility}
                                />
                                : null
                    }
                    {/*{*/}
                    {/*    isSwitch &&*/}
                    {/*    <Switch*/}
                    {/*        checked={isSwitchChecked}*/}
                    {/*        defaultChecked*/}
                    {/*        size="small"*/}
                    {/*        onChange={(e)=>{*/}
                    {/*            setSwitchChecked(e.target.checked)*/}
                    {/*            handleBadgeVisibility(e)*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*}*/}
                </Stack>
            </Stack>
            {
                isSliderRange &&
                <Stack sx={{m: 7, mb: 0}}>
                    <Slider
                        size="small"
                        defaultValue={defaultValue ? defaultValue : 0}
                        min={minValue ? minValue : 0}
                        max={maxValue ? maxValue : 100}
                        step={step ? step :1}
                        onChange={handleChange}
                        valueLabelDisplay="off"
                        marks={marks}
                        disabled={invisible}
                    />
                </Stack>
            }
        </Paper>
    );
};

export default CustomRange;