
import Logo from './logo'
import NavBar from './navBar'

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex items-center justify-between h-16 relative">
                    <Logo />
                    <NavBar />
                </div>
            </div>
        </header>
    )
}

export default Header;
