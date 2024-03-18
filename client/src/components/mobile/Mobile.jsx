import React from 'react'
import './mobile.css'
import { Images } from '../../assets'
const Mobile = () => {
    return (
        <>

            <div className='mobile'>
                <div className='star1'>
                    <img src={Images.star1} height={50} width={50} />
                    <img src={Images.star1} height={50} width={50} />
                </div>
                <span className='text'>Please Open</span>
                <span className='mobile_title'>LEDGED</span>
                <span className='text'>In Desktop Mode</span>
                <div className='star1'>
                    <img src={Images.star1} height={50} width={50} />
                    <img src={Images.star1} height={50} width={50} />

                </div>
            </div>
        </>
    )
}

export default Mobile