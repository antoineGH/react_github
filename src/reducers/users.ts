import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSlice } from '../types/user'
import { getUser } from 'api/user'

const initialState: UserSlice = {
  user: {
    login: '',
    id: null,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    twitter_username: '',
    public_repos: null,
    public_gists: null,
    followers: null,
    following: null,
    created_at: '',
    updated_at: '',
  },
  isLoadingUser: false,
  hasErrorUser: false,
  errorMessage: '',
}

export const loadUser = createAsyncThunk('user/getUser', getUser)

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUser: state => {
      state.user = initialState.user
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload
        state.isLoadingUser = false
        state.hasErrorUser = false
      })
      .addCase(loadUser.pending, state => {
        state.isLoadingUser = true
        state.hasErrorUser = false
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.isLoadingUser = false
        state.hasErrorUser = true
        state.errorMessage = action?.error?.message
      })
  },
})

export const { clearUser } = users.actions
export default users.reducer
