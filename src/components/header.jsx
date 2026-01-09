// import Logo from "./logo";
// import NavBar from "./navBar";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
//       <div className="container flex justify-between items-center relative">
//         <Logo />
//         <NavBar />
//       </div>
//     </header>
//   );
// };

// export default Header;

import Logo from './logo'
import NavBar from './navBar'

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container flex justify-between items-center relative">
                <Logo />
                <NavBar />
            </div>
        </header>
    )
}

export default Header;