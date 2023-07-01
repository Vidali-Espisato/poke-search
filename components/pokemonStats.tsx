'use client'

import Progress from "./ui/progress"


export default function ({ stats }: { stats: any }) {
    return (
        <div className="mt-5">
            {
                stats?.map((_stat: any) => {
                    const statName = _stat.stat.name
                    const statValue = _stat.base_stat

                    return (
                        <div key={statName} className="xl:flex items-baseline my-2 xl:my-4">
                            <div className="xl:w-1/2">
                                {statName}: {statValue}
                            </div>
                            <Progress className="m-auto bg-blue-500" value={statValue} />
                        </div>
                    )
                })
            }
        </div>
    )
}