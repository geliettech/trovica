import Logo from "./logo";
import NavBar from "./navBar";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between relative">
          {/* Logo */}
          <Logo />
          <NavBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
