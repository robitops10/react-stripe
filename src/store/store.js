import { configureStore } from '@reduxjs/toolkit'
import reducer from './combineReducers'

export default configureStore({ reducer })
