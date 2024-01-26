 

// const temporalAsycn = () => {
//    return new Promise((resolve) => {
//       setTimeout( () => {
//       resolve(true);
//       }, 2000 );
//    })
// }

import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."

const navItems = [
   { path: '/about', text: 'About' },
   { path: '/pricing', text: 'Pricing' },
   { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {

   // Se ve en consola, no en navegador 
   //todo por defecto es server component
   //console.log('NavBar Creado');

   // await temporalAsycn();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
         <HomeIcon  className="mr-2"/>
         <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
         navItems.map( navItem => (

            // <Link key={ navItem.path } className="mr-2" href={ navItem.path }>{ navItem.text}</Link>
            <ActiveLink key={ navItem.path } { ...navItem } />
         ))
      }

      {/* <Link className="mr-2" href="/pricing">Pricing</Link>
      <Link className="mr-2" href="/contact">Contact</Link> */}
    </nav>
  )
}
