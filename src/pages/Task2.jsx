import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Task1_Header.jsx';
import { sendData } from '../../store/task-action.jsx';



export default function Task2() {
    const data = useSelector(state => state.task)
    console.log(data)
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.change === true) {
            dispatch(sendData(data));
        }
    }, [data, dispatch]);


    return <>
        <Header />
        {/* <div className='mt-24 text-center'>
            <span className='bg-gray-300 px-4 py-3 mt-8 rounded-xl font-sans font-semibold'>
                API Count (0)
            </span>
        </div> */}


    </>
}