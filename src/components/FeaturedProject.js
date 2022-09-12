import { dataFeatured } from "../data";

export default function FeaturedProject() {
  return (
    <section className='mt-32 px-4 text-white lg:mt-48 lg:px-14' id='work'>
      <h2 className='font-neue text-4xl'>SELECTED WORK.</h2>
      <div className='mt-8 flex flex-col space-y-10'>
        {dataFeatured.map(({ img, title, id }) => {
          return (
            <div className='even:self-end ' key={id}>
              <img
                src={img}
                className='h-[300px] object-cover md:h-[400px] md:w-[600px] '
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
