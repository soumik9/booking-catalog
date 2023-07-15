import { linkTypes } from '../../../../config/types'
import { Link } from 'react-router-dom';

const NavItem = ({ item }: { item: linkTypes }) => {
    return (
        <Link to={item.url} className='text-primary-100 hover:text-white trans'>
            {item.title}
        </Link>
    )
}

export default NavItem