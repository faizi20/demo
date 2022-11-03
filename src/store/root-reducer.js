import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { uiReducer } from './ui/reducers/uiReducer';
import { nftReducer } from './nft/reducers/nftReducer';
import { tournamentReducer } from './tournament/tournament.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  tournament: tournamentReducer,
  ui: uiReducer,
  selectedNft: nftReducer,
  buyNftModal: nftReducer,
  rentNftDirect: nftReducer,
});
