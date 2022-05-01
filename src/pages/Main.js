import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {loadShows} from '../_redux/actions/shows.actions'
import ShowList from '../components/Shows/ShowList'
import ResponsiveAppBar from '../components/Layout/Header'

const Main = () => {
    console.log("in main")
    const { list, isLoading } = useSelector((state) => state.shows)
    const token = useSelector(state => state.users.token)

    const dsp = useDispatch()
    useEffect(() => dsp(loadShows()), [token, dsp])
    return (
        <>
            <ResponsiveAppBar />
            { isLoading ? <p>It is Loading...</p> :
                <ShowList list={list}/>
            }
        </>
    )
}

export default Main