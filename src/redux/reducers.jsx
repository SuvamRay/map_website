const initialState = {
    regionData: null,
    nightMode: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_REGION_DATA':
        return {
          ...state,
          regionData: action.payload,
        };
      case 'TOGGLE_NIGHT_MODE':
        return {
          ...state,
          nightMode: !state.nightMode,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
  