import tours from './tours'

const TourPackage = ({ id }: { id: number }) => {
    const content = tours[id - 1]
    const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']

    return (
        <article className="prose max-w-full text-justify mt-10">
            <h1 className="text-center text-xl">{romans[id - 1]} პაკეტის ინფორმაცია</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} className='text-black' />
        </article>
    )
}

export default TourPackage