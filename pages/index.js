import { useState } from 'react';
import Head from 'next/head';
import ArrowLeft from '../components/arrow-left';
import ArrowRight from '../components/arrow-right';
import ScreenOne from '../components/screen-one';
import ScreenThree from '../components/screen-three';
import ScreenTwo from '../components/screen-two.js';

export default function Home() {
  const [showPage, setShowPage] = useState(1);

  const changeLeftHandler = () => {
    setShowPage((prev) => {
      if (prev === 1) {
        return 3;
      } else {
        return (prev -= 1);
      }
    });
  };

  const changeRightHandler = () => {
    setShowPage((prev) => {
      if (prev === 3) {
        return 1;
      } else {
        return (prev += 1);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Task</title>
        <meta name='description' content='Demo health app' />
        <link rel='icon' href='/favicon.ico' />
        <link href='' />
      </Head>
      <ArrowLeft changeScreen={changeLeftHandler} />
      {showPage === 1 && <ScreenOne />}
      {showPage === 2 && <ScreenTwo />}
      {showPage === 3 && <ScreenThree />}
      <ArrowRight changeScreen={changeRightHandler} />
    </>
  );
}
