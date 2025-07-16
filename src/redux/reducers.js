const initialState = {
  destinations: [],
  hotels: [],
  isLoading: false,
  formData: {}
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESTINATIONS':
      return { ...state, destinations: action.payload };
    case 'SET_HOTELS':
      return { ...state, hotels: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_FORM_DATA':
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export default { booking: bookingReducer };
