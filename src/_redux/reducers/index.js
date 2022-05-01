import {combineReducers} from 'redux'

import UsersReducer from './users.reducer'
import ShowsReducer from './shows.reducer'

export default combineReducers({
    users: UsersReducer,
    shows: ShowsReducer,
})