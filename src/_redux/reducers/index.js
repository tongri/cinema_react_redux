import {combineReducers} from 'redux'

import UsersReducer from './users.reducer'
import ShowsReducer from './shows.reducer'
import OrderReducer from './order.reducer'

export default combineReducers({
    users: UsersReducer,
    shows: ShowsReducer,
    orders: OrderReducer,
})