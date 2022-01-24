import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Landing, Authentication } from './screens';


const AppRoutes = () => {
    return <HashRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Landing />} />
                <Route path="authentication" element={<Authentication />} />
            </Route>
        </Routes>
    </HashRouter>
}

export default AppRoutes