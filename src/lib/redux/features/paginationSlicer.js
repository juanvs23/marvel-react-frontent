import { createSlice } from '@reduxjs/toolkit'

export const paginationSlicer = createSlice({
    name: 'pagination',
    initialState: {
        count: 1,
        limit: 20,
        offset: 0,
        currentPage:1,
        total: null,
    },
    reducers: {
       setCount: (state, action) => {
           state.count = action.payload
       },
       setLimit: (state, action) => {
           state.limit = action.payload
       },
       setCurrentPage: (state, action) => {
           state.currentPage = action.payload
       },
       setOffset: (state, action) => {
           state.offset = action.payload
       },
       setTotal: (state, action) => {
           state.total = action.payload
       },

    },
})
export const { setCount, setLimit, setOffset, setTotal,setCurrentPage } = paginationSlicer.actions
export default paginationSlicer.reducer