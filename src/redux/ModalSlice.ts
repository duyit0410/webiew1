import { createSlice } from "@reduxjs/toolkit";

export interface IModalError {
  visible: boolean;
  text?: string;
}
interface IInitialState {
  modalError: IModalError;
}
const initialState: IInitialState = {
  modalError: {
    visible: false,
  },
};
const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModalError(state, action: { payload: IModalError }) {
      return {
        ...state,
        modalError: { ...action.payload },
      };
    },
  },
});

export const {handleModalError} = ModalSlice.actions;
export default ModalSlice.reducer;
