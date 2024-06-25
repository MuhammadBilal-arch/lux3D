import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    API_HANDLER,
    setLocalStorage,
} from "@/utils/functions";
import { TOAST_TYPE, showToast } from "@/utils/toast";
import { END_POINTS } from "@/utils/endpoints";


const initialState = {
    user: {},
    isLoading: false,
    isLogged: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onResetUserState() {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        // ON FETCH USER
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = {
                ...action.payload.user,
                profile_image_base_path: action.payload.profile_image_base_path,
            };
            state.isLogged = true;
            setLocalStorage("token", action.payload.token);
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogged = false;
            state.error = action.payload;
            showToast(action.payload.message || "Error Occurred.", TOAST_TYPE.error);
        });

        // ON REGISTER USER
        builder.addCase(onRegisterUser.pending, (state) => {
            state.isLoading = true;
            state.isLogged = false;
            state.error = null;
        });
        builder.addCase(onRegisterUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLogged = true;
            state.user = action.payload?.data?.user;
            showToast("Registered Successfully Added.", TOAST_TYPE.success);
        });
        builder.addCase(onRegisterUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogged = false;
            state.error = action.payload;
            console.log(action.payload);
            showToast(action.payload?.data?.message || "Error Occurred.", TOAST_TYPE.error);
        });
        // ON LOGIN USER
        builder.addCase(onLoginUser.pending, (state) => {
            state.isLoading = true;
            state.isLogged = false;
            state.error = null;
        });
        builder.addCase(onLoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload?.data?.user;
            state.isLogged = true;
            console.log(action.payload)
            showToast(action?.payload?.data?.message, TOAST_TYPE.success);
        });
        builder.addCase(onLoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogged = false;
            state.error = action.payload;
            console.log(action.payload);
            showToast(action.payload.message || "Error Occurred.", TOAST_TYPE.error);
        });

        //  ON UPDATE
        builder.addCase(onUpdateUserData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(onUpdateUserData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = { ...state.user, ...action.payload.data.user };
            showToast("Updated successfully.", TOAST_TYPE.success);
        });
        builder.addCase(onUpdateUserData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            showToast(action.payload.data || "Error Occurred.", TOAST_TYPE.error);
        });

        // ON LOGOUT USER
        builder.addCase(onLogoutUser.pending, (state) => {
            state.isLoading = true;
            state.isLogged = false;
            state.error = null;
        });
        builder.addCase(onLogoutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLogged = false;
            state.user = {};
            showToast(action?.payload?.data?.message, TOAST_TYPE.success);
        });
        builder.addCase(onLogoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogged = false;
            state.error = action.payload;
            showToast(action.payload.message || "Error Occurred.", TOAST_TYPE.error);
        });

    },
});

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "POST",
                END_POINTS.AUTH.LOGIN,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const onRegisterUser = createAsyncThunk(
    "user/onRegisterUser",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "POST",
                END_POINTS.AUTH.REGISTER,
                payload
            );
            const data = await result.data;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const onLoginUser = createAsyncThunk(
    "user/onLoginUser",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "POST",
                END_POINTS.AUTH.LOGIN,
                payload
            );
            const data = await result;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const onLogoutUser = createAsyncThunk(
    "user/onLogoutUser",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "GET",
                END_POINTS.AUTH.LOGOUT,
                payload
            );
            const data = await result;
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const onUpdateUserData = createAsyncThunk(
    "user/onUpdateUserData",
    async (payload, { rejectWithValue }) => {
        try {
            const result = await API_HANDLER(
                "POST",
                payload?.type === "customer"
                    ? END_POINTS.PROFILE.CUSTOMER_UPDATE
                    : END_POINTS.PROFILE.SERVICE_PROVIDER_UPDATE,
                payload.formData
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
} = userSlice.actions;

export default userSlice.reducer;