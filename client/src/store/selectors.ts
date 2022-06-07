import { RootState } from '../react-app-env';

export const getTickersSelector = (state: RootState) => state.tickersList;