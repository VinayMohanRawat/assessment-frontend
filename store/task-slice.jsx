import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'task',
    initialState: { data: [], count: 0,change: false },
    reducers: {
        add(state, action) {
            const newName = action.payload
            state.change = true
            state.data[0] = newName
        },

    }
})

export const taskAction = taskSlice.actions;

export default taskSlice.reducer