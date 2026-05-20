import "./index.css";

function Estudos() {
  return (
    <>
      <div className="gap-10 flex flex-col">
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

        <section id="BORDA" className=" gap-8 flex justify-center p-5 bg-black">
          <div className="w-16 h-16 bg-gray-700 rounded-xl border-l-blue-500 border-t-red-500 border-r-green-500"></div>
          <div className="w-16 h-16 bg-gray-700 rounded-xl border-t border-amber-500 "></div>
          <div className="w-16 h-16 bg-gray-700 rounded-xl border-r border-amber-500"></div>
          <div className="w-16 h-16 bg-gray-700 rounded-xl border-b border-amber-500"></div>
          <div className="w-16 h-16 bg-gray-700 rounded-xl border-l border-amber-500"></div>
        </section>

        <section id="butoes" className="flex justify-center">
          <button className="text-white bg-indigo-600 rounded-md ml-8 px-6 py-2 cursor-pointer border-none">Clique Aqui</button>
        </section>

        <div className="bg-gray-900 p-20">
          <section id="aviso" className="flex justify-center items-center rounded-md ml-2 gap-1 bg-[#FCF8C2] w-80 py-2 border-l-2 border-l-amber-300">
            <h2 className="text-amber-700">Você não tem mais acesso.</h2>
            <h2 className="text-amber-700 underline cursor-pointer">Faça upgrade!</h2>
         </section>
        </div>

        <section className="bg-gray-900 p-20">
          <div id="card" className="bg-white py-8 px-5 rounded-lg flex flex-col gap-2">
            <div id="perfil" className="flex">
             <img className="h-16 rounded-[360px]" src="/perfil.png" alt="" />
              <div id="textos" className="ml-2 flex flex-col justify-center">
                <h4 className="font-medium">João Silva</h4>
                <p className="text-gray-400 line-clamp-2" >Te mandou um convite!</p>
              </div>
            </div>

              <div id="botoes" className="flex gap-2">
                <button className="bg-blue-600 text-white p-2 rounded-md">Aceitar</button>
                <button className="border border-gray-400  p-2 rounded-md">Negar</button>
              </div>
          </div>
        </section>


        <section className="bg-gray-900 p-20 flex flex-col items-center gap-8">
            <h1 className="text-3xl text-white text-center font-bold">Sistema de login</h1>
            <div>
              <p className="text-white mb-1">Endereço de Email</p>
              <input type="text" className="w-80 h-10 outline outline-gray-600 bg-[#1F2936] rounded-md"/>
            </div>        
            <div>
              <p className="text-white mb-1">Senha</p>
              <input type="text" className="w-80 h-10 outline outline-gray-600 bg-[#1F2936] rounded-md"/>
            </div>        

            <button className="bg-[#ECB303] font-bold text-white p-2 w-80 rounded-md">Entrar</button>
        
            <div className="flex gap-1">
              <p className="text-gray-500">não é membro?</p>
              <a className="text-amber-400" href="#">Faça seu cadastro agora</a>
            </div>
        
        </section>


        
      </div>
    </>
  );
}

export default Estudos;
