import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import Layout from './comps/layout';

import PageNotFound404 from './comps/pageNotFound404';
import App_exchange from './comps/app_exchange';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='*' element={<PageNotFound404/>}/>
                    <Route index element={<App_exchange/>} />
                </Route>
            </Routes>
        </Router>
    )
}
