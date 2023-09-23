import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isAuth: boolean
}
const initialState: IInitialState = {
  isAuth: false
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: {payload: boolean}) {
      return {
        ...state,
        isAuth: action.payload
      }
    }
  },
});

export const {setAuth} = AuthSlice.actions;
export default AuthSlice.reducer;
