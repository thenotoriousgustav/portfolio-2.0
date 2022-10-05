export default function Links({ githubRepo, liveDemo }) {
  return (
    <div className='mt-10 flex flex-col space-y-6 font-light lg:flex-row lg:space-y-0 lg:space-x-72'>
      <div>
        <p className='text-secondary'>github repository :</p>
        <a
          className='mt-2 inline-block text-xl text-blue-500 underline'
          href={githubRepo}
        >
          {githubRepo}
        </a>
      </div>
      <div>
        <p className='text-secondary'>live demo :</p>
        <a
          className='mt-2 inline-block text-xl text-blue-500 underline'
          href={liveDemo}
        >
          {liveDemo}
        </a>
      </div>
    </div>
  );
}
