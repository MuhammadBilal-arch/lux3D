import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    API_HANDLER,
    setLocalStorage,
} from "@/utils/functions";
import { TOAST_TYPE, showToast } from "@/utils/toast";
import { END_POINTS } from "@/utils/endpoints";


const initialState = {
    tests: [],    
    isLoading: {
        create: false,
        fetch: false,
        update: false,
        delete: false,
    },
    error: null,
};

export const testSlice = createSlice({
    name: "tests",
    initialState,
    reducers: {
        onResetUserState() {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(onCreateReport.pending, (state) => {
            state.isLoading = { ...state.isLoading, create: true };
            state.error = null;
        });
        builder.addCase(onCreateReport.fulfilled, (state, action) => {
            state.isLoading = { ...state.isLoading, create: false };
            state.tests.push(action.payload?.data);
            showToast("Test Successfully Added.", TOAST_TYPE.success);
        });
        builder.addCase(onCreateReport.rejected, (state, action) => {
            state.isLoading = { ...state.isLoading, create: false };
            state.error = action.payload;
            showToast(action.payload?.message || "Error Occurred.", TOAST_TYPE.error);
        });

        // ON FETCH TESTS
        builder.addCase(fetchAllTests.pending, (state) => {
            state.isLoading = { ...state.isLoading, fetch: true };
            state.error = null;
        });
        builder.addCase(fetchAllTests.fulfilled, (state, action) => {
            state.isLoading = { ...state.isLoading, fetch: false };
            state.tests = action.payload.data
        });
        builder.addCase(fetchAllTests.rejected, (state, action) => {
            state.isLoading = { ...state.isLoading, create: false };
            state.error = action.payload;
            console.log(action.payload,"fetchAllTests")
            showToast(action.payload.message || "Error Occurred.", TOAST_TYPE.error);
        });

        //  ON UPDATE REPORT DATA
        builder.addCase(onUpdateReport.pending, (state) => {
            state.isLoading = { ...state.isLoading, update: true };
            state.error = null;
        });
        builder.addCase(onUpdateReport.fulfilled, (state, action) => {
            const updatedReport = action.payload.data;
             const index = state.tests.findIndex(test => test.id === updatedReport.id);
            if (index !== -1) {
                state.tests[index] = updatedReport;
            }
            showToast("Updated successfully.", TOAST_TYPE.success);
            state.isLoading = { ...state.isLoading, update: false };
        });
        builder.addCase(onUpdateReport.rejected, (state, action) => {
            state.isLoading.update = false;
            state.error = action.payload;
            state.isLoading = { ...state.isLoading, update: false };
            showToast(action.payload.data || "Error Occurred.", TOAST_TYPE.error);
        });
    },
});

export const fetchAllTests = createAsyncThunk(
    "tests/fetchAllTests",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "POST",
                payload?.id ? `${END_POINTS.REPORTS.TEST.DEFAULT}/${payload.id}/getall` : END_POINTS.REPORTS.TEST.GET,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const onCreateReport = createAsyncThunk(
    "tests/onCreateReport",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "POST",
                END_POINTS.REPORTS.TEST.CREATE,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const onUpdateReport = createAsyncThunk(
    "tests/onUpdateReport",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "PATCH",
                `${END_POINTS.REPORTS.TEST.DEFAULT}/${payload.id}/update`,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const {
    onResetUserState,
} = testSlice.actions;

export default testSlice.reducer;