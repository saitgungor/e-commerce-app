import { Fragment } from 'react';
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <Fragment>
      <NotificationBar />
      <Header />
      <Slider />
    </Fragment>
  );
}
