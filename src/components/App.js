import {useDispatch} from 'react-redux'
import {useEffect, Suspense} from 'react'
import {verifyToken} from '../_redux/actions/users.actions'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Authentication from '../pages/Authentication'
import 'mdbreact/dist/css/mdb.css'
import Main from '../pages/Main'


export const App = () => {
    const dsp = useDispatch()
    useEffect(() => dsp(verifyToken()), [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Authentication />} />
            </Routes>
        </BrowserRouter>
    )
}