import { Fragment } from "react";
import Header from "../components/Header";
import NotificationBar from "../components/NotificationBar";

export default function Home() {
  return (
    <Fragment>
      <NotificationBar />
      <Header />
    </Fragment>
  );
}
