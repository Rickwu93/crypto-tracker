import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
    //importing the api and using reducer (prev state+action) to reduce new updated state
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});