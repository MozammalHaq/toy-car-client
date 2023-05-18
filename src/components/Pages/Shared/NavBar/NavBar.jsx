import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => { console.error(error) })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/addToys'>Add Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <span>{user?.email}</span>
        <button onClick={handleLogout}>Log Out</button>
        <li><Link to='/signUp'>Sign Up</Link></li>
    </>
    return (
        <div className="bg-indigo-600 text-white">
            <div className="navbar max-w-6xl mx-auto lg:px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-indigo-500 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Toy Car</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <img className='h-10 w-10 avatar btn-circle' src={user?.photoURL} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;