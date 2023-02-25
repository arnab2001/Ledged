import React from 'react'
import avatar from '../../assets/user.jpg';
import Animate from '../../assets/avatar__animation.json'
import logo from '../../assets/logo.png'
import './avatar.css'
import Lottie from 'lottie-react'
import { Footer } from '../../components';
const Avatar = () => {
  return (
    <>
        <div className='led__avatar section__padding'>
            <div className='led__left'>
                <div className='led__left__upper'>
                
                <div className='led__left-logo'>
                    <img className='led__left-image' src={logo}/>
                </div>
                <div className='led__left-logo__1'>
                <Lottie animationData={Animate} width={10} height={10} />
                </div>
                </div>
                <div className="led__header-content">
                    <h1 className="gradient__text">LEDGED</h1>
                </div>

            </div>
            <div className='led__right'>
                <div className='led__right-logo'>
                    <img className='led__right-image'src={avatar}/>
                </div>
                <div className='led__right-username'>
                    <p>bneogi102002</p>
                </div>
                <div className="led__right-content__input">
        <button className='led__right-content__button'>Past Ledgers</button>
        <button className='led__right-content__button'>Create New Ledger</button>
      </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Avatar