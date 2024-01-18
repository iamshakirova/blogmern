import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuthState } from '../redux/slices/authSlice';
import baseQuery from './baseQuery';
import { getProfile } from '../redux/slices/authSlice';


const createRequest = (url, method, data) => ({
    url:url, method, body:data
})

// const setAuthState = (isLoggedIn) => ({
//     type:'SET_AUTH_STATE',
//     payload: isLoggedIn
// })

export const authApi = createApi({
    reducerPath: 'authApi',
    // baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_API_URL}),
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => createRequest('/auth/login', 'POST', user),
            onSuccess:async (data,{dispatch}) => {
                dispatch(setAuthState({isLoggedIn:true, data:{...data.user}}))
            }
        }),
        registerUser: builder.mutation({
            query: (user) => createRequest('/auth/register', 'POST', user),
        }),
        getProfile: builder.query({
            query: (id) => createRequest('/auth/profile', 'GET'),      
        }),
    })
});

export const { useLoginMutation, useRegisterUserMutation, useGetProfileQuery } = authApi;