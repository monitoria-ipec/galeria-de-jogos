import { NavBar } from "./index";


function About() {
    return (
        <div className="space-y-5 bg-gray-800 min-h-screen">
            <div>
                <NavBar current='Sobre' />
                <div className="container mx-auto my-5">
                    <div className="rounded-xl  shadow-xl">
                        <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                                O que é este site?
                            </h3>
                            <p className="text-gray-600 text-justify">
                                Este site é um repositório dos jogos da cadeira de Intrução à Programação
                                para Engenharia da Computação no CIn, Ministrada pelo professor
                                Alexandre Cabral. O projeto final da cadeira é elaborar em equipes um jogo em C,
                                durate muitos anos dezenas de jogos foram elaborados, este site foi feito para centralizar
                                todos esses jogos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default About;