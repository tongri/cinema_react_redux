import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {PAGE_MAIN} from '../consts/routes'


const PrivateRoute = ({ children, ...tags }) => {
    const isAuthenticated = useSelector(state => state.users.isAuthenticated)

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to={PAGE_MAIN} />
    )
}

export default PrivateRoute