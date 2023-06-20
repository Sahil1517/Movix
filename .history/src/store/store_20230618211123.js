import {
    configureStore

import homeSlice from './homeSlice';
export const store = configureStore({ 
    reducer:{
    home: homeSlice,
},
});