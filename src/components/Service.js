export default function Service({ service, started, completed }) {
  return (
    <div className='mt-10 flex flex-col font-light md:flex-row md:space-x-32 lg:space-x-72 '>
      <div>
        <p className='text-secondary'>service :</p>
        <p className='mt-2 text-xl'>{service}</p>
      </div>
      <div className='mt-6 flex justify-between md:mt-0 md:space-x-32 lg:space-x-72'>
        <div>
          <p className='text-secondary'>started :</p>
          <p className='mt-2 text-xl'>{started}</p>
        </div>
        <div>
          <p className='text-secondary'>sompleted :</p>
          <p className='mt-2 text-xl'>{completed}</p>
        </div>
      </div>
    </div>
  );
}
