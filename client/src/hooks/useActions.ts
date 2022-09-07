import { AppDispatch } from './../store/store';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as tickerActions from '../store/slice/actions';

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    return bindActionCreators({
        ...tickerActions
    }, dispatch);
};
