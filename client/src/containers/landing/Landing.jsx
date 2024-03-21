import React, { useContext } from 'react'
import { Header, WhyUs, Loading } from '../../components'
import { LoadingContext } from '../../context/LoadingContext';



const Landing = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  return (
    <>
      {
        loading ? (
          <>
            <Loading />
          </>
        )
          :
          (
            <>
              <Header />
              <WhyUs />
            </>
          )
      }
    </>

  )
}

export default Landing