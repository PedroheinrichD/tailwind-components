function Estudos2() {
  return (
    <>
      <section
        id="background"
        className="flex flex-col gap-20 p-5 items-center"
      >
        <div className="transition-all duration-1000 w-40 h-24 bg-sky-500 hover:w-full hover:bg-purple-500 flex justify-center items-center">
          <svg
            className="h-10 fill-amber-600 stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div
          id="circle"
          className="border-[#BCD9FB] border-8 border-l-blue-800 w-12 h-12 rounded-[360px] animate-spin"
        ></div>
      </section>

      <section id="card" className="">
        <div
          id="heroCard"
          className="container mx-auto bg-[#1D293B] rounded-2xl flex flex-col justify-center items-center px-10 py-5 gap-2 md:flex-row md:justify-start md:p-0"
        >
          <div>
            <img
              className="w-20 h-20 rounded-full md:rounded-none md:w-40 md:h-40 md:rounded-l-2xl / lg:w-60 lg:h-60"
              src="https://images.unsplash.com/photo-1709148910274-b2cb811c0a2b?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div id="texts">
            <p className="text-white text-center lg:text-xl">
              "Me fale e eu esqueço. Me ensine e eu lembro. Me envolva e eu
              aprendo de verdade."
            </p>
            <div id="text-name" className="text-center">
              <a
                className="text-sky-400 font-semibold hover:animate-pulse"
                href="https://pt.wikipedia.org/wiki/Benjamin_Franklin"
              >
                Benjamin Franklin
              </a>
              <h4 className="text-gray-500">Político, EUA</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Estudos2;
