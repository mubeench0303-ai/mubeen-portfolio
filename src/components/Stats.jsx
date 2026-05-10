"use client";

import CountUp from "react-countup"

const stats = [
    {
        num: "02",
        text: "Years of experience"
    },

    {
        num: "07",
        text: "Projects completed"
    },

    {
        num: "08",
        text: "Technologies"
    },

    {
        num: 250,
        text: "code commits"
    },
] 

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto pt-4 pb-12 xl:pt-0 xl:pb-0 xl:mt-16">
            <div className="grid grid-cols-1 gap-6 max-w-[80vw] mx-auto sm:grid-cols-2 xl:flex xl:max-w-none">
                {stats.map((item,index) => {
                    return (
                        <div 
                            key={index}
                            className="flex items-center justify-center gap-4 xl:justify-start "
                        >
                            <CountUp 
                                end={Number(item.num)}
                                formattingFn={(value) => value.toString().padStart(2, "0")}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p
                                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 `}
                            >
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
