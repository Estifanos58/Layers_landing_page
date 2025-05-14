import { twMerge } from "tailwind-merge";

const FeatureCard = (props: {title: string; description: string; children?: React.ReactNode ; className?: string}) => {

    const { title, description, children, className } = props
  return (
    <div className={twMerge("bg-neutral-950 border border-white/10 p-6 rounded-3xl md:col-span-2  lg:col-span-1", className)}>
        <div className="aspect-ratio">{children}</div>
        <div className="">
            <h3 className="text-3xl font-medium mt-6">{title}</h3>
            <p className="text-white/50 mt-2">
                {description}
            </p>
        </div>
    </div>
  )
}

export default FeatureCard