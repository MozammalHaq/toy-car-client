import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png"


const Footer = () => {
    return (
        <>
            <div className="bg-indigo-600 text-white">
                <footer className="footer p-10 text-base-content">
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-white">ToyCar Industries Ltd.<br />Providing reliable service since 2012</p>
                    </div>
                    <div>
                        <span className="footer-title text-black">Regular Car</span>
                        <a className="link link-hover text-white">Racing Car</a>
                        <a className="link link-hover text-white">Sports Car</a>
                        <a className="link link-hover text-white">Truck</a>
                        <a className="link link-hover text-white">Mini Fire truck</a>
                    </div>
                    <div>
                        <span className="footer-title text-black">Company</span>
                        <Link to='/' className="link link-hover text-white">Home</Link>
                        <Link to='/blogs' className="link link-hover text-white">Blogs</Link>
                        <Link to='/login' className="link link-hover text-white">Login</Link>
                        <Link to='/signup' className="link link-hover text-white">Sign Up</Link>
                    </div>
                    <div>
                        <span className="footer-title text-black">Legal</span>
                        <a className="link link-hover text-white">Terms of use</a>
                        <a className="link link-hover text-white">Privacy policy</a>
                        <a className="link link-hover text-white">Cookie policy</a>
                    </div>
                </footer>
                <div className="text-center p-5 bg-indigo-500">
                    <small>&copy; {new Date().getFullYear()} - All right reserved by Toy Car</small>
                </div>
            </div>
        </>
    );
};

export default Footer;