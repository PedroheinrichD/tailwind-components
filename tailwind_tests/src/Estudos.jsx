import "./index.css";

function Estudos() {
  return (
    <>
      <div className="gap-20 flex flex-col">
        <section id="colors" className="flex flex-col gap-2">
          <h1 className="text-3xl text-red-700">exemplo de cor vermelha</h1>
          <h2 className="text-[#006465]">mudando a cor pelo rgb #006465</h2>
          <h2 className="text-blue-500/50">mudando a opacidade 50%</h2>

          <h2 className="text-amber-50 bg-amber-950">background</h2>
          <h2 className="bg-[#ebd07f]">background com cor personalizada</h2>
          <h2 className="bg-[#ebd07f]/20">background com 20% de opacidade</h2>

          <h2 className="border-2">Adiciona borda</h2>
          <h2 className="border-2 border-amber-300 rounded-[10px]">
            Adiciona borda com cor e radius
          </h2>
          <h2 className="border-2 border-[#eb7f7f]">
            Adiciona borda com cor personalizada
          </h2>

          <h2 className="bg-roxoInsano text-white">
            Criando cor personalizada para varios usos, como se fosse uma var
            que guarda a cor
          </h2>
        </section>

        <section id="ESPAÇAMENTO" className="bg-blue-700 h-36">
          <h1 className="text-white bg-emerald-500 text-center w-1/2 ">50% da largura disponivel w-1/2</h1>
          <h1 className="text-white bg-emerald-900 text-center w-full ">100% da largura disponivel w-full</h1>
          <h1 className=" bg-cyan-900 text-center min-h-20 ">altura min min-h-20</h1>
        </section>

        <section id="ESPAÇAMENTO 2" className="bg-blue-700 h-36">
         <h1 className="text-white w-36 bg-amber-900 truncate">texto qualquer que nao vai couber e vai quebrar</h1>
         <h2 className="text-white w-46 bg-amber-400 line-clamp-3">texto qualquer que nao vai couber e vai quebrar na terceira linha porque é gigantesco.</h2>
        </section>
      </div>
    </>
  );
}

export default Estudos;
