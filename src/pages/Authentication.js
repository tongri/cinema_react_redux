import AuthContainer from '../components/forms/AuthContainer'
import ResponsiveAppBar from '../components/Layout/Header'


const Authentication = () => {
    return (
        <>
            <ResponsiveAppBar />
            <div className="container-fluid">
                <AuthContainer />
            </div>
        </>
    )
}

export default Authentication