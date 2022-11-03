import { createSelector } from 'reselect';

const selectTournamentReducer = state => state.tournament;

export const selectCreateTournamentForm = createSelector(
  [selectTournamentReducer],
  tournamentSlice => tournamentSlice.createTournamentForm
);

export const selectTournamentRules = createSelector(
  [selectTournamentReducer],
  tournamentSlice => tournamentSlice.rules
);

export const selectTournamentTableTexture = createSelector(
  [selectTournamentReducer],
  tournamentSlice => tournamentSlice.tableTextures
);

export const selectDominoTileColors = createSelector(
  [selectTournamentReducer],
  tournamentSlice => tournamentSlice.dominoTileColors
);

export const selectTournamentEnvironmentFloors = createSelector(
  [selectTournamentReducer],
  tournamentSlice => tournamentSlice.environmentFloors
);

export const selectTournaments = createSelector(
  [selectTournamentReducer],
  tournamentSlice => tournamentSlice.tournaments
);

