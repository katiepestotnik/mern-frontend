import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Header = () => {
    const {id}= useParams()
    return (<nav>
        <Link to='/'>
            <div>PEOPLE INDEX</div>
        </Link>
    </nav>)
}
export default Header