import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import AbakkusHome from './AbakkusHome.js';
import AbakkusAbout from './AbakkusAbout.js';
import AbakkusPeople from './AbakkusPeople.js';
import AbakkusTermsAndConditions from './AbakkusTermsAndConditions.js';
import AbakkusPrivacy from './AbakkusPrivacy.js';
import AbakkusProduct from './AbakkusProduct.js';
import AbakkusDisclosure from './AbakkusDisclosure.js';

const productsAIFJson = {
    "abakkus_growth_fund_I": require('./config/products/aif/abakkus_growth_fund_I.json'),
    "abakkus_emerging_opportunities_fund_I": require('./config/products/aif/abakkus_emerging_opportunities_fund_I.json')
}

const productsPMSJson = {
    "abakkus_all_cap_approach": require('./config/products/pms/abakkus_all_cap_approach.json'),
    "abakkus_emerging_opportunities_fund_I": require('./config/products/pms/abakkus_emerging_opportunities_fund_I.json')
}

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ AbakkusHome } />
                    <Route path='/about' component={ AbakkusAbout } />
                    <Route path='/people' component={ AbakkusPeople } />
                    <Route path='/termsandconditions' component={ AbakkusTermsAndConditions } />
                    <Route path='/privacy' component={ AbakkusPrivacy } />
                    <Route path='/disclosure' component={ AbakkusDisclosure } />
                    <Route path='/product/aif/abakkus_growth_fund_I' render={ () => ( <AbakkusProduct jsonObj = { productsAIFJson["abakkus_growth_fund_I"] } />)} />
                    <Route path='/product/aif/abakkus_emerging_opportunities_fund_I' render={ () => ( <AbakkusProduct jsonObj = { productsAIFJson["abakkus_emerging_opportunities_fund_I"] } />)} />
                    <Route path='/product/pms/abakkus_all_cap_approach' render={ () => ( <AbakkusProduct jsonObj = { productsPMSJson["abakkus_all_cap_approach"] } />)} />
                    <Route path='/product/pms/abakkus_emerging_opportunities_fund_I' render={ () => ( <AbakkusProduct jsonObj = { productsPMSJson["abakkus_emerging_opportunities_fund_I"] } />)} />
                    <Route component={ AbakkusHome } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;