import { useDispatch, useSelector } from 'react-redux';

import { taskAction } from '../../store/task-slice.jsx';

export default function Header() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.task.data)

    let userName = 'YOUR NAME'
    if (data.length > 0) {
        userName = data[0].name
    }

    // const name = useSelector((state) => state.task.name)
    // useEffect(() => {
    //     dispatch(sendData(data));
    // }, [dispatch]);

    function handleSubmit(event) {

        event.preventDefault()

        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data)
        if (userName === 'YOUR NAME') {
            dispatch(taskAction.add(data))
            return
        }
        data.update = true
        dispatch(taskAction.add(data))

    }

    return <form className='m-16 text-center' onSubmit={handleSubmit}>
        <h1 className='text-3xl font-extrabold items-center text-pink-50'>
            Welcome {userName}
        </h1>
        <p className='mt-8 rounded-lg border-0'>
            <label htmlFor="name" className='mr-4 font-semibold text-white'>Name</label>
            <input className='px-1 py-0 '
                id='name' type='text' name='name' required
            />
            <button className='ml-4 font-serif px-4 bg-red-400 rounded-lg hover:bg-red-500 hover:font-normal active:bg-red-300' >
                Add</button>
            <button className='ml-4 font-serif px-4 bg-red-400 rounded-lg hover:bg-red-500 hover:font-normal active:bg-red-300' >
                Update</button>
        </p>
    </form>
}