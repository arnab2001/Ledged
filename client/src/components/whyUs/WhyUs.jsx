import React from 'react'
import './whyUs.css'
import { BsFileEarmarkLock } from "react-icons/bs";
import Lottie from 'lottie-react'
import About from '../../assets/about__animation.json'
import { BiUserPlus, BiLogIn } from "react-icons/bi";
const WhyUs = () => {
    return (
        <>
            <div className="led__bg">


                <div className="led__whyUs section__padding">

                    <div className="led__whyUs_header">
                        Why Us?
                    </div>
                    <div className="led__whyUs_content">
                        <div className="led__whyUs_content-right">
                            <div className="led__whyUs_content-right-animation " >
                                <Lottie animationData={About} />

                            </div>
                        </div>
                        <div className="led__whyUs_content-left">
                            <div className="features">
                                <h1>Security & Immutability</h1>
                                <div className="feature-description">
                                    <div className="feature-icon">
                                        <BsFileEarmarkLock className='icon' />
                                    </div>
                                    <div className="feature-text">
                                        <p> Come and experience a variety of drinks along with a great set of people to talk and interact with </p>
                                    </div>
                                </div>
                                <h1>User Customisable Ledgers</h1>
                                <div className="feature-description">
                                    <div className="feature-icon">
                                        <BiUserPlus className='icon' />
                                    </div>
                                    <div className="feature-text">
                                        <p> Worried about Bookings/Availability ? Guess what ? Our 24 hours Online booking portal just solves the issue ! </p>
                                    </div>
                                </div>
                                <h1>Login & Authentication</h1>
                                <div className="feature-description">
                                    <div className="feature-icon">
                                        <BiLogIn className='icon' />
                                    </div>
                                    <div className="feature-text">
                                        <p> Our budget friendly menu makes sure we do not hit your pockets that hard </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs