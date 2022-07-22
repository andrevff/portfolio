import { Student } from 'phosphor-react'

export function Education() {
    return (
        <div className="p-8 flex items-center gap-4 mt-2">
            <Student size={100} className='w-auto rounded-full ml-12'/>
            <div>
                <h1 className="text-[2.2rem] font-bold mb-1 ml-12">Formação Acadêmica</h1>
                <p className='text-2xl font-bold text-green-500 ml-12'>Ciência da Computação</p>
                <p className='ml-12'>Centro Universitário Unifavip Wyden - <a className='font-bold hover:text-blue-200 transition-colors' href="https://goo.gl/maps/nVqXnonXDQu6RwpM9" target="_blank">Caruaru (PE, Brazil)</a>  <br/> <strong className='text-blue-200'>(2020 - Atualmente)</strong></p>
            </div>
        </div>
    )
}