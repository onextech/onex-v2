import React from 'react'

// @link https://play.tailwindcss.com/r1kkaAO6Gn
export function GaugeChart({
  value,
  content,
}: {
  content?: React.ReactNode
  value: number // 0 - 100
}) {
  return (
    <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full">
      {/* Outer Ring */}
      <div className="absolute top-0 aspect-square w-full rotate-[calc(120deg-30deg)] bg-gradient-to-tr from-red-400 from-30% to-transparent to-50% transition-transform duration-500" />
      <div className="absolute top-0 aspect-square w-full rotate-[calc(120deg-90deg)] bg-gradient-to-tr from-transparent from-30% to-yellow-400 to-50% transition-transform duration-500" />
      <div className="absolute top-0 aspect-square w-full rotate-[calc(120deg-30deg)] bg-gradient-to-tr from-transparent from-30% to-green-400 to-50% transition-transform duration-500" />

      {/* Inner Ring */}
      <div className="absolute inset-2 flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full border-4 border-card border-b-0">
        <div className="absolute top-0 aspect-square w-full rotate-[calc(45deg-45deg)] bg-gradient-to-tr from-zinc-100 from-20% to-transparent to-80% transition-transform duration-500" />
        <div
          className="absolute top-0 aspect-square w-full bg-gradient-to-tr from-transparent from-50% to-zinc-100 to-50% transition-transform duration-500"
          style={{
            transform: `rotate(${(value / 100) * 180 - 45}deg)`,
          }}
        />
        {/* Progress */}
        <div className="absolute top-[20%] flex aspect-square w-[80%] justify-center rounded-full bg-card" />
        {/* Text */}
        {content ? (
          <div className="absolute w-full text-center flex items-center justify-center h-[80%] top-1/4">
            {content}
          </div>
        ) : (
          <div className="absolute top-[60%] w-full text-center">
            <p className="text-3xl font-bold uppercase leading-none tracking-wide text-slate-700">
              {value}%
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
