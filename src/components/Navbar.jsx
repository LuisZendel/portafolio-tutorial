import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { styles } from "./../styles"
import { navLinks } from "../constants"
import { logo, menu, close } from "./../assets"
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  useEffect(()=>{},[])
  return (
    <nav
      className={`${styles.paddingX} w-full flex
    items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center mx-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt="logo"
            className="w-9 h-9 object-contain" />
          <p
            className="text-white text-[18px] font-bold cursor-pointer flex">Luis Zendel &nbsp; <span
              className="hidden sm:block">| Portafolio </span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${active === link.title ?
                  "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => { setActive(link.title) }}
              >
                <a href={`#${link.id}`} >{link.title}</a>
              </li>
            )
          })}
        </ul>
        <div
          className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
            onClick={() => {
              setToggle(!toggle)
            }}
            className="w-[18px] h-[18px] cursor-pointer" />
          <div
            className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 rounded-xl z-0 min-w-[140px] mx-4 my-2`}>
            <ul className="list-none flex flex-col gap-4 items-star justify-end">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${active === link.title ?
                      "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => { 
                      setActive(link.title) 
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`#${link.id}`} >{link.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar