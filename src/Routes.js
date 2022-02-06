import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { PrimaryLayout } from './layout';
import { Landing, Authentication } from './screens';


const AppRoutes = () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<PrimaryLayout />}>
                <Route index element={<Landing />} />
                <Route path="authentication" element={<Authentication />} />
            </Route>
        </Routes>
    </HashRouter>
}

export default AppRoutes