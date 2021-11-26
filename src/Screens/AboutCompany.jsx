import React from 'react'
import InnerPageBanner from './InnerPageBanner'
const AboutCompany = () => {
    return (<>
    <InnerPageBanner/>
        <div className="container-fluid my-5 py-4">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="about-company">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-10">
                  <img src="images/about-company.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                  <h4 className="sub-heading">Yah'ki Awakened Eye of Lotus Botanical Health Club</h4>
                  <h3 className="main-heading">Our Company</h3>
                  <p className="general-para dark-text">
                    Welcome to Yah’ki Awakened LLC  where Peace, Health, Energy and Awareness is 
                    always first priority. Yahki Awakened  &amp; Eye of Lotus Botanicals is a committed 
                    family who specializes and focuses on cellular regeneration, DNA repair, and intracellular 
                    detoxification using a high energetic diet and powerful alkaline botanicals.  Our core belief
                    is that the body has the ability to heal itself when provided the optimal environment for maximum 
                    cellular potential.  Our primary methodology  for healing is Amino Acid Therapy.
                  </p>
                  <p className="general-para dark-text mt-4">
                    This journey began after our founder, Yah’ki, healed himself from high blood pressure, diabetes, kidney failure,
                    rheumatoid arthritis, heart disease, obesity, and hair loss.  Through fasting, a plant based alkaline diet, and 
                    an herbal protocol, he was able to eliminate all of the Dis-Eases he suffered from and restore his body to full health.
                    His own healing journey inspired him to start Yah’Ki Awakened LLC &amp; Eye of Lotus Botanicals so he could show others how 
                    to restore their health as well.
                  </p>
                </div>
                <div className="col-12 my-5">
                  <p className="general-para dark-text">
                    Yah’ki is a Master Herbalist and highly knowledgeable in Theoretical Psychology, Metaphysics, 
                    and and Biochemistry.  He has been studying and practicing herbalism (Natural Pathology) for the past 10 years. 
                    Yah’ki is a certified Master Herbalist, Reiki Healer, and Energy Crystal Healer.  He has restored health to people 
                    suffering from Diabetes, Herpes, Sickle Cell Anemia, various Cancers, Autoimmune Diseases, and many more.
                  </p>
                  <p className="general-para dark-text mt-4">
                    Our ultimate goal is to provide the masses with the necessary tools for healing. 
                    Through proper nutrition, amino acid therapy, education, for your health can be restored. 
                    We are very misinformed and lead to believe that many of the Dis-Eases people are suffering from are incurable, 
                    but not anymore! Our Company specializes in Herbal compounds and formulas designed to aid and strengthen the cells 
                    of the human body. Come take this amazing journey with us. Enjoy yourself while learning how to heal thyself and others 
                    who are suffering. Lets break The illusion we call disease!
                  </p>
                </div>
              </div>
            </div>
            {/* Our Mission */}
            <div className="mission mb-5 pb-5">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-7 col-lg-12 my-xl-0 my-5">
                  <h5>Yah'ki Awakened Eye of Lotus Botanical Health Club</h5>
                  <h3>Our Mission</h3>
                  <p>
                    My mission is to shake and expose the deceitful tactics of this westernized system that
                    has a strong hold on my people. Furthermore,  to ignite the spark in their melanated,
                    cosmic minds, while lifting the veils from their eyes.
                  </p>
                  <p>
                    Once we realize that our subconscious mind have been programmed by the evils of this
                    world and recognize that there is a diabolical plot to exterminate and eliminate the so called 
                    “black man and woman” off planet earth. Then and only then will we begin to question any and all things 
                    they have ever told and taught us.
                  </p>
                  <p>
                    For instance, who taught you religion, medicine, traditions, education, culture and language? 
                    All of these things mold and shape the cerebral frontal lobe and parietal lobe section of your brain cortex. 
                    These main functions of your brain exercise the emotions, creativity and intelligent pathways of your thinking. 
                    Everything mentioned, have been taught to you by the same westernized society that enslaved, raped, hung, murdered and 
                    castrated our people for thousands of years.
                  </p>
                </div>
                <div className="col-xl-4 col-lg-9 mx-auto text-center">
                  <img src="images/mission-aside-image.png" alt="" className="img-fluid" />
                </div>
              </div>
              <img src="images/falling-leaf-1-image.png" alt="" className="img-fluid over-image-1" />
              <img src="images/Cinnamon.svg" alt="" className="img-fluid over-image-2" />
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center mt-5">
                <div className="about-bottom-banner">
                  <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
                  <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default AboutCompany
