import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    API_HANDLER,
    setLocalStorage,
} from "@/utils/functions";
import { TOAST_TYPE, showToast } from "@/utils/toast";
import { END_POINTS } from "@/utils/endpoints";


const initialState = {
    providers: [],
    reportsFormat: [],
    isLoading: false,
    error: null,
    reportAdded: false
};

export const labSlice = createSlice({
    name: "lab",
    initialState,
    reducers: {
        onResetUserState() {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        // ON FETCH PROVIDERS
        builder.addCase(fetchLabProviders.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchLabProviders.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log(action.payload.data)
            state.providers = action.payload.data

        });
        builder.addCase(fetchLabProviders.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            showToast(action.payload.message || "Error Occurred.", TOAST_TYPE.error);
        });

        //  ON UPDATE PROVIDER DATA
        builder.addCase(onUpdateProviderData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(onUpdateProviderData.fulfilled, (state, action) => {
            const updatedProvider = action.payload.data;
            const index = state.providers.findIndex(provider => provider.id === updatedProvider.id);
            if (index !== -1) {
                state.providers[index] = updatedProvider;
            }
            showToast("Updated successfully.", TOAST_TYPE.success);
        });
        builder.addCase(onUpdateProviderData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            showToast(action.payload.data || "Error Occurred.", TOAST_TYPE.error);
        });

        // ON FETCH LAB REPORT
        builder.addCase(fetchLabReportFromat.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchLabReportFromat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.reportsFormat = action.payload.data

        });
        builder.addCase(fetchLabReportFromat.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            showToast(action.payload.data.message || "Error Occurred.", TOAST_TYPE.error);
        });

        // ON CREATE TEST FORMAT
        builder.addCase(onCreateLabReportFormat.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.reportAdded= false;
        });
        builder.addCase(onCreateLabReportFormat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.reportsFormat.push(action.payload?.data);
            state.reportAdded= true;
            showToast("Report Successfully Added.", TOAST_TYPE.success);
        });
        builder.addCase(onCreateLabReportFormat.rejected, (state, action) => {
            state.isLoading = false;
            state.reportAdded= false;
            state.error = action.payload;
            showToast(action.payload?.message || "Error Occurred.", TOAST_TYPE.error);
        });
        // ON UPDATE TEST FORMAT
        builder.addCase(onUpdateReportFormat.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(onUpdateReportFormat.fulfilled, (state, action) => {
            const updatedReportFormat = action.payload.data;
            const index = state.reportsFormat.findIndex(report => report.id === updatedReportFormat.id);
            if (index !== -1) {
                state.reportsFormat[index] = updatedReportFormat;
            }
            showToast("Format Updated successfully.", TOAST_TYPE.success);
        });
        builder.addCase(onUpdateReportFormat.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            showToast(action.payload.message || "Error Occurred.", TOAST_TYPE.error);
        });
        // ON DELETE TEST FORMAT
        builder.addCase(onDeleteReportFormat.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(onDeleteReportFormat.fulfilled, (state, action) => {
            const { id } = action.payload.data;
            console.log(action.payload,"payload")

            state.reportsFormat = state.reportsFormat.filter(report => Number(report.id) !== Number(id));
            state.isLoading = false;
            showToast("Format Deleted successfully.", TOAST_TYPE.success);
        });
        builder.addCase(onDeleteReportFormat.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message;
            console.log(action.payload)
            showToast(action.payload?.message || "Error Occurred.", TOAST_TYPE.error);
        });
    },
});

export const fetchLabProviders = createAsyncThunk(
    "lab/fetchLabProviders",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "GET",
                END_POINTS.LAB.PROVIDERS,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const onUpdateProviderData = createAsyncThunk(
    "lab/onUpdateProviderData",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "PATCH",
                `${END_POINTS.LAB.UPDATE_PROVIDER}`,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchLabReportFromat = createAsyncThunk(
    "lab/fetchLabReportFromat",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "GET",
                `${END_POINTS.REPORTS.FORMAT.DEFAULT}${payload.id}/getall`,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const onCreateLabReportFormat = createAsyncThunk(
    "lab/onCreateLabReportFormat",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "POST",
                END_POINTS.REPORTS.FORMAT.CREATE,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const onUpdateReportFormat = createAsyncThunk(
    "lab/onUpdateReportFormat",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "PATCH",
                `${END_POINTS.REPORTS.FORMAT.DEFAULT}/${payload.id}/update`,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const onDeleteReportFormat = createAsyncThunk(
    "lab/onDeleteReportFormat",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "DELETE",
                `${END_POINTS.REPORTS.FORMAT.DEFAULT}/${payload.id}/delete`,
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
} = labSlice.actions;

export default labSlice.reducer;