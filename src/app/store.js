import { configureStore } from '@reduxjs/toolkit'
import repositoriesReducer from '../features/repositories/repositoriesSlice'
import readmeReducer from '../features/repositories/readmeSlice'

export default configureStore({
  reducer: {
    repositories: repositoriesReducer,
    readme: readmeReducer
  }
})