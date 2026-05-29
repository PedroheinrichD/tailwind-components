function Estudos2() {
  return (
    <>
      <section id="Grid-Responsivo" className="container mx-auto">
        <div id="house" className="grid p-2 gap-2 md:grid-cols-3 md:grid-rows-2">
          <div className="md:col-span-2 row-span-2 bg-[url(https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww)] bg-cover bg-center h-64 md:h-full bg-bg-no-repeat"></div>
          <div className="bg-[url(https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-64 bg-bg-no-repeat"></div>
          <div className="md:col-start-3 bg-[url(https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-64 bg-bg-no-repeat"></div>
        </div>
        <div id="information" className="p-2">
          <h1 className="font-semibold text-3xl mb-3">Título da casa</h1>
          <ul id="badges" className="flex gap-3 ">
            <li className="bg-green-600 text-white rounded-full px-3 py-0.5">Campo</li>
            <li className="bg-green-600 text-white rounded-full px-3 py-0.5">Moderno</li>
            <li className="bg-green-600 text-white rounded-full px-3 py-0.5">Piscina</li>
          </ul>
        </div>
        
      </section>
    </>
  );
}

export default Estudos2;
