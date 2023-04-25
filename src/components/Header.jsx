import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar flex justify-center bg-blue-200">
            <Link className="btn btn-ghost normal-case text-xl" to={`/`}>Home</Link>

            {
                user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className='btn btn-primary'>sign out</button>
                </> : <>
                    <Link className="btn btn-ghost normal-case text-xl" to={`/login`}>Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to={`/register`}>Register</Link>
                </>
            }
        </div>
    );
};

export default Header;