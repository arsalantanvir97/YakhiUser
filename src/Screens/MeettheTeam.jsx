import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
const data=[
  {
  name:"Godis Kawah",
  title:"Chief Operations Officer - Master Herbalist - Aromatherapist Detoxification Specialist",
  email:" Kawah@yahkiawakened.com",
  image:"images/Teammember1.png"
},
{
  name:"Antonio",
  title:"Counselor - Consultant - Detoxification Specialist",
  email:"",
  image:"images/Teammember2.png"
}, {
  name:"Cierra",
  title:"Herbalist - Processing Manager",
  email:"",
  image:"images/Teammember3.png"
}, {
  name:"Jason (Yadin)",
  title:"Videographer - Photographer - Graphic Designer - Content Creator",
  email:"",
  image:"images/Teammember4.png"
}, {
  name:"Jazz",
  title:"Processor",
  email:"",
  image:"images/Teammember5.png"
}, {
  name:"Godis Ruby",
  title:"Warehouse Production Manager",
  email:"",
  image:"images/Teammember6.png"
},
{
  name:"Nandi",
  title:"Shipping & Processing",
  email:"",
  image:"images/Teammember5.png"
},
{
  name:"Twanna",
  title:"Processor",
  email:"",
  image:"images/Teammember5.png"
},
,
{
  name:"Nabi",
  title:"Yahki Booking/Travel Manager",
  email:"Nabi@yahkiawakened.com",
  image:"images/Teammember2.png"
},
]
const MeettheTeam = () => {
  return (
    <>
      <Header />
      <PrivateRouteSlider/>

      <div className="container-fluid my-5 py-4">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="team">
              <div className="row">
                <div className="col-md-8 mx-auto text-center">
                  <h4 className="sub-heading">
                    Yah'ki Awakened Eye of Lotus Botanical Health Club
                  </h4>
                  <h3 className="main-heading">Meet The Team</h3>
                  <p className="general-para mb-4">
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
              <div className="row my-5  align-items-start justify-content-center pb-5">
             {data?.map(dat=>(
              <>
                <div className="col-lg-4 col-md-6 my-4 my-lg-0">
                  <div className="team-member-box">
                    <img src={dat?.image} alt="" style={{maxWidth:528,maxHeight:428}} className="img-fluid" />
                    <div className="member-info-card">
                      <h3>{dat?.name}</h3>
                      <ul className="member-features list-inline">
                        
                        <li className="list-inline-item"> {dat?.title}</li>
                        
                      </ul>
                      <div className="sepatator" />
                      {dat?.email &&
                      <p className="text-center member-email">
                        <Link
                          to="#"
                          
                          onClick={(e) => {
                            window.location = `mailto:${dat?.email}`;
                            e.preventDefault();
                          }}
                        >
                          <i className="fas fa-envelope" />
                          {dat?.email}
                        </Link>
                      </p>}
                    </div>
                  </div>
                  <div className="send-msg mx-auto text-center ">
                    <Link to="#" className="btn red-btn-solid">
                      Send A Message
                    </Link>
                  </div>
                </div>
                </>
                ))}
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <div className="about-bottom-banner">
                    <h3>
                      All Herbs Are Organic Alkaline and Are Naturally
                      Wildcrafted from the Land of their Origin
                    </h3>
                    <p>
                      All herbs used in our products are 100% naturally organic
                      and are selectively picked and tested by a laboratory
                      before use. Each herbal compound is personally prepared
                      with gratification for the purpose of restoring health to
                      our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MeettheTeam;
