// const initialState = {
//   address: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))[0].address
//     : [null],
//   // address: null,
//   balance: localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))[0].balance
//     : 0,
// };

// export const metaMaskReducer = (state = initialState, action) => {
//   console.log("Action :", JSON.stringify(action, undefined, 4));
//   if (action.type === "metamask/META_MASK_WALLET") {
//     localStorage.setItem("user", JSON.stringify(action.payload));
//     return {
//       ...state,
//       address: action.payload[0].address,
//       balance: action.payload[0].balance,
//     };
//   } else {
//     return state;
//   }
// };
