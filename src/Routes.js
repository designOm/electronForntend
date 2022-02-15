import React from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { PrimaryLayout } from './layout';
import { Authentication, Landing } from './screens';

const PageNotFound = () => <p>Back to <Link to={'/'}>Home</Link></p>


const AppRoutes = () => {
    return <HashRouter>
        <Routes>
            <Route path="/" element={<PrimaryLayout />}>
                <Route index element={<Landing />} />
                <Route path="authentication" element={<Authentication />} />

                <Route path='*' element={<PageNotFound />} />
            </Route>

        </Routes>
    </HashRouter>
}

export default AppRoutes