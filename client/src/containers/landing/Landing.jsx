import React, { useContext } from 'react'
import { Navbar, Header, LedNav, WhyUs, Footer, Loading } from '../../components'
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
      <Header />
      <WhyUs />
    </>

  )
}

export default Landing