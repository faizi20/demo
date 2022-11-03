export const nftDetails = (payload) => {
  return {
    type: "nft/VIEW_NFT_DETAILS",
    payload: payload,
  };
};

export const nftBuyModalDetails = (payload) => {
  return {
    type: "BUY_NFT_MODAL_DETAILS",
    payload: payload,
  };
};

export const nftDirectRentModalDetails = (payload) => {
  return {
    type: "NFT_RENT_DIRECT_MODAL_DETAILS",
    payload: payload,
  };
};
