import { AppDispatch } from './../Store/store';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as tickerActions from '../Store/Slice/actions';

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    return bindActionCreators({
        ...tickerActions
    }, dispatch);
};
