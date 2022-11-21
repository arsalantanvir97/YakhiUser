import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'

const MasterHerbalist = () => {
  return (
    <>
      <Header />
      <PrivateRouteSlider />

      <div className='container-fluid my-5 py-5' id='herbalist'>
        <h4
          className='sub-heading'
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: window.innerWidth < 590 && 13.6,
          }}
        >
          Yah'ki Awakened Eye of Lotus Botanical Health Club
        </h4>
        <div className='col-11 mx-auto' style={{ paddingRight: 185 }}>
          <div className='row mb-5'>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-lg-8 col-10'>
                  <img
                    src='images/herbalist-yakhi.jpg'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-xl-5 col-lg-10 col-md-10 col-12 mt-xl-0 mt-5'>
                  <h3 className='main-heading'>Master Herbalist Yah'ki</h3>
                  <p className='general-para dark-text'>
                    Yah’ki a Spiritual Holistic Teacher, Herbalist, Crystal
                    Healer, Musician and Positive Speaker for the Black
                    Community. Yah’ki has developed a unique skill of merging
                    biblical and ancient mystical principles into a scientific
                    perspective. His mission is to show the Black Community
                    their true identity and provoke self-awakening to excel in
                    this reality. To execute his mission, Yah’ki promotes and
                    demonstrates unity, love, health and self-awareness amongst
                    his people.
                  </p>
                  <p className='general-para dark-text mt-4'>
                    Alexander Hickman also known as “Yah’ki” was born on July
                    11, 1988, in Alton, Illinois but reared in Saint Louis, MO.
                    As an adolescent, Yah’ki discovered his love for
                    metaphysics, spirituality, and music. Growing up in Saint
                    Louis, Yah’ki witnessed and experienced the pain and
                    struggles of life, which was the reason he became intrigued
                    to pursue a career as a motivational speaker and musician.
                  </p>
                </div>
                <div className='col-xl-1 col-md-2' />
                <div className='col-12 my-5'>
                  <p className='general-para dark-text'>
                    Witnessing the daily struggles of life ignited a passion
                    within Yah’ki to pursue spiritual and mystical practices. It
                    was then that Yah’ki realized the condition of his people
                    was due to hard bondage, malnutrition, unhealthy diets, and
                    lack of spiritual guidance. He associated numerous problems
                    with mental illness and ironically his Holistic Journey to
                    health recovery begin.{' '}
                  </p>
                  <p className='general-para dark-text mt-4'>
                    To jump start his holistic journey, Yah’ki began to study
                    the psychological damage and state of mind of the people
                    within his environment. He obtained knowledge from black
                    leaders such as Dr. Sebi, Dr. Afrika, Elder Moreh Shaleem,
                    Dr. Ben Clark, Dr. Amos N. Wilson and a host of others.
                    Through giving back to his community and being passionate
                    about curing individuals through the use of herbs, speaking,
                    and writing music, Yah’ki established his own youth
                    foundation called the “Black Messiah Project”. He travels
                    far and wide, teaching on many platforms in the black
                    community and is well known for his music, holistic, and
                    spiritual teachings.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AllHerbs />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MasterHerbalist
