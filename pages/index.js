import { Fragment } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Slider from '../components/Slider';
import NewCollection from '../components/NewCollection';
import BestSellers from '../components/BestSellers';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Alışverişin merkezi</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <NotificationBar />
      <Slider />
      <NewCollection />
      <BestSellers />
    </Fragment>
  );
}
