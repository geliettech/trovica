
import Logo from './logo'
import NavBar from './navBar'

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-16 py-5 flex justify-between items-center relative">
                <Logo />
                <NavBar />
            </div>
        </header>
    )
}

export default Header;
