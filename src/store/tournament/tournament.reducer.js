import { TOURNAMENT_ACTION_TYPES } from './tournament.type';

import tableTextureOne from '../../assets/img/table_texture_img_1.png';
import tableTextureTwo from '../../assets/img/table_texture_img_2.png';
import tableTextureThree from '../../assets/img/table_texture_img_3.png';
import tableTextureFour from '../../assets/img/table_texture_img_4.png';
import {
  ruleOne,
  ruleTwo,
  ruleThree,
  ruleFour,
} from '../../assets/docs/tournamentRules';

import dominoTileColorOne from '../../assets/img/tileColorImg1.png';
import dominoTileColorTwo from '../../assets/img/tileColorImg2.png';
import dominoTileColorThree from '../../assets/img/tileColorImg3.png';
import dominoTileColorFour from '../../assets/img/tileColorImg4.png';

import environmentFloorOne from '../../assets/img/evironmentFloorThumb1.png';
import environmentFloorTwo from '../../assets/img/evironmentFloorThumb2.png';
import environmentFloorThree from '../../assets/img/evironmentFloorThumb3.png';
import environmentFloorFour from '../../assets/img/evironmentFloorThumb4.png';

const createTournamentFormInitState = {
  gameCenter: '49441706-2f1b-4235-b5da-7451b68e5ee8',
  name: '',
  noOfPlayers: 0,
  scheduleDate: new Date().toISOString(),
  entryFee: 0,
  prizePool: 0,
  rule: 'rule 1',
  tableTexture: 'texture 1',
  logo: '',
  dominoTileColor: 'color 1',
  environmentFloor: 'floor 1',
};

const initialState = {
  createTournamentForm: createTournamentFormInitState,
  rules: [
    { name: 'rule 1', description: ruleOne },
    { name: 'rule 2', description: ruleTwo },
    { name: 'rule 3', description: ruleThree },
    { name: 'rule 4', description: ruleFour },
  ],
  tableTextures: [
    { name: 'texture 1', image: tableTextureOne },
    { name: 'texture 2', image: tableTextureTwo },
    { name: 'texture 3', image: tableTextureThree },
    { name: 'texture 4', image: tableTextureFour },
  ],
  dominoTileColors: [
    { name: 'color 1', image: dominoTileColorOne },
    { name: 'color 2', image: dominoTileColorTwo },
    { name: 'color 3', image: dominoTileColorThree },
    { name: 'color 4', image: dominoTileColorFour },
  ],
  environmentFloors: [
    { name: 'floor 1', image: environmentFloorOne },
    { name: 'floor 2', image: environmentFloorTwo },
    { name: 'floor 3', image: environmentFloorThree },
    { name: 'floor 4', image: environmentFloorFour },
  ],
  tournaments: [],
  error: null,
  isLoading: false,
};

export const tournamentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FORM_NEXT: {
      const { createTournamentForm } = state;
      return {
        ...state,
        createTournamentForm: { ...createTournamentForm, ...payload },
      };
    }

    case TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_START:
    case TOURNAMENT_ACTION_TYPES.GET_TOURNAMENTS_START: {
      return { ...state, isLoading: true };
    }

    case TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        createTournamentForm: createTournamentFormInitState,
      };
    }

    case TOURNAMENT_ACTION_TYPES.GET_TOURNAMENTS_SUCCESS: {
      return { ...state, isLoading: false, error: null, tournaments: payload };
    }

    case TOURNAMENT_ACTION_TYPES.CREATE_TOURNAMENT_FAILURE:
    case TOURNAMENT_ACTION_TYPES.GET_TOURNAMENTS_FAILURE: {
      return { ...state, isLoading: false, error: payload };
    }

    default: {
      return state;
    }
  }
};
