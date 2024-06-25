import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    API_HANDLER,
    setLocalStorage,
} from "@/utils/functions";
import { TOAST_TYPE, showToast } from "@/utils/toast";
import { END_POINTS } from "@/utils/endpoints";


const initialState = {
    patients: [],
    isLoading: false,
    error: null,
};

export const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        onResetUserState() {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        // ON FETCH PROVIDER PATIENTS
        builder.addCase(fetchAllPatients.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchAllPatients.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log(action.payload.data)
            state.patients = action.payload.data
        });
        builder.addCase(fetchAllPatients.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            showToast(action.payload.message || "Error Occurred.", TOAST_TYPE.error);
        });

    },
});

export const fetchAllPatients = createAsyncThunk(
    "patients/fetchAllPatients",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "GET",
                `${END_POINTS.PATIENTS.DEFAULT}/${payload.id}/getall`,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const {
    onResetUserState,
} = patientSlice.actions;

export default patientSlice.reducer;