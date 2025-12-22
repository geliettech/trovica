import { Link } from "react-router";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
    return (
        <section className="z-50 bg-[#83cc61]">
            <div className="container mx-auto px-4 md:px-6 lg:px-16 py-3 flex flex-col gap-3
        sm:flex-row sm:justify-between sm:items-center text-white text-sm font-medium">
                {/* Contact info */}
                <div className="
          flex flex-col gap-2 text-center
          sm:flex-row sm:gap-8 sm:text-left
        ">
                    <Link
                        to="mailto:info@trovica.com"
                        className="flex items-center justify-center sm:justify-start gap-1 hover:opacity-80"
                    >
                        <FaEnvelope />
                        info@trovica.com
                    </Link>

                    <Link
                        to="tel:+2300345567341"
                        className="flex items-center justify-center sm:justify-start gap-2 hover:opacity-80"
                    >
                        <FaPhone />
                        +23 0034 5567 341
                    </Link>
                </div>

                {/* Social icons */}
                <div className="
          flex justify-center gap-5
          sm:gap-6
        ">
                    <Link className="hover:opacity-80" to="#"><FaFacebookF /></Link>
                    <Link className="hover:opacity-80" to="#"><FaXTwitter /></Link>
                    <Link className="hover:opacity-80" to="#"><FaLinkedinIn /></Link>
                    <Link className="hover:opacity-80" to="#"><FaInstagram /></Link>
                </div>
            </div>
        </section>
    );
};

export default TopBar;
