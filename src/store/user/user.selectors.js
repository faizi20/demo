import { createSelector } from 'reselect';

const selectUserReducer = state => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  userSlice => userSlice?.user
);

export const selectAccessToken = createSelector(
  [selectUser],
  user => user.accessToken
);

export const selectUserProfileData = createSelector([selectUser], user => {
  const { email, userName, dateOfBirth, gender, country } = user;
  return {
    email,
    userName: userName || '',
    dateOfBirth: dateOfBirth || '',
    gender: gender || '',
    country: country || '',
  };
});
