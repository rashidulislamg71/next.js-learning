"use client"


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavBar() {

    const pathName = usePathname();


    const activePath = (path) => {
        return pathName === path ? "text-blue-600 font-bold" : "";
    }

    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className={activePath("/")} ><Link href={"/"}>Home</Link></li>
                        <li className={activePath("/posts")} ><Link href={"/posts"} >Post</Link></li>
                        <li className={activePath("/products")} ><Link href={"/products"} >Products</Link></li>
                        <li className={activePath("/books")} ><Link href={"/books"} >Books</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar