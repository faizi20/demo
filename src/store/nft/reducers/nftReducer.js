const initialState = {
  nft: {},
  buyNft: {},
  rentNftDirect: {},
};

export const nftReducer = (state = initialState, action) => {
  switch (action.type) {
    case "nft/VIEW_NFT_DETAILS":
      return { ...state, nft: action.payload };

    case "BUY_NFT_MODAL_DETAILS":
      return { ...state, buyNft: action.payload };

    case "NFT_RENT_DIRECT_MODAL_DETAILS":
      return { ...state, rentNftDirect: action.payload };

    default:
      return state;
  }
};
