import services from "../data/services";
import SectionHeader from "./SectionHeader";

const ServicesCard = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        {/* ======================= Services Title ==================== */}
        <SectionHeader
          quest="Who We Are?"
          title="Our Services"
          desc=" We provide creative digital solutions designed to help businesses
              grow, engage users, and build strong online identities."
        />
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-sm  hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center items-center mb-5">
                  <Icon className="text-5xl bg-teal-600 text-white rounded-full p-3" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 capitalize text-gray-700">
                  {service.title}
                </h4>
                <p className="blackText__paragraph">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
