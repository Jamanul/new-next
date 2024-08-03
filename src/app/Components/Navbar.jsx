"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()
    const session =useSession()
    console.log(session)
    const links =[
        {
            pathName: "/",
            title: "home"
        },
        {
            pathName: "/about",
            title: "about"
        },
        {
            pathName: "/services",
            title: "services"
        },
        {
            pathName: "/blogs",
            title: "blogs"
        },
        {
            pathName: "/categories",
            title: "categories"
        },
        {
            pathName: "/dashboard",
            title: "dashboard"
        },
        {
            pathName:"/post",
            title:"post"
        },
        {
            pathName: "/meals",
            title: "meals"
        }
        
    ]
    const handler = ()=>{
        router.push('/login')
    }
    if(pathName.includes('/dashboard'))
        return <nav className='bg-rose-400 py-4'>Dashboard nav</nav> 
    return (
        <div>
             <nav className="flex justify-between px-4 py-4 bg-red-500">
          <h2>New Next</h2>
          <ul className="flex gap-6 ">
            {
                links?.map(link=><Link className={`${pathName===link.pathName && "text-yellow-500"}  `} key={link.title} href={link.pathName}>{link.title}</Link>)
            }
          </ul>
          {
            session.status==="authenticated" ? <button onClick={()=> signOut()}>log Out</button> : <Link href={"/api/auth/signin"}><button onClick={handler}>Login</button></Link>
          } 
          {
            session.status==="authenticated" ? <div><h2>{session?.data?.user?.type}</h2>
            <Image height={50} width={50} src={session?.data?.user?.image}/>
            </div> : ''
          }
        </nav>
        </div>
    );
};

export default Navbar;