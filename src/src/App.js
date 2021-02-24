import React, {Fragment, Suspense, lazy} from "react";
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./Components/shared/components/Pace";

import {IntlProvider, addLocaleData} from "react-intl";
import en from "react-intl/locale-data/en";
import messages from './translations/index';
import flattenMessages from "./Components/shared/functions/flattenMessages";

addLocaleData([...en]);
const locale = "en-US" ;

const LoggedInComponent = lazy(() => import("./Components/logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./Components/logged_out/components/Main"));


function App() {
    return (
        <BrowserRouter>
            <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <GlobalStyles/>
                    <Pace color={theme.palette.primary.light}/>
                    <Suspense fallback={<Fragment/>}>
                        <Switch>
                            <Route path="/c">
                                <LoggedInComponent/>
                            </Route>
                            <Route>
                                <LoggedOutComponent/>
                            </Route>
                        </Switch>
                    </Suspense>
                </MuiThemeProvider>
            </IntlProvider>
        </BrowserRouter>
    );
}

serviceWorker.register();

export default App;
