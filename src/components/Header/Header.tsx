'use client'
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import HeaderFirst from "./HeaderFirst/HeaderFirst";
import HeaderSecond from "./HeaderSecond/HeaderSecond";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <HeaderFirst />
      <HeaderSecond />
      <BurgerMenu toggleMenu={toggleMobileMenu} isMenuOpen={isMobileMenuOpen}/>
    </header>
  );
}