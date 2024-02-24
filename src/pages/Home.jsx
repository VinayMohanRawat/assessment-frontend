import { Link } from "react-router-dom"

export default function HomePage() {

    return <div className="flex justify-center space-x-8 mt-16">
        <button className="px-10 py-4 rounded-3xl bg-slate-200 font-bold hover:bg-yellow-300 hover:text-purple-950 hover:font-bold">
            <Link to='/task_1'>Task 1 (UI Task)</Link>
        </button>
        <button className="px-10 py-4 rounded-3xl bg-slate-200 font-bold hover:bg-yellow-300 hover:text-purple-950 hover:font-bold">
            <Link to='task_2'>Task 2 (API Task)</Link>
        </button>
    </div>
}