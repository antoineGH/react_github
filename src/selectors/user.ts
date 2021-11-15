import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { UserSlice } from '../types/user'

export const getUser = (state: RootState) => state.users
export const getUserSelector = createSelector(
  getUser,
  (slice: UserSlice) => slice?.user,
)
export const getIsLoadingUser = createSelector(
  getUser,
  (slice: UserSlice) => slice?.isLoadingUser,
)
export const getHasErrorUser = createSelector(
  getUser,
  (slice: UserSlice) => slice?.hasErrorUser,
)
