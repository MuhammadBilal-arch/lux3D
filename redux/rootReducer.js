import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./slices/user";
import LabSlice from "./slices/lab";
import TestSlice from "./slices/tests";
import PatientSlice from "./slices/patients";

export const rootReducer = combineReducers({
    User: UserSlice,
    Lab: LabSlice,
    Test: TestSlice,
    Patient: PatientSlice,
});