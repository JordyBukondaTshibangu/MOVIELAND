
import { useDispatch as useReduxDispatch } from 'react-redux';
import type { AppDispatch } from './store';

// Use throughout your application instead of useDispatch
export const useDispatch = () => useReduxDispatch<AppDispatch>();
