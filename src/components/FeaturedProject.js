import { dataFeatured } from "../data";

export default function FeaturedProject() {
  return (
    <section className='mt-32 px-4 text-white lg:mt-48 lg:px-14'>
      <h2 className='font-neue text-4xl'>FEATURED PROJECTS.</h2>
      <div className='flex flex-col space-y-10'>
        {dataFeatured.map(({ img, title, id }) => {
          return (
            <div className='even:self-end ' key={id}>
              <img
                src={img}
                className=' h-[300px] object-cover lg:h-[400px] lg:w-[600px] '
                alt='images'
              ></img>
              <h2 className='text-2xl'>{title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
