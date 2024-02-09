import { createSlice } from '@reduxjs/toolkit'
import {userInterfaceOptions} from '@/constants'

export const userInterfaSlicer = createSlice({
    name: 'userInterface',
    initialState: {
        isOpen: userInterfaceOptions.openMenu.close, 
        isDark: userInterfaceOptions.isDarkTheme.light,
        title:userInterfaceOptions.title
    },
    reducers: {
       setOpenMnu: (state) => {
        state.isOpen = !state.isOpen 
       },
       
       setDarkTheme: (state,action) => {
        state.isDark = action.payload
       },
       setTitle: (state,action) => {
        state.title = action.payload
       }
    },
})
export const { setOpenMnu, setDarkTheme,setTitle } = userInterfaSlicer.actions
export default userInterfaSlicer.reducer