import { FC } from 'react'
import PokemonLogo from "../assets/Home/Light/Dark/image 29.png"
const Header:FC = () => {
  return (
    <div className='h-12 bg-[#252A3E] py-2'
    >
        <img className={`w-[97px] h-[35px] object-contain ml-6`} src={PokemonLogo}/>
    </div>
  )
}

export default Header