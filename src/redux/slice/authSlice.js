const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    isLoggedIn : false,
    email : null,
    userName : null,
    userId: null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        SET_ACTIVE_USER : (state, action) => {
            const {email, userName, userId} = action.payload;
            state.isLoggedIn = true;
            state.email = email;
            state.userName = userName;
            state.userId = userId;

        },
        REMOVE_ACTIVE_USER: (state) => {
            state.isLoggedIn = false;
            state.email = null;
            state.userName = null;
            state.userId = null;
        }
    }
})

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = authSlice.actions;

export const selectIsLoggedIn = (state) => {state.auth.isLoggedIn};