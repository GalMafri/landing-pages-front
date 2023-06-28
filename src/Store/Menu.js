// Import the createSlice function from the Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the menu slice
let menu = false;

// Create the menu slice using createSlice
export const MenuReduce = createSlice({
  // Give the slice a name
  name: "menu",
  // Set the initial state for the slice
  initialState: menu,
  // Define reducer functions for the slice
  reducers: {
    // Define the changeMenuHandler reducer
    changeMenuHandler(state, action) {
      // Toggle the value of the menu state
      menu = action.payload.menu;
      // Return the new value to become the new state of the slice
      return action.payload.menu;
    },
    // Define the disableMenuHandler reducer
    disableMenuHandler() {
      // Set the menu state to true to disable the menu
      menu = true;
      // Return true to indicate that the menu has been disabled
      return true;
    },
  },
});

// Export the changeMenuHandler and disableMenuHandler functions from the menu slice's actions
export const { changeMenuHandler, disableMenuHandler } = MenuReduce.actions;
