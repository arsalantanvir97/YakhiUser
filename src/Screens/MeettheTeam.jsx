import React from 'react'
import { Link } from 'react-router-dom'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import MainHeader from '../components/MainHeader'
import Header from '../components/Header'
import ToggleBack from '../components/ToggleBack'
import ImageLazyLoad from '../components/ImageLazyLoad'
const data = [
  {
    name: 'Godis Kawah',
    title: 'Master Herbalist',
    // email: 'kawah@yahkiawakened.com',
    image: 'images/Kawah-Ashyet.png',
  },
  {
    name: 'RUBY FOSTER',
    title: 'Warehouse Manager',
    // email: "candice@yahkiawakened.com",
    image: 'images/MOMS RUBY (2).jpg',
  },
  {
    name: 'Cierra',
    title: 'Lead Herbalist and Supervisor',
    // email: "candice@yahkiawakened.com",
    image: 'images/Cierra.png',
  },
  {
    name: 'Nandi',
    title: 'Lead Shipping and Processer',
    // email: "candice@yahkiawakened.com",
    image: 'images/NANDI.jpg',
  },
  {
    name: 'Jazz',
    title: 'Herbal Associate & Processer',
    // email: "candice@yahkiawakened.com",
    image: 'images/JAZZ (1).jpg',
  },
  {
    name: 'Twanna',
    title: 'Herbal Associate & Processer',
    // email: "candice@yahkiawakened.com",
    image: 'images/TUWANNA (1).jpg',
  },
  {
    name: 'CANDICE',
    title: 'Herbal Associate & Processer',
    // email: 'candice@yahkiawakened.com',
    image: 'images/Candice-Nelson.png',
  },
  {
    name: 'Jason (Yadin)',
    title:
      'Production Manager - Videographer-Photographer - GraphicDesigner - Content Creator',
    // email: "candice@yahkiawakened.com",
    image: 'images/JASON (1).jpg',
  },

  {
    name: 'Nabi',
    title: 'Yahki Tour & Event Manager',
    // email: 'claims@yahkiawakened.com',
    image: 'images/nabi.png',
  },
  // {
  //   name: "ANIYAH AWAKENED",
  //   title:
  //     "Dietitian - Master Alkaline Chef - Herbalist - Counselor - Womb Wellness - Crystal Jeweler",
  //   email: "AniYah@yahkiawakened.com",
  //   image: "images/Aniyah-bw.jpg"
  // },
  // {
  //   name: 'Antonio',
  //   title: 'Counselor - Consultant - Detoxification Specialist',
  //   // email: "candice@yahkiawakened.com",
  //   image: 'images/ANTONIO (1).jpg',
  // },
]

const MeettheTeam = () => {
  return (
    <>
      <Header />
      <MainHeader />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={`Meet the Team`} />
            <div className='team'>
              <div className='row'>
                <div className='col-md-8 mx-auto text-center'>
                  <h4 className='sub-heading'>
                    Yah'ki Awakened Eye of Lotus Botanical Health Club
                  </h4>
                  <h3 className='main-heading'>Meet The Team</h3>
                  <p className='general-para mb-4'>
                    As Yah’ki is transitioning out of his role of consulting and
                    diagnosing clients to put 100% of his energy into future
                    botanical and anatomy research and building The Eye Of Lotus
                    Healing Center, get to know the individuals that, are
                    helping you every step of the on your journey to healing.
                    Each therapist is highly trained in their particular area to
                    best suit your needs and was selectively chosen by Yah’ki
                    himself.
                  </p>
                </div>
              </div>
              {/* Team members grid */}
              <div className='row my-5  align-items-start justify-content-center pb-5'>
                {data?.map((dat) => (
                  <>
                    <div className='col-lg-4 col-md-6 my-4'>
                      <div className='team-member-box '>
                        <ImageLazyLoad
                          src={dat?.image}
                          alt=''
                          // style={{ maxWidth: 528, maxHeight: 428 }}
                          classname='img-fluid'
                        />
                        <div className='member-info-card'>
                          <h3>{dat?.name}</h3>
                          <ul className='member-features list-inline'>
                            <li className='list-inline-item'> {dat?.title}</li>
                          </ul>
                          <div className='sepatator' />
                          {dat?.email && (
                            <p className='text-center member-email'>
                              <Link
                                to='#'
                                onClick={(e) => {
                                  window.location = `mailto:${dat?.email}`
                                  e.preventDefault()
                                }}
                              >
                                <i className='fas fa-envelope' />
                                {dat?.email}
                              </Link>
                            </p>
                          )}
                        </div>
                      </div>
                      {/* <div className="send-msg mx-auto text-center ">
                        <Link to="#" className="btn red-btn-solid">
                          Send A Message
                        </Link>
                      </div> */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllHerbs />
      <Footer />
    </>
  )
}

export default MeettheTeam
