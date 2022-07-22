import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Header(){
    return (
        <div className="">
            <div className="bg-green-900 w-full flex justify-between mx-auto">
                <div className="">
                    <h1 className="pt-8 pl-8 pr-8 text-[2.5rem] leading-tight font-bold">Olá, me chamo André!</h1>
                    <p className="ml-8 mb-8 text-gray-300 leading-relaxed">Sou desenvolvedor web front-end, em formação.</p>
                </div>
                <div className="p-8 rounded">
                    <div className="pb-3">
                    <a className="text-[2.5rem] hover:text-gray-500 transition-colors" target="_blank" href="https://github.com/andrevff">
                        <GithubLogo />
                    </a>
                    </div>
                    <a className="text-[2.5rem] hover:text-gray-500 transition-colors" target="_blank" href="https://www.linkedin.com/in/andr%C3%A9-victor-ferreira-c%C3%A2ndido/">
                        <LinkedinLogo />
                    </a>
                </div>
            </div>  
        </div>
    )
}