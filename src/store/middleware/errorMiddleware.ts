import { Middleware } from 'redux';
import { isRejected } from '@reduxjs/toolkit';
import { setError } from '../slices/error/errorSlice';

export const errorMiddleware:Middleware= ({dispatch}) => (next) => (action) => {
    if (isRejected(action)) {
        const error = action.error?.message || 'An unexpected error occurred';
        dispatch(setError(error));
      }
      return next(action);
    
}