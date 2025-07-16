export const fetchDestinationList = () => ({ type: 'FETCH_DESTINATIONS' });
export const setDestinations = (data) => ({ type: 'SET_DESTINATIONS', payload: data });

export const submitSearchForm = (data) => ({ type: 'SUBMIT_SEARCH_FORM', payload: data });
export const setHotels = (data) => ({ type: 'SET_HOTELS', payload: data });
export const getHotelsRequest = () => ({ type: 'GET_HOTELS' });

export const setLoading = (status) => ({ type: 'SET_LOADING', payload: status });
export const setFormData = (data) => ({ type: 'SET_FORM_DATA', payload: data });
