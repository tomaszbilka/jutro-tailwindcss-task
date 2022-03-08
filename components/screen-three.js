const ScreenThree = () => {
  return (
    <>
      <div className='bg-rose-300 w-full h-screen overflow-hidden flex justify-center '>
        <div className='w-9/12 flex items-center flex-col lg:flex-row'>
          <div className='lg:w-6/12 w-full lg:self-center self-start  lg:pl-0 md:pl-16 pl-4 lg:mt-0 mt-10'>
            <img
              src='./imgs/pills.svg'
              alr='download icon'
              className='w-16 md:w-28 mt-8 md:mt-0'
            />
            <h2 className="font-['Poppins'] md:text-5xl text-2xl font-bold text-black mb-10 mt-14">
              Otrzymaj receptę
            </h2>
            <div>
              <p className='md:text-2xl text-base text-black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.{' '}
              </p>
            </div>
            <button className='bg-sky-900 text-white  px-4 py-2 mt-10'>
              Pobierz aplikację
            </button>
          </div>
          <div className='md:mt-12 mt-6  lg:pl-0 md:pl-10'>
            <img src='./imgs/phone-up.svg' alt='smartphone' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenThree;
