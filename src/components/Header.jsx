// import HamburgerMenu from './components/HamburgerMenu'
import { slide as Menu } from 'react-burger-menu'

const HamburgerMenu = () => {
    return (
        <Menu>
            <p>login</p><br />
            <p>leaderboard</p>
        </Menu>
    );
}

const Header = () => {
    return(
        <div>
        <HamburgerMenu />
        <div className="header">
            <h1 className='page-title'>Trivia Masters</h1>
        </div>
        </div>
    )
}

export default Header