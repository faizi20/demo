const initialState = {
  matches: [],
  nextMatches: [],
  currentBrawls: [],
  match: null,
  loading: false,
  canLoadMore: false,
};

const TournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-TOURNAMENT-MATCHES":
      return {
        ...state,
        matches: action.data.filter((match) => !!match),
        loading: false,
        canLoadMore: !(action.data.length < 10),
      };
    default:
      return { ...state };
  }
};

export default TournamentReducer;
