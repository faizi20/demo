import { createAction } from '../../utils/reducer/reducer.util';
import { axiosInstance } from '../../utils/api/api.util';
import { TOURNAMENT_ACTION_TYPES } from './tournament.type';

const createTournamentStart = () =>
  createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_START);

const createTournamentSuccess = payload =>
  createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_SUCCESS, payload);

const createTournamentFailure = payload =>
  createAction(TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FAILURE, payload);

const createTournament = async payload => {
  const { data } = await axiosInstance.api.post('/tournaments', payload);
  return data;
};

export const createTournamentAsync =
  (payload, onSuccessCallback) => async dispatch => {
    dispatch(createTournamentStart());
    try {
      const data = await createTournament(payload);
      dispatch(createTournamentSuccess(data));
      onSuccessCallback();
    } catch (error) {
      dispatch(createTournamentFailure(error.response.data.message));
    }
  };

const getTournamentsStart = () =>
  createAction(TOURNAMENT_ACTION_TYPES.GET_TOURNAMENTS_START);

const getTournamentsSuccess = payload =>
  createAction(TOURNAMENT_ACTION_TYPES.GET_TOURNAMENTS_SUCCESS, payload);

const getTournamentsFailure = payload =>
  createAction(TOURNAMENT_ACTION_TYPES.GET_TOURNAMENTS_FAILURE, payload);




  
const getTournaments = async params => {
  const { data } = await axiosInstance.api.get('/tournaments', { params });
  return data;
};
export const getTournamentsAsync = payload => async dispatch => {
  dispatch(getTournamentsStart());
  try {
    const tournaments = await getTournaments(payload);
    dispatch(getTournamentsSuccess(tournaments));
  } catch (error) {
    dispatch(getTournamentsFailure(error.response.data.message));
  }
};
