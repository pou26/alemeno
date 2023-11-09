import React from "react"

import Hero from "./hero/Hero"
import Header from "../../components/header/Header";
import CourseList from "./courses/CourseList"


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CourseList/>

    </>
  )
}

export default Home