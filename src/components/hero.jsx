import { Link } from 'react-router'

const Hero = () => {
    return (
        <section className="bg-[url('img/slider/slide-1.jpg')] bg-cover bg-center h-screen relative">
            <div className="absolute inset-0 bg-gray-950 opacity-30"></div>
            <div className="relative z-10 grid gap-4">
                <h4 className=''>we are Trovica</h4>
                <h1 className='text-3xl text-white font-bold'>we are digital agency</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, eveniet sit omnis doloribus assumenda in aliquam
                    molestias hic modi architecto.
                </p>
                <Link to="/contact" className="box-btn">Contact us</Link>
            </div>
        </section>


// .slide-content h4 {
//   text-transform: capitalize;
//   position: relative;
//   font-size: 1.5rem;
//   padding-bottom: 15px;
// }
// .slide-content h1 {
//   text-transform: capitalize;
//   font-weight: 700;
//   font-size: 50px;
// }
/* all buttons styling (start) */
// .box-btn {
//   display: inline-block;
//   text-decoration: none;
//   color: #fff;
//   text-transform: uppercase;
//   background-color: #635cdb;
//   font-weight: 600;
//   padding: 10px 30px;
//   transition: background-color 0.3s ease, transform 0.3s ease;
// }
    )
}

export default Hero