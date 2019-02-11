import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainLayout } from "./components/MainLayout";
import { Kontakt } from "./components/Kontakt";
import { Home } from "./components/Home";
import { Regulamin } from "./components/Regulamin";
import { Faq } from "./components/Faq";
import { Basket } from "./components/Basket";
import { Header } from "./components/Header/Header";
import { Error404 } from "./components/Error404";

import './index.css';


class App extends React.Component {
    render() { 
        return ( 
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/faq"} component={Faq} />
                        <Route exact path={"/regulamin"} component={Regulamin} />
                        <Route exact path={"/Kontakt"} component={Kontakt} />
                        <Route exact path={"/Basket"} component={Basket} />
                        <Route component={Error404} />
                    </Switch>
                </MainLayout>
            </BrowserRouter>
         );
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
