const HeadingSection = () => {
  return (
    <section className="py-6">
      <div className="container flex justify-end">
        {/* LEFT GROUP (heading + line) */}
        <div className="flex items-center">
          {/* Text */}
          <div className="text-right">
            <p className="blackText__paragraph block capitalize font-normal text-base">
              Who We Are?
            </p>
            <h2 className="capitalize font-bold text-3xl text-gray-700">
              About Us
            </h2>
          </div>

          {/* Line (pseudo elements) */}
          <div
            className="
              relative
              h-20
              w-10
              self-center

              before:content-['']
              before:absolute
              before:top-0
              before:left-1/2
              before:h-full
              before:w-px
              before:-translate-x-1/2
              before:bg-teal-600

              after:content-['']
              after:absolute
              after:bottom-0
              after:left-1/2
              after:h-px
              after:w-10
              after:-translate-x-1/2
              after:bg-teal-600
            "
          />
        </div>

        {/* RIGHT TEXT */}
        <p className="max-w-lg blackText__paragraph font-normal self-center">
          Trovica is a modern digital agency focused on building meaningful and
          user-centered digital experiences.
        </p>
      </div>
    </section>
  );
};

export default HeadingSection;
