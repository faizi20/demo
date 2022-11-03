export const metMaskWallet = (address, balance) => {
  return {
    type: "metamask/META_MASK_WALLET",
    payload: [
      {
        id: new Date().getTime(),
        address,
        balance,
      },
    ],
  };
};
