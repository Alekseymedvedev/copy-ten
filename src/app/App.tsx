import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {routes} from "./routes/routes";
import '../shared/assets/styles/reset.scss';
import '../shared/assets/styles/libs.scss';
import '../shared/assets/styles/globals.scss';
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme} from "./themeStyle/themeStyle";
import {CssBaseline} from "@mui/material";


function App() {


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    {routes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
