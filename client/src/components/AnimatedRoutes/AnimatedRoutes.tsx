import { Routes, Route, useLocation } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'
import Login from '../Pages/Login/MainComponent/Login'
import NotFound from '../Pages/NotFound/NotFound'
import Todos from '../Pages/Todos/MainComponent/Todos'

import { AnimatePresence } from 'framer-motion'
import Signup from '../Pages/Signup/Signup'
import Home from '../Pages/Home/MainComponent/Home'
import MainWindow from '../Pages/Code/MainWindow/MainWindow'

type Props = {}

export default function AnimatedRoutes({ }: Props) {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={ROUTES.default} element={<Home />} />
                <Route path={ROUTES.todos} element={<Todos />} />
                <Route path={ROUTES.login} element={<Login />} />
                <Route path={ROUTES.any} element={<NotFound />} />
                <Route path={ROUTES.signup} element={<Signup />} />
                <Route path={ROUTES.code}>
                    <Route index element={<MainWindow />}></Route>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}