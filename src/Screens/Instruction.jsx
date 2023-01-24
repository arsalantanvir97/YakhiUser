import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ListSkeleton } from '../components/MultipleSkeleton'
import { baseURL, imageURL } from '../utils/api'
import { Parser } from 'html-to-react'
import MainHeader from '../components/MainHeader'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'
import ImageLazyLoad from '../components/ImageLazyLoad'

const htmlToReactParser = new Parser()

const Instruction = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [instructiontext, setinstructiontext] = useState(() => {
    ''
  })

  const [instructions, setinstructions] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    getInstructions()
  }, [])

  const getInstructions = async () => {
    setloading(true)
    try {
      const { data } = await axios.get(
        `${baseURL}/instruction/getallinstructions`
      )
      setloading(false)

      console.log('data', data)
      setinstructiontext(data?.instructiontext?.text)
      setinstructions(data?.getallinstructions)
    } catch (error) {
      console.log('error', error)
    }
    setloading(false)
  }
  return (
    <>
      <Header />
      <MainHeader />

      <section className='about-page pt-2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-11 mx-auto'>
              <ToggleBack name={`Instruction`} />
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <h4 className='sub-heading'>
                    Yah'ki Awakened Eye of Lotus Botanical Health Club
                  </h4>
                  <h3 className='main-heading mt-3'>INSTRUCTIONS</h3>
                  <p className='general-para px-sm-5 mt-4'>
                    {htmlToReactParser.parse(instructiontext)}
                  </p>
                </div>
              </div>
              {/* {loading ? (
                <ListSkeleton listsToRender={16} />
              ) : (
                <div className='row mt-4'>
                  {instructions?.length > 0 &&
                    instructions?.map((inst, index) => (
                      <div className='col-xl-4 col-md-6'>
                        <div className='product-card'>
                          {inst?.videouri && (
                            <video width='100%' height='60%' controls>
                              <source
                                src={`${imageURL}${inst?.videouri}`}
                                type='video/ogg'
                              />
                            </video>
                          )}
                          <h5
                            style={{
                              fontSize: 20,
                              maxHeight: 50,
                              minHeight: 50,
                              marginTop: 15,
                            }}
                            className='general-para px-sm-5'
                            // className="product-name"
                          >
                            {inst?.videotitle}
                          </h5>
                          <p className='general-para px-sm-5'>
                            {inst?.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )} */}
              <section className='diets'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-11 mx-auto'>
                      <div className='row my-5 justify-content-center'>
                        <div className='col-12 text-center '></div>
                        <div className='col-lg-6 col-md-10'>
                          <div className='diet-chart'>
                            <h4>CAPSULES</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-1'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#greenLeaf'
                                      aria-expanded='false'
                                      aria-controls='greenleaf'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='greenLeaf'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-1'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        Take 3 capsules twice daily with a
                                        minimum of 4 oz of fresh pressed juice
                                        morning and evening. **If you have
                                        difficulty swallowing whole capsules,
                                        open them and empty powders in juice.
                                        Thoroughly mix capsule powder in juice.
                                        Spring water can be used if juice is not
                                        accessible.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                          <div className='diet-chart'>
                            <h4>TINCTURES</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-2'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#dried-fruits'
                                      aria-expanded='false'
                                      aria-controls='driedFruits'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='dried-fruits'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-2'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        Tinctures are taken 3 times daily. Refer
                                        to dosage chart to determine the
                                        appropriate dosage for your weight.
                                        Tinctures should be taken all at once,
                                        in the 2.5 oz glass (shot glass).
                                        <br></br>
                                        <ImageLazyLoad
                                          src='images/Tinctureschart.png'
                                          alt=''
                                          classname='img-fluid mt-5'
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-10'>
                          <div className='diet-chart'>
                            <h4>TEAS</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-3'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#ripeFruits'
                                      aria-expanded='false'
                                      aria-controls='ripeFruits'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='ripeFruits'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-3'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        Teas are taken twice daily. To make an 8
                                        oz serving put 16oz of spring or
                                        distilled water in a glass, clay, or
                                        copper pot. Add ¼ cup of tea and boil on
                                        high for 5 minutes. Simmer on low for 25
                                        minutes, strain, and let cool. Teas can
                                        be used up to 3 times if stored
                                        properly. Put strained herbs in an air
                                        tight container and store in the
                                        refrigerator. Give the herbs back to the
                                        earth after the 3rd use. DO NOT ADD ANY
                                        SWEETENERS. You can take the teas with
                                        fresh lemons and limes.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                          <div className='diet-chart'>
                            <h4>TONICS</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-4'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#electricalFoods'
                                      aria-expanded='false'
                                      aria-controls='electricalFoods'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='electricalFoods'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-4'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        Shake well. Drink one (1oz) shot twice
                                        daily on an empty stomach. Keep
                                        refrigerated. To guarantee potency, use
                                        within one month after the seal is
                                        broken.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-11 mx-auto'>
                      <div className='row  justify-content-center'>
                        <div className='col-12 text-center '></div>
                        <div className='col-lg-6 col-md-10'>
                          <div className='diet-chart'>
                            <h4>3 BITTERS</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-5'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#rawVegies'
                                      aria-expanded='false'
                                      aria-controls='rawVegies'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='rawVegies'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-5'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        The 3 Bitters should be taken once
                                        daily. They can be taken in the morning
                                        or evening. To make an 8 oz serving put
                                        16oz of spring or distilled water in a
                                        glass, clay, or copper pot. Add ¼ cup of
                                        tea and boil on high for 5 minutes.
                                        Simmer on low for 25 minutes, strain and
                                        let cool. Teas can be used up to 3 times
                                        if stored properly. Put strained herbs
                                        in an airtight container and store in
                                        the refrigerator. Give the herbs back to
                                        the earth after the 3rd use. DO NOT ADD
                                        ANY SWEETENERS. You can take the tea
                                        with fresh lemons and limes. Please
                                        refer to the YouTube link below for a
                                        detail instruction video:
                                        <br></br>
                                        <div style={{ height: 10 }}></div>
                                        {/* <div
                                          className='col-lg-6 col-md-8 mx-auto my-3 aos-init aos-animate'
                                          data-aos='fade-up'
                                          data-aos-duration={3000}
                                          style={{ width: 540, height: 405 }}
                                        > */}
                                        <div
                                          className='col-lg-12 col-md-12 mx-auto my-3 aos-init aos-animate'
                                          data-aos='fade-up'
                                          data-aos-duration={3000}
                                          style={{ width: '100%', height: 275 }}
                                        >
                                          <iframe
                                            width='100%'
                                            height='100%'
                                            frameborder='0'
                                            allowfullscreen
                                            src='https://www.youtube.com/embed/QHH_gkbLP4Y'
                                          ></iframe>
                                        </div>
                                        {/* <img
              src="images/Yahki-awakened-welcome-image.jpg"
              alt=""
              className="img-fluid"
            /> */}
                                        {/* </div>z */}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                          <div className='diet-chart'>
                            <h4>SEA MOSS</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-6'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#fruitJellies'
                                      aria-expanded='false'
                                      aria-controls='fruitJellies'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='fruitJellies'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-6'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        Wash thoroughly and remove all sea
                                        debris. Repeat 6x before soaking. Soak
                                        in distilled water up to 8 hours before
                                        use. Water must be at least 3 inches
                                        above sea moss. Keep in mind: Sea moss
                                        will expand during the soaking process.
                                        Can be used as a salve to apply
                                        topically, a gel to add into water,
                                        smoothies, soaps, and hair products,
                                        eaten raw, added to salad dressings and
                                        food, or dried and grinded into powder
                                        for a paste mixture or put into
                                        capsules.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-10'>
                          <div className='diet-chart'>
                            <h4>OILS</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-7'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#bakedVegies'
                                      aria-expanded='false'
                                      aria-controls='bakedVegies'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='bakedVegies'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-7'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        Black Seed Oil: Take one tablespoon by
                                        mouth daily.{'\n'}
                                        <br></br>
                                        <div style={{ height: 10 }}></div>
                                        Oregano Oil: For Parasite Elimination,
                                        take 3-6 drops daily by mouth. Also, put
                                        3-6 drops of oregano oil on a cotton
                                        ball, and rub on the lower spinal column
                                        of your back and also at the back of
                                        your neck, daily.{'\n'}
                                        <br></br>
                                        <div style={{ height: 10 }}></div>
                                        For any of our other oils, please refer
                                        to it’s instruction label on bottle.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                          <div className='diet-chart'>
                            <h4>HYGIENE & SOAPS</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-8'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#greenLeagf'
                                      aria-expanded='false'
                                      aria-controls='greenleagf'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='greenLeagf'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-8'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        Tooth and Gum Restoration Powder: Brush
                                        teeth and gums thoroughly for at least 2
                                        minutes. Rinse, then gargle. Repeat
                                        twice daily.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                          <div className='diet-chart'>
                            <h4>KITS AND BUNDLES</h4>
                            <div
                              className='panel-group mb-4'
                              id='accordion'
                              role='tablist'
                              aria-multiselectable='true'
                            >
                              {/* GREEN LEAF VEGETABLES (MUCUS-LESS) */}
                              <div className='panel panel-default mb-3'>
                                <div
                                  className='panel-heading'
                                  role='tab'
                                  id='mucus-less-9'
                                >
                                  <p className='general-para mb-2'>
                                    Below you will find the instructions on how
                                    to consume each product type.
                                  </p>
                                  <h4 className='panel-title'>
                                    <a
                                      className='collapsed'
                                      data-toggle='collapse'
                                      data-parent='#accordion'
                                      href='#greenLeaff'
                                      aria-expanded='false'
                                      aria-controls='greenleaff'
                                    ></a>
                                  </h4>
                                </div>
                                <div
                                  id='greenLeaff'
                                  className='panel-collapse collapse'
                                  role='tabpanel'
                                  aria-labelledby='mucus-less-19'
                                >
                                  <div className='panel-body'>
                                    <ul className='system-list ml-4 py-4'>
                                      <li>
                                        For each specific bundle, depending on
                                        which items are included (teas,
                                        tinctures, capsules, etc), please follow
                                        the instructions that are written for
                                        each of those particular items. For
                                        example: if your kit includes (2) teas,
                                        capsules, and 3 bitters, please refer to
                                        the instructions for each of those items
                                        that are written here in their drop down
                                        tab.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className='row align-items-center justify-content-between my-5'>
                <div className='col-lg-8 col-12'>
                  <h4 className='cta-line'>
                    NO YEAST, SUGAR, MEAT, ALCOHOL, OR DAIRY PRODUCTS MAY BE
                    CONSUMED WITH HERBAL COMPOUNDS.
                  </h4>
                </div>
                <div className='col-lg-4 col-12 mt-3 mt-lg-0 text-lg-right'>
                  <Link to='/Document' className='btn red-btn-solid ml-md-0'>
                    Download Document
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllHerbs />
      <Footer />
    </>
  )
}

export default Instruction
