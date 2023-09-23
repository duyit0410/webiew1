import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user?: IUser
}
const initialState: IInitialState = {
 
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: {payload: IUser}) {
      return {
        ...state,
        user: action.payload
      }
    }
  },
});

export const {setUser} = UserSlice.actions;
export default UserSlice.reducer;
