export default function Process() {
  const style = {
    width: "calc(100% - 32px)",
    left: "calc(50% + 48px)",
    top: "32px",
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">
              Built for every skill level
            </h2>
            <p className="text-xl text-gray-500" data-aos="fade-up" data-aos-delay="200">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-400 hidden md:block"
                style={{ width: "calc(100% - 32px)", left: "calc(50% + 48px)", top: "32px" }}
                data-aos="fade-in"
                data-aos-delay="200"
              ></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Registration</h4>
              <p className="text-lg text-gray-500 text-center">Tell us more about your skills that you already acquired and the technology you want to learn.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-400 hidden md:block"
                style={{ width: "calc(100% - 32px)", left: "calc(50% + 48px)", top: "32px" }}
                data-aos="fade-in"
                data-aos-delay="400"
              ></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g fill="none" fillRule="evenodd">
                  <path
                    className="stroke-current text-purple-300"
                    d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M36 32l-4-3-4 3V22h8z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Matching</h4>
              <p className="text-lg text-gray-500 text-center">We will match you with other students around your skill level so that you grow together.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Start</h4>
              <p className="text-lg text-gray-500 text-center">We will provide you with all setup instruction need to kick-off your project in record time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
