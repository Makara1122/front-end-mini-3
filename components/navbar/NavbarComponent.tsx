"use client";
import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent,
	NavbarItem, DropdownItem, 
	DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";


export default function NavbarComponent() {
	const {data:session} = useSession()
	const path = usePathname()
	return (
	  <Navbar>
		<NavbarBrand>
	
		  <p className="font-bold text-inherit ml-3">Makara Shop</p>
		</NavbarBrand>
  
		<NavbarContent className="hidden sm:flex gap-4" justify="center">
		  <NavbarItem>
		  <Link className={`link ${path === '/' ? 'text-blue-500' : ''}`} href="/">
			  Home
			</Link>
		  </NavbarItem>
		  <NavbarItem >
			<Link className={`link ${path === '/about' ? 'text-blue-500' : ''} `} href="/about"> 
			  About
			</Link>
		  </NavbarItem>
		  <NavbarItem>
		  <Link className={`link ${path === '/policy' ? 'text-blue-500' : ''} `} href="/service">
			  Policy
			</Link>
		  </NavbarItem>
  
		  <NavbarItem>
		  <Link className={`link ${path === '/dashboard' ? 'text-blue-500' : ''} `} href="/dashboard">
			  My Store
			</Link>
		  </NavbarItem>
  
		</NavbarContent>
  
		<NavbarContent as="div" justify="end">
		  <Dropdown placement="bottom-end">
			<DropdownTrigger>
			  <Avatar
				isBordered
				as="button"
				className="transition-transform"
				color="secondary"
				name={session?.user?.name as string}
				size="sm"
				src=""
			  />
			</DropdownTrigger>
			<DropdownMenu aria-label="Profile Actions" variant="flat">
			  <DropdownItem key="profile" className="h-14 gap-2">
				<p className="font-semibold">Signed in as</p>
				<p className="font-semibold">{session?.user?.email}</p>
			  </DropdownItem>
			  <DropdownItem className="text-red-500" onClick={() => signOut()} key="logout" color="danger">
				Log Out
			  </DropdownItem>
			  <DropdownItem className="text-green-500" onClick={() => signOut()} key="logout" color="danger">
				Sign in
			  </DropdownItem>
			  <DropdownItem className="text-blue-500" onClick={() => signOut()} key="logout" color="danger">
				Register
			  </DropdownItem>
			</DropdownMenu>
		  </Dropdown>
		</NavbarContent>
	  </Navbar>
	);
  }