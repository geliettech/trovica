import React from 'react'
import { Link } from 'react-router'

const HeroSection = () => {
    return (
        <section className="sider-area owl-carousel">
            <div
                className="single-slide bg-gray-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className="position-absolute top-50 start-50 translate-middle slide-content"
                    >
                        <h4>we are halim</h4>
                        <h1>we are digital agency</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Saepe, eveniet sit omnis doloribus assumenda in aliquam
                            molestias hic modi architecto.
                        </p>
                        <Link to="/contact" className="box-btn">Contact us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection