import { Atom } from "phosphor-react";

export function Projects() {
    return (
        <div className="bg-green-900">
                <div className="text-center p-8">
                    <h1 className="text-[2.5rem] font-bold">Meus Projetos</h1>
                    <Atom className="ml-auto mr-auto" size={50}/>
                </div>
                <div className="align-items-center text-center p-4 flex bg-gray-300 mb-2">
                    <div className="p-2">
                        <a href="https://clima-local.vercel.app" target="_blank">
                            <center>                            
                                <img  width={400} src="/src/assets/clima-local.png" className="media-object  img-responsive img-thumbnail" />
                            </center>
                            <p className="text-center pt-2 font-bold text-2xl text-green-900">Clima Local</p>
                        </a>
                        <p className="lead text-2xl text-center text-green-800">Site para verificar as condições climáticas atuais de qualquer cidade</p>    
                    </div> 
                </div>
        </div>
    )
}