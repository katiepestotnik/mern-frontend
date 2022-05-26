import {Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/people/:id" element={<Show/>}/>
            </Routes>
        </div>
    )
}
export default Main