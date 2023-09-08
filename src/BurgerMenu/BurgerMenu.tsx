import { ReactElement, useState, SyntheticEvent, useRef } from 'react'
import "./BurgerMenu.css";
import MenuComponent, { IMenuItemProps, MenuItem } from '../MenuComponent/MenuComponent';
import settings from '../settings';

const BurgerMenu = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const startMenu:Array<IMenuItemProps> = [
        {
            active: true,
            callback: () => {
                console.log('callback');
                setLoginFormActive(true);
            },
            // text: 'Fart',
            // icon: ReactElement,
            // indicator: ReactElement,
            children: <>Login</>,
            // subMenu: IMenuItemProps[],
        },
        {
            active: true,
            // callback: () => void,
            text: 'Poop',
            // icon: ReactElement,
            // indicator: ReactElement,
            children: <>Register</>,
            // subMenu: IMenuItemProps[],
        },
    ]

    const handleLoginSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        fetch(`${settings.api_url}api/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.current?.value,
                password: password.current?.value,
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("token", res.token)
            setLoginFormActive(false);
            setActive(false);
        })
    }

    const handleLogout = (e: SyntheticEvent) => {
        e.preventDefault();
        localStorage.removeItem("token")
        setLoginFormActive(false);
        setActive(false);
    }
    
    const loginMenu = [
        {
            children: (
                <form onSubmit={handleLoginSubmit}>
                <div className='flex flex-col content-start'>
                    <input ref={email} type="text" placeholder='Email address' className='my-2'/>
                    <input ref={password} type="password" placeholder='Password' className='my-2'/>
                    <button className='w-20 grow-0 shrink-0 my-2 bg-yellow-500 p-2' >Login</button>
                </div>
                </form>
            )
        },
    ]
    const loggedInMenu = [
        {
            children: (
                <div className='border-none'>Profile</div>
            )
        },
        {
            children: (
                <div className='border-none'>Lists</div>
            )
        },
        {
            children: (
                <div className='border-none'>Favorites</div>
            )
        },
        {
            children: (
                <div className='border-none' onClick={handleLogout}>Log out</div>
            )
        },
    ]
    const [active, setActive] = useState(false);
    const [loginFormActive, setLoginFormActive] = useState(false);
    const toggleMenu = () => {
        setActive(!active);
    }
    const toggleLoginForm = () => {
        setLoginFormActive(!loginFormActive);
    }
    const burgerClasses = active ? "burger three activated" : "burger three";
    const navClasses = active ? "side-nav active" : "side-nav";
    const token = localStorage.getItem('token');
    console.log('token', token);
    let dropMenu = startMenu;
    if (token === null && !loginFormActive) dropMenu = startMenu;
    else if ( token === null && loginFormActive) dropMenu = loginMenu
    else if (token) dropMenu = loggedInMenu;
    return (
        <>
        <div className={burgerClasses} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={navClasses}>
            <MenuComponent subMenu={dropMenu}>
                <></>
            </MenuComponent>
        </div>
        </>
      )
}


export default BurgerMenu