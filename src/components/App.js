import {useDispatch} from 'react-redux'
import {useEffect, Suspense} from 'react'
import {verifyToken} from '../_redux/actions/users.actions'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Authentication from '../pages/Authentication'
import 'mdbreact/dist/css/mdb.css'
import Main from '../pages/Main'
import ResponsiveAppBar from './Layout/Header'
import {PAGE_LOGIN, PAGE_MAIN} from '../consts/routes'


export const App = () => {
    const dsp = useDispatch()
    useEffect(() => {
        dsp(verifyToken())
    }, [])

    return (
        <>
        <BrowserRouter>
            <ResponsiveAppBar />
            <Routes>
                <Route path={PAGE_MAIN} element={<Main />} />
                <Route path={PAGE_LOGIN} element={<Authentication />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}