import { Sling as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isActive = (path) => {
    if (location.pathname === path) {
      return true;
    }
    const navItem = navLinks.find(link => link.to === path);
    if (navItem && navItem.dropdown) {
      return navItem.dropdown.some(item => location.pathname === item.to);
    }
    return false;
  };
  const navLinks = [
    { to: "/", label: "Home" },
    {
      to: "/About",
      label: "About Us",
      dropdown: [
        {
          to: "/About",
          label: "About the Conference ",
        },
        {
          to: "/Scope",
          label: "Scope of the Conference",
        },
        {
          to: "/Organizing",
          label: "Organizing Committee",
        },
        {
          to: "/Editorial-board",
          label: "Editorial Board",
        },
      ],
    },
    {
      to: " ",
      label: "Author Desk",
      dropdown: [
        {
          to: "/Conference-Tracks",
          label: "Conference tracks",
        },
        {
          to: "/KeyDates",
          label: "Key Dates",
        },
        // {
        //   to: "/key-dates",
        //   label: "Registration Details",
        // },
        {
          to: "/PaperSubmission",
          label: "New Paper Submission",
        },
      ],
    },
    { to: "/Contact-Us", label: "Contact" },
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  useEffect;

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };
  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <>
      <section className=" bg-gradient-to-r from-[#093FB4] to-[#093FB4]">
        <div className="max-w-[80rem] mx-auto md:px-5 px-3 md:py-1 py-2 bg-[#093FB4]-to-r from-[#093FB4] to-[#093FB4] ">
          <div className="flex items-center justify-between lg:gap-0  gap-5  ">
            <Link to='/'>
              <div className="lg:hidden block">
                <img className='w-32 h-12 object-contain ' src="/image/Group 1 (1).png" alt="" />
                {/* <div className="   lg:hidden  block  text-white font-bold">ICIACSE</div> */}
              </div>
            </Link>
            <div className={`lg:hidden block  ${menuOpen ? "z-50" : ""}`}>
              <Hamburger toggled={menuOpen} color={menuOpen ? "#032530" : "#fff"} direction='right' size={20} toggle={setMenuOpen} />
            </div>
          </div>
        </div>
      </section>
      {/* <div className={` ${menuOpen ? "" : ""}`}>
        {menuOpen && (
          <div className=" flex flex-col items-center space-y-4 w-full text-center bg-white py-2 shadow-lg">
            {navLinks.map(
              (link) =>
                !link.desktopOnly && (
                  <div key={link.to} to={link.to} className="relative   ">
                    <Link onClick={() =>  link.dropdown && toggleDropdown(link.label) }
                      className="text-black " >
                      {link.label}
                    </Link>
                    {link.dropdown && aboutDropDownOpen === link.label && (
                      <div className="     mt-3   bg-white   text-black border-gray-200 z-10 ">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block px-4 py-2 text-black hover:bg-gray-100"
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

            )}
          </div>
        )}
      </div> */}
      <section className={` fixed top-0 right-0 h-full w-64 z-40 py-3  ${!isHome ? "bg-[#093FB4] " : ""}  ${scrolled ? "bg-[#093FB4] " : " "} ${menuOpen ? "translate-x-0 duration-300 bg-[#093FB4]" : "translate-x-full duration-300"} lg:block lg:relative lg:w-auto lg:translate-x-0`} >
        <header className="max-w-[90rem] mx-auto md:px-5 px-2 h-full   w-full">
          <div className="lg:flex lg:justify-between justify-center items-center px-2 py-1">
            <Link to='/'>
              <img className='lg:w-40 w-40 md:block hidden h-10 ' src="/image/Group 1.png" alt="LOGO" />
              {/* <div className="lg:block hidden  text-white  font-bold text-3xl">ICIACSE</div> */}
            </Link>
            <nav ref={dropdownRef}>
              <div className={`lg:space-x-3 lg:block  mx-auto  lg:pt-0 pt-20  ${menuOpen ? "flex flex-col space-y-4" : ""}`}>
                {navLinks.map((link) => (
                  <div key={link.to} className=" inline-block group relative"
                    // onMouseEnter={() => handleMouseEnter(link.label)}
                    // onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                    onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}>
                    <Link to={link.to} className={`py-2 flex lg:w-[144px] w-full transition-all duration-300 ease-in-out lg:text-[20px] md:text-sm justify-center items-center gap-2   font-semibold  lg:text-[#032530]   text-[#032530] ${isActive(link.to) || hoveredCategory === link.label ? 'md:border-t-0 duration-300 ' : ''} `}
                      onClick={(e) => { if (link.dropdown) { e.preventDefault(); setHoveredCategory((prev) => (prev === link.label ? null : link.label)); } else { setMenuOpen(false); } }}   >
                      {link.label}
                      {link.dropdown && (<i className={`fi fi-rs-angle-small-down text-lg flex items-center  transition-all text-[#032530] font-bold  duration-300 ease-in-out  rounded-full ${hoveredCategory === link.label ? '   rotate-180 duration-100' : ' '} `}></i>)}
                    </Link>
                    {hoveredCategory === link.label && link.dropdown && (
                      <>
                        <div className="lg:absolute left-0 top-full lg:w-[260px] w-full   bg-[#093FB4] transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top  grid md:grid-cols-1 md:p-0.5 z-10">
                          {link.dropdown.map((dropdownlink) => (
                            <>
                                <Link key={dropdownlink.to} to={dropdownlink.to} className="block md:px-4 px-4 py-2   text-white md:text-start text-center md:bg-[#093FB4] bg-[#093FB4] " onClick={() => { setHoveredCategory(null); setMenuOpen(false); }} >
                                  {dropdownlink.label}
                                </Link>
                            </>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;





// import React from 'react'
// import { Link } from 'react-router-dom'




// export default function Header() {
//     return (
//         <>
//             <div className=' absolute'>
//                 <div className='fixed top-0 right-0 left-0 z-10 '>
//                     <div className='flex '>
//                         <div className=' relative z-5 w-full' style={{ clipPath: 'polygon(0% 0, 100% 0, 90% 100%, 0 100%)' }}>
//                             <div className='bg-[#B2C7F6] w-full '
//                             >
//                                 <div className=' text-[#093FB4] text-4xl font-bold py-5 px-20'>ICSSDDA</div>
//                             </div>
//                         </div>

//                         <div className='bg-[#093FB4] w-full py-5 space-x-20 text-[#F5F5F5] flex justify-end '>
//                             <Link>Home</Link>
//                             <Link>AboutUs</Link>
//                             <Link>Author's Desk</Link>
//                             <Link>Contact Us</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <div className='bg-[#093FB4] grid grid-cols-2 text-2xl h-20' >
//                     <div className='bg-[#B2C7F6] text-3xl font-bold' style={{ clipPath: 'polygon(0% 0, 100% 0, 95% 100%, 0 100%)' }} >
//                         <h1 className='text-[#093FB4] pt-5 mx-5' >ICSSDDA</h1>
//                     </div>
//                     <div className="hidden lg:block ">
//                         <div className='flex justify-center items-center gap-10 '>
//                             <Link className='text-[#F5F5F5]'><p className="">Home</p></Link>
//                             <Link className='text-[#F5F5F5]'><p className="">AboutUs</p></Link>
//                             <Link className='text-[#F5F5F5]'><p className="">Author's Desk</p></Link>
//                             <Link className='text-[#F5F5F5]'><p className="">Contact Us</p></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>

//     )
// }

