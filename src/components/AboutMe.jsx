export function AboutMe(){
    return (
        <div className="p-8 flex items-center gap-4 mt-2">
            <img className="h-[200px] w-[200px] rounded-full border-2 border-green-800" src="https://avatars.githubusercontent.com/u/62400116?v=4" alt="" />
            <div className="text-xl">
                <h1 className="text-[2.5rem] font-bold mb-4">Sobre Mim</h1>
                <p>Meu nome é <strong className="text-green-500">André Ferreira</strong>, tenho 19 anos e sou acadêmico em <strong className="text-green-500">Ciência da Computação</strong>. <br/> Atualmente estou me especializando na área de <strong className="text-green-500">Desenvolvimento Web Front-end</strong>, <br/> criando projetos com a biblioteca <strong className="text-blue-300">ReactJS</strong>.</p>
            </div>
        </div>
    )
}