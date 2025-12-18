import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/heroSection'
import TopBar from '../components/topBar'
// import Layout from '../layouts/Layout'

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      {/* <section className='py-[100px] min-h-[100vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</section> */}
      {/* <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</section> */}
      <Footer />
    </>

  )
}

export default Home