import { FileArrowDown } from "phosphor-react";

export function AboutMe(){
    return (
        <div className="p-8 flex items-center gap-4 mt-2">
            <img className="w-[200px] rounded-full border-2 border-green-800" src="https://avatars.githubusercontent.com/u/62400116?v=4" alt="" />
            <div>
                <h1 className="text-[2.5rem] font-bold mb-4">Sobre Mim</h1>
                <p>Meu nome é <strong className="text-green-500">André Ferreira</strong>, tenho 19 anos e sou acadêmico em <strong className="text-green-500">Ciência da Computação</strong>. <br/> Atualmente estou me especializando na área de <strong className="text-green-500">Desenvolvimento Web Front-end</strong>, <br/> criando projetos com a biblioteca <strong className="text-blue-300">ReactJS</strong>.</p>
                <div className="gap-8 mt-2 grid grid-cols-2">
                    <a href="https://drive.google.com/file/d/1qZ5YMJQuXHzNr8_7Oris-RtowX2T8rSf/view?usp=sharing" className="bg-gray-200 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" target="_blank">
                        <div className="bg-green-700 h-full p-5 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relax">
                            <strong className="text-2xl text-gray-900">Currícuclo</strong>
                            <p className="text-sm text-gray-800">
                            Acesse o meu CV
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}