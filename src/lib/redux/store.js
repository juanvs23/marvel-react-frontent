import { configureStore } from '@reduxjs/toolkit'
import selectSlicer from './features/selectSlicer'
import  userInterfaSlicer  from './features/userInterfaceSlicer';

export default configureStore({
  reducer: {
    select: selectSlicer,
    userInterface: userInterfaSlicer 
  },
})