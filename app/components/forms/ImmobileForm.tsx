'use client';

import { useState } from "react";

const ImmobileForm = () => {
    const [type, setType] = useState('');
    const [situation, setSituation] = useState('');
    const [realRight, setRealRight] = useState('');
    const [debt, setDebt] = useState('');

    return (
        <form className="flex flex-col w-2/3 mx-auto gap-7">
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full">
                    <input type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cidade</label>
                </div>
                <div className="relative z-0 w-full">
                    <input type="text" name="zipcode" id="zipcode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="zipcode" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CEP</label>
                </div>
            </div>
            <div className="grid md:grid-cols-4 md:gap-6">
                <div className="relative z-0 w-full col-span-2">
                    <input type="text" name="street" id="street" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="street" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Endereço</label>
                </div>
                <div className="relative z-0 w-full">
                    <input type="text" name="neighborhood" id="neighborhood" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="neighborhood" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bairro</label>
                </div>
                <div className="relative z-0 w-full">
                    <input type="number" name="number" id="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número</label>
                </div>
            </div>
            <div className="relative z-0 w-full">
                <input type="text" name="georeferencing" id="georeferencing" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="georeferencing" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Proprietário</label>
            </div>
            <div className="grid md:grid-cols-4 md:gap-6">
                <div className="relative z-0 w-full col-span-2">
                    <input type="number" name="value" id="value" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="value" className="peer-focus:font-medium absolute text-sm text-gray-500 focus:text-blue-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Valor Venal</label>
                </div>
                <div className="relative z-0 w-full">
                    <select
                        name="type"
                        id="type"
                        className={`block py-2.5 px-0 w-full text-sm ${type !== "" ? 'text-gray-900' : 'text-gray-500'} focus:text-blue-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                    >
                        <option disabled value="">Tipo de Imóvel</option>
                        <option value="urban">Urbano</option>
                        <option value="rural">Rural</option>
                    </select>
                </div>
                <div className="relative z-0 w-full">
                    <select 
                        name="situation" 
                        id="situation" 
                        className={`block py-2.5 px-0 w-full text-sm ${situation !== "" ? 'text-gray-900' : 'text-gray-500'} focus:text-blue-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                        onChange={(e) => setSituation(e.target.value)}
                        value={situation}
                        >
                        <option disabled value="">Situação</option>
                        <option value="occupied">Ocupado</option>
                        <option value="vacant">Desocupado</option>
                    </select>
                </div>
            </div>
            {type === 'urban' && (
                <div className="relative z-0 w-full">
                    <input type="number" name="iptu" id="iptu" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="iptu" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">IPTU</label>
                </div>
            )}
            {type === 'rural' && (
                <div className="grid md:grid-cols-3 md:gap-6">
                    <div className="relative z-0 w-full">
                        <input type="number" name="car" id="car" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="car" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CAR</label>
                    </div>
                    <div className="relative z-0 w-full">
                        <input type="number" name="ccir" id="ccir" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="ccir" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CCIR</label>
                    </div>
                    <div className="relative z-0 w-full">
                        <input type="number" name="itr" id="itr" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="itr" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ITR</label>
                    </div>
                </div>
            )}
            {type === 'rural' && (
                <div className="relative z-0 w-full">
                    <input type="text" name="georeferencing" id="georeferencing" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="georeferencing" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Georreferenciamento</label>
                </div>
            )}
            <div className="grid md:grid-cols-4 md:gap-6">
                <div className="relative z-0 w-full">
                    <select 
                        name="realRight" 
                        id="type" 
                        className={`block py-2.5 px-0 w-full text-sm ${realRight !== "" ? 'text-gray-900' : 'text-gray-500'} focus:text-blue-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                        onChange={(e) => setRealRight(e.target.value)}
                        value={realRight}
                        >
                        <option disabled value="">Direito real</option>
                        <option value="yes">Sim</option>
                        <option value="no">Não</option>
                    </select>
                </div>
                <div className="relative z-0 w-full col-span-2">
                    <input type="text" name="value" id="value" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="value" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Proprietário do direito</label>
                </div>
                <div className="relative z-0 w-full">
                    <select 
                        name="debt" 
                        id="realRight" 
                        className={`block py-2.5 px-0 w-full text-sm ${debt !== "" ? 'text-gray-900' : 'text-gray-500'} focus:text-blue-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                        onChange={(e) => setDebt(e.target.value)}
                        value={debt}
                        >
                        <option disabled value="">Dívida</option>
                        <option value="IPTU">IPTU</option>
                        <option value="CCIR">CCIR</option>
                        <option value="ITR">ITR</option>
                        <option value="No">Não</option>
                    </select>
                </div>
            </div>
        </form >
    )
}

export default ImmobileForm;