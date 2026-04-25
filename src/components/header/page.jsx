import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/posts"} >Post</Link></li>
                        <li><Link href={"/products"} >Products</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar