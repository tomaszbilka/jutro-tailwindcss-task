const ArrowRight = (props) => {
  const changeHandler = () => {
    props.changeScreen();
  };

  return (
    <div
      className='fixed lg:right-20 md:right-10 right-4 top-1/2 cursor-pointer -translate-y-1/2 '
      onClick={changeHandler}
    >
      <img src='./imgs/r-arrow.svg' alt='arrow' />
    </div>
  );
};

export default ArrowRight;
