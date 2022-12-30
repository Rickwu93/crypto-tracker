import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
//for the query calls to the url
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

//passing createApi from redux in an object
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', //says what this reducer is for
    //pass in function that accept an object, our api url
    baseQuery: fetchBaseQuery({ baseUrl }),
    //lastly endpoints where you pass in builder function that returns an object
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});