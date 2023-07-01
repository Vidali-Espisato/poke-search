"use client"

export default function({ value, className }: { value: number, className: string }) {
  const maxValue = value > 95 ? 150 : 100

  return (
    <div className="border-4 border-blue-600 dark:border-yellow-300 rounded-full w-full overflow-hidden">
        <div className={ `bg-yellow-300 dark:bg-blue-600 w-full py-2` } style={{ transform: `translateX(-${maxValue - value}%)` }}></div>
    </div>
  )
}