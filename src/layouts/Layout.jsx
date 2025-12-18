import TopBar from '../components/topBar'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <TopBar />
            <Header />
            {/* <section className='py-[100px] min-h-[100vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</section> */}
            <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</section>
            <Footer />
        </div>
    )
}

export default Layout
