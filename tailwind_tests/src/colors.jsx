import './index.css'

function Colors() {
  return (
    <>
      <section id="colors" className="flex flex-col gap-2">
        <h1 className="text-3xl text-red-700">exemplo de cor vermelha</h1>
        <h2 className="text-[#006465]">mudando a cor pelo rgb #006465</h2>
        <h2 className="text-blue-500/50">mudando a opacidade 50%</h2>

        <h2 className="text-amber-50 bg-amber-950">background</h2>
        <h2 className="bg-[#ebd07f]">background com cor personalizada</h2>
        <h2 className="bg-[#ebd07f]/20">background com 20% de opacidade</h2>

        <h2 className="border-2">Adiciona borda</h2>
        <h2 className="border-2 border-amber-300 rounded-3xl">Adiciona borda com cor e radius</h2>
        <h2 className="border-2 border-[#eb7f7f]">Adiciona borda com cor personalizada</h2>
        
        
        <h2 className="bg-roxoInsano text-white">Criando cor personalizada para varios usos, como se fosse uma var que guarda a cor</h2>
      </section>
    </>
  );
}

export default Colors;
