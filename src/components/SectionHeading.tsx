import type { FC, ReactNode } from "react"

export interface SectionHeadingProps {
  title: string
  children: ReactNode
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, children }) => {
  return (
    <section className=" container mx-auto mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8 flex flex-col justify-items-start ">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold mb-2 sm:mb-3 md:mb-4">{title}</h2>
      <div className="text-sm sm:text-base text-gray-700">{children}</div>
    </section>
  )
}

export default SectionHeading