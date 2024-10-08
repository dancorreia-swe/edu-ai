const Features = () => {
  return (
    <div id="SectionWork">
      <section className="relative mx-auto mt-32 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="relative p-6 md:p-16">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl">
                Instruções inteiramente adaptáveis ​​para atender às suas
                necessidades exclusivas
              </h2>
              {/* Tab Navs */}
              <nav
                className="mt-5 grid gap-4 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hs-tab-active:bg-slate-900 active rounded-xl p-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 md:p-5"
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 mt-2 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200 md:h-7 md:w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    <span className="ml-6 grow">
                      <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Ferramentas avançadas
                      </span>
                      <span className="dark:hs-tab-active:text-gray-200 mt-1 block text-gray-800 dark:text-gray-200">
                        Use bibliotecas Preline cuidadosamente pensadas e
                        automatizadas para gerenciar seus estudos.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hs-tab-active:bg-slate-900 rounded-xl p-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 md:p-5"
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 mt-2 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200 md:h-7 md:w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                      />
                    </svg>
                    <span className="ml-6 grow">
                      <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Painéis inteligentes
                      </span>
                      <span className="dark:hs-tab-active:text-gray-200 mt-1 block text-gray-800 dark:text-gray-200">
                        Quickly Preline sample components, copy-paste codes, and
                        start right off.
                        {/* #TODO  translate these words into Portuguese*/}
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:hs-tab-active:bg-slate-900 rounded-xl p-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 md:p-5"
                  id="tabs-with-card-item-3"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 mt-2 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200 md:h-7 md:w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                    </svg>
                    <span className="ml-6 grow">
                      <span className="hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 block text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Funcionalidades avançadas
                      </span>
                      <span className="dark:hs-tab-active:text-gray-200 mt-1 block text-gray-800 dark:text-gray-200">
                        Reduza o tempo e o esforço dedicados à pesquisa sobre
                        determinado assunto e obtenha resultados
                        instantaneamente.
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
              {/* End Tab Navs */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  ></div>
                  <div
                    id="tabs-with-card-2"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  ></div>
                  <div
                    id="tabs-with-card-3"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  ></div>
                </div>
                {/* End Tab Content */}
                {/* SVG Element */}
                <div className="absolute right-0 top-0 hidden translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="h-auto w-16 text-orange-500"
                    width={121}
                    height={135}
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Background Color */}
          <div className="absolute inset-0 grid h-full w-full grid-cols-12">
            <div className="col-span-full h-5/6 w-full rounded-xl bg-gray-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full" />
          </div>
          {/* End Background Color */}
        </div>
      </section>
    </div>
  );
};

export default Features;
