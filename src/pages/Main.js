import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {loadShows} from '../_redux/actions/shows.actions'
import ShowList from '../components/Shows/ShowList'
import {Box, SpeedDial, SpeedDialIcon} from '@mui/material'
import {CustomDialog} from '../components/Layout/CustomDialog'
import {ShowForm} from '../components/forms/ShowForm'

const Main = () => {
    const { list, isLoading } = useSelector((state) => state.shows)
    const token = useSelector(state => state.users.token)
    const isStaff = useSelector(state => state.users.isStaff)
    const [isDialogOpen, setDialog] = useState(false)

    const handleDialog = () => {
        setDialog(st => !st)
    }

    const dsp = useDispatch()
    useEffect(() => {
        dsp(loadShows())
    }, [token, dsp])
    return (
        <>
            { isLoading ? <p>It is Loading...</p> :
                <ShowList list={list}/>
            }
            { isStaff ?
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClick={handleDialog}
                >hi</SpeedDial>
            : null}
            <CustomDialog isDialogOpen={isDialogOpen} setDialog={handleDialog}  title={"Create Show"}>
                <ShowForm title="create show"/>
            </CustomDialog>
        </>
    )
}

export default Main