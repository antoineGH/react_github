import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSlice } from '../types/user'

// Slice Reducer
////////////////////////////////

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
}

export const loadUser = createAsyncThunk(
  'user/getUser',
  async (userName: string): Promise<User> => {
    const data = await fetch(`https://api.github.com/users/${userName}`)
    const json = await data.json()
    return json
  },
)

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload
      })
      .addCase(loadUser.pending, state => {
        state.isLoadingUser = true
        state.hasErrorUser = false
      })
      .addCase(loadUser.rejected, state => {
        state.isLoadingUser = false
        state.hasErrorUser = true
      })
  },
})

export default users.reducer
