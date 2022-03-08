const ArrowLeft = (props) => {
  const changeHandler = () => {
    props.changeScreen();
  };

  return (
    <div
      className='fixed lg:left-20 md:left-10 left-4 top-1/2 cursor-pointer -translate-y-1/2 '
      onClick={changeHandler}
    >
      <img src='./imgs/l-arrow.svg' alt='arrow' />
    </div>
  );
};

export default ArrowLeft;
