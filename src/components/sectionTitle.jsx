const SectionTitle = ({titleQuest, title, desc}) => {
  return (
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center mb-16 gap-6 relative">
          <div className="xl:text-right">
            <h4 className="text-3xl font-semibold uppercase text-gray-700">
              <span className="block text-sm text-teal-600 mb-2">
                {titleQuest}
              </span>
              {title}
            </h4>
          </div>
          {/* Vertical line */}
          <span className="hidden lg:block absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-teal-600" />

          {/* Horizontal line */}
          <span className="hidden lg:block absolute bottom-0 left-1/2 h-px w-10 -translate-x-1/2 bg-teal-600" />
          <div>
            <p className="blackText__paragraph">
             {desc}
            </p>
          </div>
        </div>
  );
};

export default SectionTitle;
