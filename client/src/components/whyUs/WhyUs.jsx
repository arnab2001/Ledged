import React from 'react'
import './whyUs.css'
import { Images } from '../../assets'
const WhyUs = () => {
    return (
        <>
            <div className="led__star section__padding" id="whyUs">
                <img src={Images.star1} />
                <img src={Images.star1} />
            </div>
            <div className="led__title" id="whyUs">
                <div className="led__text section__padding">
                    FEATURES
                </div>
            </div>
            <div className="led__whyUs section__padding">
                <div className='star'>
                    <img src={Images.star1} />
                    <img src={Images.star1} />
                </div>
                {
                    features.map((feature, index) => (
                        <>

                            <div className='points section__padding ' key={index}>
                                <div className='point_left'>
                                    <img src={Images.bullet} />
                                </div>
                                <div className='point_right'>
                                    <div className='point_title'>
                                        {feature.title}
                                    </div>
                                    <div className='point_text'>
                                        {feature.description}
                                    </div>
                                </div>
                            </div>
                            <div className='marker section__padding'>
                                <img src={Images.marker} height={60} width={60} />
                            </div>
                        </>
                    ))
                }
                <div className='star'>
                    <img src={Images.star1} />
                    <img src={Images.star1} />
                </div>
            </div>
        </>
    )
}

export default WhyUs