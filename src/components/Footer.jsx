import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer(){
    return(
        <div className="pt-[100px] ml-8 mb-8 flex justify-between mx-auto">
            <div className="text-gray-400">
                <p>© Todos os direitos reservados - André Ferreira</p>
                <p>Designed by <a className="text-blue-200 hover:text-blue-800 transition-colors" href="mailto:andrevcandido61@gmail.com" target="_blank">andrevcandido61@gmail.com</a> | 2022</p>
            </div>
            <div className="">
                <div className="pr-8 flex">
                    <div className="pr-3">
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