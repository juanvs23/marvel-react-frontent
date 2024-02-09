import { createSlice } from '@reduxjs/toolkit'
import {endpointsOptions} from '@/constants'

export const selectSlicer = createSlice({
    name: 'select',
    initialState: {
        selectedOption: endpointsOptions.characters,
        input:''
    },
    reducers: {
       setSelection: (state, action) => {
           state.selectedOption = action.payload
       },
       
       setInput: (state, action) => {
           state.input = action.payload
       }
    },
})
export const { setSelection, setInput } = selectSlicer.actions
export default selectSlicer.reducer