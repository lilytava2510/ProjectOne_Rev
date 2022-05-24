import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../Interface/IUser";
import axios from "axios";

interface UserSliceState {
    loading: boolean,
    error: boolean,
    user?: IUser,
    currentProfile?: IUser,
    people?: IUser[]

}


const initialUserState: UserSliceState = {
    loading: false,
    error: false
}
type Login = {
    email:string, 
    password:string
}

type Paper = {
    id: any,
    first: string,
    last: string,
    username: string,
    email: string,
    password: string,
    trust: boolean
}

export const loginUser = createAsyncThunk(
    'user/login',
    async(credentials:Login, thunkAPI) => {
         try{
              const res = await axios.post('http://localhost:8080/users/login',credentials);
        
        return  {
                  userId: res.data.userId,
                  firstName: res.data.firstName,
                  lastName: res.data.lastName,
                  username: res.data.username,
                  email: res.data.email,
                  password: res.data.password,
                  privilege: res.data.privilege
        }

        } catch(e){
            return thunkAPI.rejectWithValue('Wrong login try again');
        }
    }
)

export const getUser = createAsyncThunk(
    "user/info",
    async (userId:number, thunkAPI) => {
        try{
              axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8080/users/info${userId}`);
  
            return res.data;
        } catch (e){
            console.log(e);
        }
    }  
  );

  export const updateUser = createAsyncThunk(
    "user/update",
    async (paper:Paper, thunkAPI) => {
        try{
              //axios.defaults.withCredentials = true;
            const res = await axios.put(`http://localhost:8080/users/update`, paper);
  
            return res.data;
        } catch (e){
            console.log(e);
        }
    }  
  );

  export const getPeople = createAsyncThunk(
    "user/registry",
    async ( thunkAPI) => {
        try{
              //axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8080/users/registry`);
  
            return res.data;
        } catch (e){
            console.log(e);
        }
    }  
  );

export const UserSlice = createSlice({
    name: "user", 
    initialState: initialUserState,
    reducers: {
        toggleError : (state) => {
            state.error = !state.error;
        },
        clearUser: (state) => {
            state.user = undefined;
            state.currentProfile = undefined;
            state.people = undefined;
        },
        clearHold: (state) => {
            state.currentProfile = undefined;
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = false;
            state.loading = false;
                });

        builder.addCase(loginUser.rejected, (state, action) => {
             state.error = true;
             state.loading = false;
                });
        builder.addCase(updateUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = false;
            state.loading = false;
                });

        builder.addCase(updateUser.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
                });
        builder.addCase(getPeople.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getPeople.fulfilled, (state, action) => {
            state.people = action.payload;
            state.error = false;
            state.loading = false;
                });

        builder.addCase(getPeople.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.currentProfile = action.payload;
            state.error = false;
            state.loading = false;
                });

        builder.addCase(getUser.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
                });
    }
})

   export const {toggleError, clearUser, clearHold} = UserSlice.actions;

export default UserSlice.reducer;