import tours from './tours'
import packages from './packages'
import PlaceButton from './PlaceButton'

const TourPackage = ({ id }: { id: string }) => {
    // const content = tours[id - 1]
    const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']

    const data = packages.find(item => item.id == parseInt(id))


    return (
        <article className="prose max-w-full text-justify mt-10">
            <h1 className="text-center text-xl">{romans[parseInt(id) - 1]} პაკეტის ინფორმაცია</h1>
            <div className='flex flex-wrap flex-row gap-5 mt-10'>

                {data?.places.map((item, index) =>
                    <PlaceButton key={index} {...item} id={index} />
                )}
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: content }} className='text-black' /> */}
        </article>
    )
}

export default TourPackage