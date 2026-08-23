import Image from "next/image"

export default function Qualities() {
    const qualitiesArr = [
        {
            id:1,
            title: "PASSIONATE",
            desc: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
            img: "images/Home/Qualities/passionate.svg"
        },
        {
            id:2,
            title: "RESOURCEFUL",
            desc: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
            img: "images/Home/Qualities/resourceful.svg"
        },
        {
            id:3,
            title: "FRIENDLY",
            desc: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
            img: "images/Home/Qualities/friendly.svg"
        },

    ]
  return (
   <section className = "w-full mt-30 mb-77.75 flex flex-col gap-20 items-center justify-center md:mb-82.75 md:gap-8 xl:flex-row xl:gap-7.5 xl:mt-40 xl:mb-95">
        {
            qualitiesArr.map((item) => (
                <div key = {item.id} className = "flex flex-col gap-12 items-center md:flex-row xl:flex-col" >
                    <Image src = {item.img} alt={item.title} height="202" width="202"/>
                    <div className = "flex flex-col gap-8 text-[#333136] items-center text-center md:text-left md:items-start md:gap-4 xl:text-center xl:items-center xl:gap-8 xl:max-w-87.5">
                        <p className = "font-medium text-[20px] leading-6.5 tracking-[5px]">{item.title}</p>
                        <p className = "leading-6.5">{item.desc}</p>
                    </div>
                </div>
            ))
        }
   </section>
  )
}
