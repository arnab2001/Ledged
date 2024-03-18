import React from 'react'
import { Images } from '../../assets'
import './loading.css'
const Loading = () => {
    return (
        <>
            <div className='loading'>
                <img className="loading__image" src={Images.loading} height={100} width={100} />
                <h1 className='loading__text'>LOADING</h1>
            </div>
        </>
    )
}

export default Loading