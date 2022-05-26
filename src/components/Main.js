import {Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
const Main = () => {
    return (
        <div>
            <Routes>
                <Index />
                <Show />
            </Routes>
        </div>
    )
}
export default Main