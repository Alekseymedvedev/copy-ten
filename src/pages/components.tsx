import React, {FC, useState} from 'react';
import {
    Box, Button,
    Checkbox,
    Chip,
    Container,
    FormControl, IconButton, InputAdornment, InputBase,
    InputLabel, ListItemText,
    MenuItem,
    OutlinedInput, Paper,
    Select,
    SelectChangeEvent,
    Stack, Switch, TextareaAutosize, TextField, Typography
} from "@mui/material";
import MainLayout from "../widgets/layout/mainLayout";
import CustomInput from "../shared/UI/customInput/customInput";
import IconSearch from "../shared/assets/images/icons/iconSearch";
import HeaderSidebar from "../entities/headerSidebar/headerSidebar";
import {
    BarChart,
    Area,
    Tooltip,
    AreaChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ReferenceLine,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';
import {chartData} from "../data/chart";
import {FormContainer, TextFieldElement} from "react-hook-form-mui";
import IconPassword from "../shared/assets/images/icons/iconPassword";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Вариант 1',
    'Вариант 2',
    'Вариант 3',
    'Вариант 4',
    'Вариант 5',
    'Вариант 6',
    'Вариант 7',
    'Вариант 8',
    'Вариант 9',
    'Вариант 10',
    'Вариант 11',
    'Вариант 12',
    'Вариант 13',
    'Вариант 14',

];

const Components = () => {

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: {value},
        } = event;
        // setPersonName(
        //     // On autofill we get a stringified value.
        //     typeof value === 'string' ? value.split(',') : value,
        // );
    };
    const [showPassword, setShowPassword] = useState(false);
    const divStyle = {
        color: 'blue',
        background: 'red',
    };
    return (
        <MainLayout>
            <Container maxWidth="lg">
                {/*<ResponsiveContainer width="100%" height="100%">*/}
                <AreaChart
                    width={730}
                    height={250}
                    data={chartData}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}

                >
                    {/*<XAxis dataKey="day" />*/}
                    {/*<YAxis />*/}
                    {/*<Area type="linear" dataKey="temperature" stroke="#8884d8" fill="#8884d8" />*/}
                    {/*<Area  dataKey="temperature" stroke="#8884d8" fill="#8884d8" />*/}
                    <Area dataKey="uv" stroke="#6FCF97" fill="#29312C"/>
                    <Area dataKey="pv" stroke="#56CCF2" fill="transparent"/>

                    <Tooltip wrapperStyle={divStyle}/>
                </AreaChart>

                {/*</ResponsiveContainer>*/}
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    stackOffset="sign"
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/*<CartesianGrid strokeDasharray="3 3" />*/}
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    {/*<Legend />*/}
                    <ReferenceLine y={4000} stroke="#fff"/>
                    <Bar dataKey="pv" fill="#8884d8" stackId="stack"/>
                    <Bar dataKey="uv" fill="#82ca9d" stackId="stack"/>
                </BarChart>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder="Default"
                />

                <HeaderSidebar name="Remy Sharp" images="" account="2" many="10 000 000"/>
                <Stack direction="row" spacing={1}>
                    <Chip label="primary" color="primary"/>
                    <Chip label="success" color="success"/>
                    <Chip label="error" variant="outlined" color="error"/>
                </Stack>
                <Stack spacing={2}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </Stack>
                <FormControl sx={{m: 1, width: `max-content`}}>
                    {/*<InputLabel id="demo-multiple-checkbox-label">Выбор</InputLabel>*/}
                    <Select
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput/>}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <span>Placeholder</span>;
                            }

                            return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{'aria-label': 'Without label'}}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <ListItemText primary={name}/>
                                <Checkbox size="small"/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Stack
                    spacing={7}
                    sx={{
                        maxWidth:'max-content',
                        padding: 40,
                        border:`0.5px solid #3C3C3C`,
                        borderRadius: 5,
                    }}
                >
                    <Typography variant="h1">Заголовки разделов сайта</Typography>
                    <Typography variant="h2">Оглавление блоков, большие кнопки</Typography>
                    <Typography variant="h3">Сопровождение к элементам</Typography>
                    <Typography variant="subtitle1">Оглавление блоков</Typography>
                    <Typography variant="subtitle2">Оглавление блоков</Typography>
                    <a href="#" className="link">Для ссылок</a>
                    <div className="download">Скачать</div>
                </Stack>
                <Switch defaultChecked/>

                <CustomInput typeInput="search"/>
                {/*<TextField*/}

                {/*    fullWidth*/}
                {/*    id="outlined-helperText"*/}
                {/*    label="Helper text"*/}
                {/*    InputLabelProps={{*/}
                {/*        shrink: true,*/}
                {/*    }}*/}
                {/*    InputProps={{*/}
                {/*        endAdornment: <IconButton size="small"> {showPassword ? <IconSearch/> :*/}
                {/*            <IconSearch/>}</IconButton>*/}
                {/*    }}*/}
                {/*/>*/}
                <FormContainer

                    defaultValues={{name: ''}}
                    onSuccess={data => console.log(data)}

                >
                    <Stack
                        // variant="outlined"
                        spacing={10}
                        sx={{
                            maxWidth:'max-content',
                            padding: 10,
                            border:`0.5px solid #3C3C3C`,
                            borderRadius: 5,
                        }}
                    >
                    <TextField
                        required
                        error
                        fullWidth
                        id="outlined-helperText"
                        label="Helper text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: <IconButton size="small"><IconPassword visible={true}/></IconButton>
                        }}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-helperText"
                        label="Helper text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: <IconButton size="small"><IconPassword visible={false}/></IconButton>
                        }}
                    />
                    </Stack>
                </FormContainer>
                <Box>
                    <Button variant="contained" color="success">пассив</Button>
                    <Button variant="outlined" color="success">Пассив</Button>
                    <Button variant="contained" color="error">Contained</Button>
                    <Button variant="outlined" color="error">Contained</Button>
                    <Button variant="contained" color="warning">Contained</Button>
                    <Button variant="outlined" color="neutral">Contained</Button>
                </Box>

            </Container>
        </MainLayout>
    );
};

export default Components;