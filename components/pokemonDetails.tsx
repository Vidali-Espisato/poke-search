'use client'

import { typeColors } from "@/constants"
import { useState } from "react"


function TypeColor({ typeName }: { typeName: string }) {
    const [ isHovered, setIsHovered ] = useState(false)
    const _color = (typeColors as any)[typeName] || "#fff"

    return (
        <div className="h-5 w-8 cursor-help" style={{ backgroundColor: _color }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={ `${ isHovered ? "block" : "hidden" } absolute bg-blue-600 font-semibold px-2 py-1 text-yellow-300 rounded-xl -translate-y-10 -translate-x-1/4` }>{ typeName }</div>
        </div>
    )
}


export default function PokemonDetails({ name, weight, typeData }: { name: string, weight: number, typeData: any }) {

    return (
        <div>
            <h2 className="text-center text-blue-600 font-semibold text-3xl">{ name.charAt(0).toUpperCase() + name.slice(1) }</h2>
            <div className="flex justify-between">
                weight: { weight }
                <div className="flex item-center gap-3">
                    types:
                    {
                        typeData?.map((t: any, idx: any) => (
                            <TypeColor typeName={ t.type.name } key={ idx } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}