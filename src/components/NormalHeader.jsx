import { NavBarComponent } from "./NavBarComponent";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

export function NormalHeader() {
    const location = useLocation();
    const [cookies, setCookie, removeCookie] = useCookies();
    function isActive(path) {
        return location.pathname === path ? 'relative after:absolute after:w-[60%] after:h-[2px] after:bg-green-400 after:left-0 after:bottom-[-3px]' : '';
    }

    function LoginButton() {
        return (
            <Link to="login" className=" bg-green-500 px-6 rounded text-white py-1 font-semibold">
                Login
            </Link>
        )
    }
    function LogoutButton() {
        const handleLogout = (e) => {
            removeCookie("tokenId");
            refreshPage();
        };

        return (
            <div onClick={handleLogout} className="bg-orange-500 px-6 rounded text-white py-1 font-semibold" >
                Logout
            </div>
        );
    }
    function refreshPage() {
        window.location.reload(); // This refreshes the page
    }
    return (
        <div className='flex justify-between p-2 px-4 bg-gray-100'>
            <Link to="/">
                <div>
                    <img src={'/logo.png'} alt="Logo" className="w-48 md:w-52 h-auto" />
                </div>
            </Link>
            <ul data-aos="zoom-in" data-aos-delay="800" className="hidden md:flex items-center gap-8 font-semibold">
                <li>About</li>
                <li>Services</li>
                <li>Feedback</li>
                <li>Contact Us</li>
                <button>
                    {cookies.tokenId == undefined ? <LoginButton /> : <LogoutButton />}
                </button>
            </ul>
            <div className='md:hidden block'>
                <NavBarComponent />
            </div>
        </div>
    )
}