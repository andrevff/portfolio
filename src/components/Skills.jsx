import { Code } from "phosphor-react";

export function Skills(){
    return (
        <div className="p-8 flex items-center gap-4 mt-2">
            <Code size={100} className='w-auto rounded-full ml-12'/>
            <div>
                <h1 className="text-[2.2rem] font-bold mb-1 ml-12">Habilidades</h1>
                <ul className="mb-1 ml-12">
                    <code className="text-gray-200">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </code>
                    
                </ul>
            </div>
        </div>
    )
}