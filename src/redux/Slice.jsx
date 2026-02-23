// import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

// const authslice = createSlice({
//   name: "auth",
//   initialState: {
//     email: "",
//     crops:[],
//     tools:[],
//      selectedCrop: null,
//   selectedTool: null,
//   },
//   reducers: {
//     // 🔐 Auth
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setCrops:(state,action)=>{
//       state.crops=action.payload;
//     },
//     setTools:(state,action)=>
//     {
//       state.tools=action.payload;
//     },
//     selectCrop: (state, action) => {
//       state.selectedCrop = action.payload;
//     },
//     selectTool: (state, action) => {
//       state.selectedTool = action.payload;
//     },
//   },
// }); // ✅ yeh missing tha

// export const { setEmail,setCrops,setTools,selectCrop,selectTool} = authslice.actions;

// export default authslice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    crops: [],
    tools: [],
    selectedCrop: null,
    selectedTool: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCrops: (state, action) => {
      state.crops = action.payload;
    },
    setTools: (state, action) => {
      state.tools = action.payload;
    },
    selectCrop: (state, action) => {
      state.selectedCrop = action.payload;
    },
    selectTool: (state, action) => {
      state.selectedTool = action.payload;
    },
  },
});

export const { setEmail, setCrops, setTools, selectCrop, selectTool } = authSlice.actions;
export default authSlice.reducer;