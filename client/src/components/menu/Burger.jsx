import React from 'react'
import s from '../../styles/menu/burger.module.scss'

const Burger = ({ isActive, setter }) => {
   return (
      <button
         className={`${s.burger} ${isActive ? s.active : ''}`}
         onClick={() => setter(!isActive)}
         data-testid="burgerButton"
      >
         <img
            className={s.menuBtn}
            src="/assets/icons/menu.svg"
            alt=""
            width={36}
         />
         <img
            className={s.crossBtn}
            src="/assets/icons/cross.svg"
            alt=""
            width={36}
         />
      </button>
   )
}

export default Burger
