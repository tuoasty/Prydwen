interface Props {
  page: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function PageHeader(p:Props) {
  return (
    <section className="3w-full h-48 mx-20 mt-10 mb-16">
      <div className="mb-5">
        <p className="inline text-zinc-400">Honkai: Star Rail / </p>
        <p className="inline text-white">{p.page}</p>
      </div>
      <div className="flex">
        <img className="mr-5 object-contain" src={p.image} />
        <div className="text-white flex flex-col justify-around">
          <h1 className="text-3xl font-bold">{p.title}</h1>
          <h2 className="leading-8">{p.description}</h2>
          <div className="text-zinc-300">
            <p className="inline text-[0.85rem] ">Last updated: </p>
            <p className="inline font-bold text-[0.85rem]">{p.date}</p>
          </div>
        </div>
      </div>
    </section>
  )
}