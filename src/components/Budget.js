import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, Currency, budget } = useContext(AppContext);
    const checkValue = (val) =>{
        
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(val),
            })
        
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}
                <input
                required= 'required'
                type='number'
                max='20000'
                step='10'
                id='budget'
                value={budget}
                style={{ width: '100px' , size: 2}}
                onChange={(event) => checkValue(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;

