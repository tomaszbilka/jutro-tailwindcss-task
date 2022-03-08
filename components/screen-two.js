const ScreenTwo = () => {
  return (
    <>
      <div className='bg-sky-700 w-full h-screen overflow-hidden flex justify-center '>
        <div className='w-9/12 flex items-center flex-col lg:flex-row'>
          <div className='lg:w-6/12 w-full lg:self-center self-start lg:pl-0 md:pl-16 pl-4 order-last lg:order-first animate-show'>
            <img
              src='./imgs/talk.svg'
              alr='download icon'
              className='w-16 md:w-28'
            />
            <h2 className="font-['Poppins'] md:text-5xl text-2xl font-bold text-white mb-10 mt-14 animate-show">
              Porozmawiaj z lekarzem
            </h2>
            <div>
              <p className='md:text-2xl text-base text-white animate-show'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.{' '}
              </p>
            </div>
            <button className='bg-emerald-400 text-white  px-4 py-2 mt-10 animate-color'>
              Pobierz aplikację
            </button>
          </div>
          <div className='lg:mb-20 md:mb-4 mb-12 mt-0 md:-mt-28 lg:mt-0  lg:pl-0 md:pl-10'>
            <img src='./imgs/phone-down.svg' alt='smartphone' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenTwo;
