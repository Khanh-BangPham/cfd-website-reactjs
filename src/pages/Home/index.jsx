import React from "react";
import Course from "../Course";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Action from "./components/Action";
import Head from "../../components/Head";

export default function Home() {
  return (
    <main className="homepage" id="main">
      <Head>
        <title>CFD Training</title>
      </Head>
      <Banner />
      <Course />
      <Intro />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}
