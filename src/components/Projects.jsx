import { Atom } from "phosphor-react";

export function Projects() {
    return (
        <div className="bg-green-900">
                <div className="text-center p-8">
                    <h1 className="text-[2.5rem] font-bold">Meus Projetos</h1>
                    <Atom className="ml-auto mr-auto" size={50}/>
                </div>
                <div className="text-center bg-gray-300 mb-2">
                    <p className="italic p-[100px] text-green-900">Esta seção ainda está em construção... </p>
                </div>
        </div>
    )
}