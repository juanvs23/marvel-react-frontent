import { configureStore } from '@reduxjs/toolkit'
import selectSlicer from './features/selectSlicer'
import  userInterfaSlicer  from './features/userInterfaceSlicer';
import paginationSlicer from './features/paginationSlicer';

export default configureStore({
  reducer: {
    select: selectSlicer,
    userInterface: userInterfaSlicer,
    pagination: paginationSlicer
  },
})