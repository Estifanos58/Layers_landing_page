import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const {className, children, ...otherProps} = props
  return (
    <div className={twMerge("size-14 bg-neutral-300 inline-flex outline-transparent transition-all duration-500 outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium", className)} {...otherProps}>
        {children}
    </div>
  )
}

export default Key