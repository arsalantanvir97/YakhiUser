import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'

const EattotLive = () => {
  return (
    <>
      <Header />
      <PrivateRouteSlider />
      <section className='about-page'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-11 mx-auto'>
              <div className='row'>
                <div className='col-md-12 text-center'>
                  {/* <h4 className="sub-heading">
                    There's No Such Thing As A Disease That Can't Be Cured!
                  </h4> */}
                  <h3 className='main-heading'>
                    Let Your Food Be Your Medicine
                  </h3>
                  <p className='general-para px-sm-5'>
                    First, I would like to give all Praises and Glory to THE
                    MOST HIGH, for my deep passion for herbal medicine and my
                    gifted healing hands. Also — It would be foolish of me not
                    to acknowledge those who have inspired me on this journey.
                    Much honor and praises to Alfredo Bowman, known as Dr. Sebi
                    (11/26/1933 – 08/06/2016), Dr. Llaila Afrika (Transitioned
                    03/22/2020), Dr. Max Gerson (10/18/1881 - 03/08/1959) and
                    finally, Dr. Robert Morse. Their teachings are what
                    motivated and inspired me to be a teacher in the plant-based
                    holistic health community.
                  </p>
                </div>
              </div>
              {/* fruit bucket */}
              <div className='row my-5'>
                <div className='col-12 text-center'>
                  <img
                    src='images/fruit-basket.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
              {/* Fruits, Berries, and Melons */}
              <div className='row my-5'>
                <div className='col-12 text-center'>
                  <h3 className='fruits-heading'>
                    Fruits, Berries, and Melons
                  </h3>
                  <p className='fruits-para'>
                    Everyone keeps asking me how my approach and natural
                    methodology works so effectively and so fast. My reply is
                    simple: “I” don’t heal anything. YHWH (GOD) created the
                    fleshly vehicle (body) to heal itself if the MIND allows it.
                    If you are eating and consuming what your body was designed
                    to digest, you can overcome almost any illness. However, in
                    some cases, we need an extra healing boost from God’s
                    Miracle Electric Plants we call Alkaline Herbs!
                  </p>
                  <p className='fruits-para'>
                    It is vitally important that we inner-stand cosmic
                    arrangement, genetic predisposition, and their connection to
                    diet, disease and healing. Your liver grounds your brain,
                    your heart pulsates an electric magnetic field, your pineal
                    gland produces carbon, your pituitary gland produces copper,
                    and they all create an electrical spiral force in your
                    nervous system. You Are an Electrical Living Being.
                    Therefore, you were designed to eat Electrical Living Foods.
                  </p>
                  <p className='fruits-para'>
                    The very foods you are supposed to eat are from the landmass
                    your ancestors (The First Blood) originated from. The
                    original people did not eat MEAT, DAIRY, YEAST, GRAINS,
                    PROTEIN or COMPLEX SUGARS. The very Torah that most of us
                    claim to believe and follow actually states these facts.
                  </p>
                </div>
              </div>
              {/* Blockquote from Gnesis */}
              <div className='row my-5'>
                <div className='col-12 text-center'>
                  <p className='blockquote'>
                    <span className='quote'>"</span> And God said, Behold, I
                    have given you every herb bearing seed, which is upon the
                    face of all the earth, and every tree, in the which is the
                    fruit of a tree yielding seed; to you it shall be for meat.
                    And to every beast of the earth, and to every fowl of the
                    air, and to every thing that creepeth upon the earth,
                    wherein there is life, I have given every green herb for
                    meat: and it was so. And God saw every thing that he had
                    made, and, behold, it was very good. And the evening and the
                    morning were the sixth day.<span className='quote'>"</span>
                  </p>
                  <p className='text-center quote-from'>Genesis 1:29-31</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='diets'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-11 mx-auto'>
              <div className='row my-5 justify-content-center'>
                <div className='col-12 text-center mb-5'>
                  <h3>MUCUS-LESS DIET</h3>
                </div>
                <div className='col-lg-6 col-md-10'>
                  <div className='diet-chart'>
                    <h4>MUCUS-LESS</h4>
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
                          <h4 className='panel-title'>
                            <a
                              className='collapsed'
                              data-toggle='collapse'
                              data-parent='#accordion'
                              href='#greenLeaf'
                              aria-expanded='false'
                              aria-controls='greenleaf'
                            >
                              GREEN LEAF VEGETABLES (MUCUS-LESS)
                            </a>
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
                              <li>Arugula</li>
                              <li>Bok Choi</li>
                              <li>Cabbage</li>
                              <li>Collard</li>
                              <li>Dandelion Leaf</li>
                              <li>Kale</li>
                              <li>
                                Leafy Herbs (Basil, Parsley, Cilantro, Rosemary,
                                Thyme, etc.)
                              </li>
                              <li>
                                Lettuce (Green, Red, Romaine, Boston Bibb,
                                Iceberg)
                              </li>
                              <li>Mustard</li>
                              <li>Spinach</li>
                              <li>Swiss chard</li>
                              <li>Turnip</li>
                              <li>Watercress</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* DRIED OR BAKED FRUITS (MUCUS-LESS) */}
                      <div className='panel panel-default mb-3'>
                        <div
                          className='panel-heading'
                          role='tab'
                          id='mucus-less-2'
                        >
                          <h4 className='panel-title'>
                            <a
                              className='collapsed'
                              data-toggle='collapse'
                              data-parent='#accordion'
                              href='#dried-fruits'
                              aria-expanded='false'
                              aria-controls='driedFruits'
                            >
                              DRIED OR BAKED FRUITS (MUCUS-LESS)
                            </a>
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
                              <li>Apples</li>
                              <li>Apricots</li>
                              <li>Bananas</li>
                              <li>Blueberries</li>
                              <li>Cherries</li>
                              <li>Cranberries</li>
                              <li>Currants</li>
                              <li>Currants (Dried)</li>
                              <li>Dates</li>
                              <li>Dates (Dried)</li>
                              <li>Figs</li>
                              <li>Figs (Dried)</li>
                              <li>Grapes/raisins</li>
                              <li>Kiwi</li>
                              <li>Mango</li>
                              <li>Peaches</li>
                              <li>Pears</li>
                              <li>Pineapple</li>
                              <li>Plums/prunes</li>
                              <li>Strawberries</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* RIPE FRUITS (MUCUS-LESS) */}
                      <div className='panel panel-default mb-3'>
                        <div
                          className='panel-heading'
                          role='tab'
                          id='mucus-less-3'
                        >
                          <h4 className='panel-title'>
                            <a
                              className='collapsed'
                              data-toggle='collapse'
                              data-parent='#accordion'
                              href='#ripeFruits'
                              aria-expanded='false'
                              aria-controls='ripeFruits'
                            >
                              RIPE FRUITS (MUCUS-LESS)
                            </a>
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
                              <li>Apples</li>
                              <li>Apricots</li>
                              <li>Banana</li>
                              <li>Black Cherries</li>
                              <li>Blackberries</li>
                              <li>Blood Orange</li>
                              <li>Cantaloupe</li>
                              <li>Cherries</li>
                              <li>Grapefruit</li>
                              <li>Grapes</li>
                              <li>Honeybell Tangelos</li>
                              <li>Honeydew</li>
                              <li>Lemons</li>
                              <li>Mandarin</li>
                              <li>Mangos</li>
                              <li>Nectarine</li>
                              <li>Oranges</li>
                              <li>Papaya</li>
                              <li>Peaches</li>
                              <li>Pears</li>
                              <li>Pineapple</li>
                              <li>Plums</li>
                              <li>Pomegranates</li>
                              <li>Prunes</li>
                              <li>Raisins</li>
                              <li>Raspberries</li>
                              <li>Sour Cherries</li>
                              <li>Strawberries</li>
                              <li>Sweet Cherries</li>
                              <li>Tangerines</li>
                              <li>Watermelon</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='diet-chart'>
                    <h4>ELECTRIC FOODS</h4>
                    {/* ELECTRICAL FOODS */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-less-4'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#electricalFoods'
                            aria-expanded='false'
                            aria-controls='electricalFoods'
                          >
                            ELECTRIC FOODS
                          </a>
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
                              Vegetables (Avoid using a microwave. It will kill
                              your food.)
                            </li>
                            <li>
                              Amaranth greens – same as Callaloo, a variety of
                              Spinach
                            </li>
                            <li>Avocado (Fatty Acid Will Produce Mucus)</li>
                            <li>Bell Peppers</li>
                            <li>Chayote (Mexican Squash)</li>
                            <li>Cucumber</li>
                            <li>Dandelion greens</li>
                            <li>
                              Garbanzo beans(Fatty Acid Will Produce Mucus)
                            </li>
                            <li>Green banana</li>
                            <li>
                              Izote – cactus flower/ cactus leaf – grows
                              naturally in California
                            </li>
                            <li>Kale</li>
                            <li>Lettuce (all, except Iceberg)</li>
                            <li>Mushrooms (all, except Shitake)</li>
                            <li>Nopales – Mexican Cactus</li>
                            <li>Okra</li>
                            <li>Olives</li>
                            <li>Onions</li>
                            <li>Poke salad – greens</li>
                            <li>
                              Sea Vegetables (wakame/dulse/arame/hijiki/nori)
                            </li>
                            <li>Squash</li>
                            <li>Tomato – cherry and plum only</li>
                            <li>Tomatillo</li>
                            <li>Turnip greens</li>
                            <li>Zucchini</li>
                            <li>Watercress</li>
                            <li>Purslane (Verdolaga)</li>
                            <li>
                              Fruits (Dr. Sebi says, “No canned or seedless
                              fruits.”)
                            </li>
                            <li>Apples</li>
                            <li>
                              Bananas – the smallest one or the Burro/mid-size
                              (original banana)
                            </li>
                            <li>
                              Berries – all varieties- Elderberries in any form
                              – no cranberries
                            </li>
                            <li>Cantaloupe</li>
                            <li>Cherries</li>
                            <li>Currants</li>
                            <li>Dates</li>
                            <li>Figs</li>
                            <li>Grapes- seeded</li>
                            <li>Limes (key limes preferred with seeds)</li>
                            <li>Mango</li>
                            <li>Melons- seeded</li>
                            <li>
                              Orange (Seville or sour preferred, difficult to
                              find)
                            </li>
                            <li>Papayas</li>
                            <li>Peaches</li>
                            <li>Pear</li>
                            <li>Plums</li>
                            <li>Prickly Pear (Cactus Fruit)</li>
                            <li>Prunes</li>
                            <li>Raisins –seeded</li>
                            <li>Soft Jelly Coconuts</li>
                            <li>Soursops – (Latin or West Indian markets)</li>
                            <li>Tamarind</li>
                            <li>Grains</li>
                            <li>Amaranth</li>
                            <li>Fonio</li>
                            <li>Kamut</li>
                            <li>Quinoa</li>
                            <li>Rye</li>
                            <li>Spelt</li>
                            <li>Teff</li>
                            <li>Wild Rice</li>
                            <li>Natural Herbal Teas</li>
                            <li>Allspice</li>
                            <li>Anise</li>
                            <li>Burdock</li>
                            <li>Chamomile</li>
                            <li>Elderberry</li>
                            <li>Fennel</li>
                            <li>Ginger</li>
                            <li>Raspberry</li>
                            <li>Tila</li>
                            <li>Spices and Seasonings</li>
                            <li>Mild Flavors</li>
                            <li>Basil</li>
                            <li>Bay leaf</li>
                            <li>Cloves</li>
                            <li>Dill</li>
                            <li>Oregano</li>
                            <li>Parsley</li>
                            <li>Savory</li>
                            <li>Sweet Basil</li>
                            <li>Tarragon</li>
                            <li>Thyme</li>
                            <li>Pungent and Spicy Flavors</li>
                            <li>Achiote</li>
                            <li>Cayenne/ African Bird Pepper</li>
                            <li>Coriander (Cilantro)</li>
                            <li>Onion Powder</li>
                            <li>Habanero</li>
                            <li>Sage</li>
                            <li>Salty Flavors</li>
                            <li>Pure Sea Salt</li>
                            <li>
                              Powdered Granulated Seaweed (Kelp/Dulce/Nori – has
                              “sea taste”)
                            </li>
                            <li>Sweet Flavors</li>
                            <li>100% Pure Agave Syrup – (from cactus)</li>
                            <li>Date Sugar</li>
                            <li>
                              Nuts and Seeds – (includes Nut and Seed Butters)
                            </li>
                            <li>Hemp Seed</li>
                            <li>Raw Sesame Seeds</li>
                            <li>Raw Sesame Tahini Butter</li>
                            <li>Walnuts</li>
                            <li>Brazil Nuts</li>
                            <li>Oils</li>
                            <li>Olive Oil (Do not cook)</li>
                            <li>Coconut Oil (Do not cook)</li>
                            <li>Grapeseed Oil</li>
                            <li>Sesame Oil</li>
                            <li>Hempseed Oil</li>
                            <li>Avocado Oil</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-10'>
                  <div className='diet-chart'>
                    <h4>ALL OR RELATIVELY STARCHLESS/MUCUS-LESS</h4>
                    {/* RAW VEGETABLES, ROOTS, STEMS AND FRUIT */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-less-5'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#rawVegies'
                            aria-expanded='false'
                            aria-controls='rawVegies'
                          >
                            RAW VEGETABLES, ROOTS, STEMS AND FRUIT
                          </a>
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
                            <li className='font_8'>Asparagus</li>
                            <li className='font_8'>Black Radish, with skin</li>
                            <li className='font_8'>Brussels Sprouts</li>
                            <li className='font_8'>Celery</li>
                            <li className='font_8'>Cucumbers</li>
                            <li className='font_8'>Dandelion</li>
                            <li className='font_8'>Dill</li>
                            <li className='font_8'>Endives</li>
                            <li className='font_8'>Green Onions</li>
                            <li className='font_8'>Horse Radish, with skin</li>
                            <li className='font_8'>Leeks</li>
                            <li className='font_8'>Onions</li>
                            <li className='font_8'>
                              Peppers (Green, Red, Yellow, or Orange)
                            </li>
                            <li className='font_8'>Red Beets</li>
                            <li className='font_8'>Red Cabbage</li>
                            <li className='font_8'>Rhubarb</li>
                            <li className='font_8'>Sea Vegetables</li>
                            <li className='font_8'>
                              Sprouts (Alfalfa, Brassica, Green-Leaf, Radish)
                            </li>
                            <li className='font_8'>Sugar Beets</li>
                            <li className='font_8'>Tomatoes</li>
                            <li className='font_8'>Young Radish</li>
                            <li className='font_8'>Zucchini</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* 100% FRUIT JELLIES, SYRUPS AND HONEY */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-less-6'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#fruitJellies'
                            aria-expanded='false'
                            aria-controls='fruitJellies'
                          >
                            100% FRUIT JELLIES, SYRUPS, AND HONEY
                          </a>
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
                            <li className='font_8'>Asparagus</li>
                            <li className='font_8'>Black Radish, with skin</li>
                            <li className='font_8'>Brussels Sprouts</li>
                            <li className='font_8'>Celery</li>
                            <li className='font_8'>Cucumbers</li>
                            <li className='font_8'>Dandelion</li>
                            <li className='font_8'>Dill</li>
                            <li className='font_8'>Endives</li>
                            <li className='font_8'>Green Onions</li>
                            <li className='font_8'>Horse Radish, with skin</li>
                            <li className='font_8'>Leeks</li>
                            <li className='font_8'>Onions</li>
                            <li className='font_8'>
                              Peppers (Green, Red, Yellow, or Orange)
                            </li>
                            <li className='font_8'>Red Beets</li>
                            <li className='font_8'>Red Cabbage</li>
                            <li className='font_8'>Rhubarb</li>
                            <li className='font_8'>Sea Vegetables</li>
                            <li className='font_8'>
                              Sprouts (Alfalfa, Brassica, Green-Leaf, Radish)
                            </li>
                            <li className='font_8'>Sugar Beets</li>
                            <li className='font_8'>Tomatoes</li>
                            <li className='font_8'>Young Radish</li>
                            <li className='font_8'>Zucchini</li>
                            <li className='font_8'>Agave Nectar</li>
                            <li className='font_8'>Coconut Water</li>
                            <li className='font_8'>
                              Fruit Jellies (with no sugar added)
                            </li>
                            <li className='font_8'>
                              Maple Syrup (100%, no preservatives)
                            </li>
                            <li className='font_8'>
                              Molasses (no preservatives)
                            </li>
                            <li className='font_8'>Manuka Honey</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* BAKED VEGETABLES, ROOTS, STEMS, & FRUIT */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-less-7'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#bakedVegies'
                            aria-expanded='false'
                            aria-controls='bakedVegies'
                          >
                            BAKED VEGETABLES, ROOTS, STEMS, &amp; FRUIT
                          </a>
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
                            <li>Acorn Squash (Baked)</li>
                            <li>Broccoli (Baked or Steamed)</li>
                            <li>Brussels Sprouts (Steamed)</li>
                            <li>Butternut Squash (Baked)</li>
                            <li>Carrots (Steamed)</li>
                            <li>Green Peas (Steamed)</li>
                            <li>Peppers (Green, Red, Yellow, or Orange)</li>
                            <li>Pumpkins (Baked or Steamed)</li>
                            <li>Spaghetti Squash (Baked)</li>
                            <li>Sweet Potato (Baked)</li>
                            <li>Zucchini (Steamed or Baked)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row my-5 justify-content-center'>
                <div className='col-12 text-center mb-5'>
                  <h3 className='mb-2'>MUCUS FORMING FOODS</h3>
                  <h5>LIST OF PUS, ACID, AND MUCUS FORMING FOODS</h5>
                </div>
                <div className='col-lg-6 col-md-10'>
                  <div className='diet-chart'>
                    <h4>MUCUS FORMING FOODS</h4>
                    {/* FLESH (PUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-1'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#flesh'
                            aria-expanded='false'
                            aria-controls='flesh'
                          >
                            FLESH (PUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='flesh'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-1'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>Blood of Animals</li>
                            <li>Eggs (All Kinds)</li>
                            <li>Lard</li>
                            <li>
                              Meat (Beef, Chicken, Horse, Dog, Mutton/Lamb,
                              Turkey, Veal, Pork:
                            </li>
                            <li>
                              Bacon, Ham, Sausage, Gammon, Chitterlings, Pig
                              Feet; Wild Game: Bison, Buffalo, Ostrich, Rabbit,
                              Venison, etc.)
                            </li>
                            <li>Margarine (Made with Animal Fat)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* FISH (PUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-2'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#fish'
                            aria-expanded='false'
                            aria-controls='fish'
                          >
                            FISH (PUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='fish'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-2'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              Crustacean (Crab, Crawfish, Lobster, Shrimp)
                            </li>
                            <li>Fish (All Types)</li>
                            <li>
                              Mollusks (Clam, Oysters, Mussels, Snail, etc.)
                            </li>
                            <li>Roe (Caviar)</li>
                            <li>Salmon</li>
                            <li>Shell Fish</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* DAIRY PRODUCTS (PUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-3'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#dairyProducts'
                            aria-expanded='false'
                            aria-controls='dairyProducts'
                          >
                            DAIRY PRODUCTS (PUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='dairyProducts'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-3'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>Butter, Cow</li>
                            <li>Buttermilk</li>
                            <li>Cheese (All Kinds)</li>
                            <li>Cream</li>
                            <li>Crème fraîche</li>
                            <li>Kefir</li>
                            <li>
                              Milk (All Animals and Kinds; Raw Organic, Skim, 1
                              or 2 %, etc.)
                            </li>
                            <li>Yogurt</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='diet-chart'>
                    <h4>PUS AND/OR VERY MUCUS-FORMING</h4>
                    {/* PROCESSED FOODS (PUS/VERY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-4'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#processedFoods'
                            aria-expanded='false'
                            aria-controls='processedFoods'
                          >
                            PROCESSED FOODS (PUS/VERY MUCUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='processedFoods'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-4'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>Dried Convenience Foods</li>
                            <li>Fast Foods</li>
                            <li>Frozen Convenience Foods</li>
                            <li>Packaged Convenience Foods</li>
                            <li>Processed Meat</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* CONFECTIONARIES/CANDY/SWEETS (PUS OR VERY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-5'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#candies'
                            aria-expanded='false'
                            aria-controls='candies'
                          >
                            CONFECTIONARIES/CANDY/SWEETS (PUS OR VERY
                            MUCUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='candies'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-5'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              <strong>Baked Goods</strong> – All kinds including
                              pies, cakes, pastries, etc.
                            </li>
                            <li>
                              <strong>Candy</strong> – All Types; Bars,
                              Caramels, Chocolate, Fudge, Jelly candies, Rock
                              Candy, Taffy
                            </li>
                            <li>
                              <strong>Gelatin</strong> – Jello
                            </li>
                            <li>
                              <strong>Ice Cream</strong> – Dairy and Non-Dairy
                            </li>
                            <li>
                              <strong>Marshmallow</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* VEGETARIAN/VEGAN PROCESSED FOODS (MODERATE TO VERY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-6'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#processedVegan'
                            aria-expanded='false'
                            aria-controls='processedVegan'
                          >
                            VEGETARIAN/VEGAN PROCESSED FOODS (MODERATE TO VERY
                            MUCUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='processedVegan'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-6'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>Chips (corn, potato, plantain, etc.)</li>
                            <li>
                              Frozen Vegan Breakfast Foods (waffles, etc.)
                            </li>
                            <li>Hummus (processed chickpeas)</li>
                            <li>Lab Grown Animal Tissue</li>
                            <li>Margarine</li>
                            <li>Nutritional Yeast</li>
                            <li>Pasta (egg-free)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* OILS (FATTY AND MILDLY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-7'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#oils'
                            aria-expanded='false'
                            aria-controls='oils'
                          >
                            COOKED OILS (FATTY AND MILDLY MUCUS-FORMING){' '}
                          </a>
                        </h4>
                      </div>
                      <div
                        id='oils'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-7'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              <strong>COOKED OIL</strong> – All types: Avocado
                              Oil, Chia Seed, Coconut, Corn, Cotton Seed, Cotton
                              Seed, Flax Seed, Grape Seed, Hemp Seed, Nut Oils,
                              Olive, Palm, Peanut, Quinoa, Rapeseed (Including
                              Canola), Safflower, Soybean etc.)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* STARCHY OR FATTY VEGETABLES AND FRUITS (MODERATELY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-8'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#starchy'
                            aria-expanded='false'
                            aria-controls='starchy'
                          >
                            STARCHY OR FATTY VEGETABLES AND FRUITS (MODERATELY
                            MUCUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='starchy'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-8'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>COOKED ARTICHOKE</li>
                            <li>Avocados</li>
                            <li>COOKED CASSAVA</li>
                            <li>Cauliflower (Raw)</li>
                            <li>COOKED COCONUT MEAT</li>
                            <li>
                              COOKED OR RAW CORN SHOULD NOT BE CONSUMED AT ALL
                            </li>
                            <li>COOKED DURIAN</li>
                            <li>FUNGUS (COOKED MUSHROOMS)</li>
                            <li>COOKED GREEN PEAS</li>
                            <li>Olives</li>
                            <li>COOKED PARSNIPS</li>
                            <li>Plantains</li>
                            <li>Pumpkins</li>
                            <li>Raw or Baked White Potatoes</li>
                            <li>
                              RAW AND COOKED SQUASHED (WINTER, ACORD, BUTTERNUT,
                              ETC.)
                            </li>
                            <li>RAW AND COOKED SWEET POTATOES</li>
                            <li>COOKED RUTABAGE</li>
                            <li>COOKED TURNIP</li>
                            <li>COOKED UNRIPE BANANA</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-10'>
                  <div className='diet-chart'>
                    <h4>MODERATELY MUCUS FORMING FOODS</h4>
                    {/* CEREALS (MODERATELY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-9'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#cereals'
                            aria-expanded='false'
                            aria-controls='cereals'
                          >
                            CEREALS (MODERATELY MUCUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='cereals'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-9'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              <strong>Breads</strong> – All Kinds; Barley,
                              Black, Rye, White, Graham, Pumpernickel, Zwieback,
                              etc.
                            </li>
                            <li>
                              <strong>Cereal Grains</strong> – All Kinds; Maize,
                              Farina, Kamut, Millet,Oats, Quinoa, Spelt, White
                              Rice, Brown Rice, Whole or Refined Wheat, etc.
                            </li>
                            <li>
                              <strong>Cornmeal</strong>
                            </li>
                            <li>
                              <strong>Pseudo-cereals</strong> – All Kinds;
                              Amaranth, Buckwheat, Chia, Cockscomb, Kañiwa,
                              Quinoa, etc.
                            </li>
                            <li>
                              <strong>Pastas</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* BEANS (MODERATELY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-9'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#cereals'
                            aria-expanded='false'
                            aria-controls='cereals'
                          >
                            BEANS (MODERATELY MUCUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='cereals'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-9'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              <strong>ALL KINDS AND FORMS</strong> – BLACK
                              BEANS, BLACK-EYED PEAS, FAVA BEANS, BUTTER BEANS,
                              CANNELLINI BEANS, CHICKPEAS/GARBANZO BEANS,
                              EDAMAME, GREAT NORTHERN BEANS, ITALIAN BEANS,
                              KIDNEY BEANS, LENTILS, LIMA BEANS, MUNG BEANS,
                              NAVY BEANS, PINTO BEANS, SOY BEANS, SPLIT PEAS,
                              STRING BEANS (GREEN BEANS), WHITE BEANS, ETC.
                            </li>
                            <li>
                              The only beans we would recommend for consumption
                              would be Garbanzo Beans, Lentils, and Split Peas
                              ONLY IF they are sprouted. Sprouting is
                              essentially an indoor farming process that brings
                              LIFE to these plants. To learn more about
                              sprouting and how to perform this process, please
                              visit YAH’KI TV.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* NUTS AND SEEDS (MODERATELY MUCUS-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-10'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#nuts'
                            aria-expanded='false'
                            aria-controls='nuts'
                          >
                            NUTS AND SEEDS (MODERATELY MUCUS-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='nuts'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-10'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              <strong>Nuts</strong> – All Kinds: Acorns,
                              Almonds, Brazil Nuts, Cashews, Chestnuts,
                              Hazelnuts, Pecans, Pistachios, Walnuts, etc.
                            </li>
                            <li>
                              <strong>Seeds</strong> – All Kinds: Sunflower,
                              Pumpkin, Hemp, Sesame, etc.
                            </li>
                            <li>
                              The only nuts/seeds we would recommend consuming
                              would be pecans, brazil nuts, walnuts, pumpkin,
                              hemp, and sesame, if soaked in water (to assist
                              with digestion).
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='diet-chart'>
                    <h4>ACID FORMING STIMULANTS</h4>
                    {/* ACIDIC, FERMENTED, OR DISTILLED DRINKS/SYRUPS (ACID-FORMING STIMULANTS) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-11'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#acidic'
                            aria-expanded='false'
                            aria-controls='acidic'
                          >
                            ACIDIC, FERMENTED, OR DISTILLED DRINKS/SYRUPS
                            (ACID-FORMING STIMULANTS)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='acidic'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-11'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              Alcoholic Beverages – All Kinds: Ale, Beer,
                              Brandy, Champagne, Hard Cider, Liqueur, Mead,
                              Porter, Rum, Sake/Rice Wine, Gin, Herbal Wine,
                              Lager, Fruit Wine, Vodka Whisky, Tequila, etc.
                            </li>
                            <li>
                              Syrups – Brown Rice, Barley Malt, Chocolate, Corn,
                              Artificially Flavored
                            </li>
                            <li>Cocoa</li>
                            <li>Coffee</li>
                            <li>Kombucha Tea</li>
                            <li>Soft Drink (Soda Pop)</li>
                            <li>Tea – All Kinds from the Theaceae family</li>
                            <li>Vinegar – White, Apple Cider</li>
                            <li>Old-fashioned Root Beer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* FERMENTED FOODS AND SAUCES (ACID-FORMING STIMULANTS) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-12'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#fermentedFoods'
                            aria-expanded='false'
                            aria-controls='fermentedFoods'
                          >
                            FERMENTED FOODS AND SAUCES (ACID-FORMING STIMULANTS)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='fermentedFoods'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-12'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              <strong>Fish Sauce</strong>
                            </li>
                            <li>
                              <strong>Fermented Vegetables</strong> – All:
                              Kimchi/cabbage and other veggies, Olives,
                              Pickles/cucumbers. Sauerkraut/cabbage, etc.
                            </li>
                            <li>
                              <strong>Miso</strong>
                            </li>
                            <li>
                              <strong>Sauces with Vinegar –</strong>(Hot Sauce,
                              Ketchup, Mustard, Mayonnaise, Relish, Tartar,
                              Barbecue, Salad Dressings, Salsa, etc.
                            </li>
                            <li>
                              <strong>Soy Sauce</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* PASTEURIZED 100% FRUIT JUICE (POTENTIALLY ACID-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-13'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#fruitJuice'
                            aria-expanded='false'
                            aria-controls='fruitJuice'
                          >
                            PROCESSED FOODS AND SUBSTANCES (POTENTIALLY
                            ACID-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='fruitJuice'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-13'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>
                              Plant milks (grains, nuts, seeds, and legumes
                              including soy, rice, etc.)
                            </li>
                            <li>
                              Plant-based butter (nuts, seeds, and legumes
                              including soy, peanut, etc.)
                            </li>
                            <li>Plant-based creamers</li>
                            <li>Soy Lecithin (food additive)</li>
                            <li>Tempeh</li>
                            <li>
                              Texturized Vegetable Protein (‘mock’ meats
                              including soy, etc.)
                            </li>
                            <li>Tofu</li>
                            <li>Vegan Baked Goods</li>
                            <li>
                              Vegan Confections (All Types; Chocolates, Ice
                              Cream, etc.)
                            </li>
                            <li>Vegan Cheese Substitutes</li>
                            <li>Vegan Mayonnaise</li>
                            <li>Vegan Whipped Cream</li>
                            <li>Yogurts (Plant-based)</li>
                            <li>Pasteurized 100% Fruit Juice </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* SALTS AND SPICES (STIMULANTS/POTENTIALLY ACID-FORMING) */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='mucus-forming-14'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#salts'
                            aria-expanded='false'
                            aria-controls='salts'
                          >
                            SALTS AND SPICES (STIMULANTS/POTENTIALLY
                            ACID-FORMING)
                          </a>
                        </h4>
                      </div>
                      <div
                        id='salts'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='mucus-forming-14'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            <li>Black Peppercorns</li>
                            <li>Cayenne Pepper</li>
                            <li>Chili Powder</li>
                            <li>Cream of Tarter</li>
                            <li>Iodized Salt</li>
                            <li>Imitation Vanilla</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row my-5 text-left glossary'>
                <div className='col-12'>
                  <h4>What are Deceptive Mucus-Formers?</h4>
                  <p>
                    Here is a list of foods that many people do not realize
                    create mucus:
                  </p>
                  {/* Glossary */}
                  <ul className='list-unstyled'>
                    <li>
                      <span className='glossary-word'>Rice</span> – Great for
                      creating glue to bind books, bad for the transition to a
                      mucus-free diet.
                    </li>
                    <li>
                      <span className='glossary-word'>Avocados</span> – Fatty
                      item that may be used on the transition, but are highly
                      addictive. Although technically a fruit, if used it is
                      best to combine them with a mucus-free combination salad
                      or vegetables to aid digestion. However, it is recommended
                      to stay away from them if you are not already stuck to
                      them.
                    </li>
                    <li>
                      <span className='glossary-word'>Nuts </span> –
                      Mucus-forming, but may be used on the transition. It is
                      best to eat with dried fruits like raisins to aid with
                      elimination.
                    </li>
                    <li>
                      <span className='glossary-word'>Plantains</span> – Starchy
                      and mucus forming.
                    </li>
                    <li>
                      <span className='glossary-word'>Tofu</span> – Slimy and
                      mucus-forming.
                    </li>
                    <li>
                      <span className='glossary-word'>
                        Un-ripened fruits like green bananas
                      </span>{' '}
                      – The riper the fruit you eat the better.
                    </li>
                    <li>
                      <span className='glossary-word'>Corn</span> – It does not
                      eliminate well. When cooked, corn becomes mushy and slimy
                      in the intestines, therefore, hard to digest.
                    </li>
                    <li>
                      <span className='glossary-word'>Corn chips</span> – Some
                      people use them on the transition, but they are very
                      addictive and do not eliminate well.
                    </li>
                    <li>
                      <span className='glossary-word'>Beans</span> – They are
                      starchy and mucus-forming. But, they may be used sparingly
                      on the transition, preferably served with green-leafy
                      salads. Beans are also best consumed if sprouted.
                    </li>
                    <li>
                      <span className='glossary-word'>Starchy Vegetables</span>{' '}
                      – Some vegetables are starchy and mucus-forming in raw or
                      cooked forms, such as white potatoes. But, many other
                      vegetables, such as sweet potatoes, become almost
                      mucus-free (starch-less) after proper cooking.
                    </li>
                  </ul>
                </div>
                {/* Additional Notes */}
                <div className='col-12 additional-notes mt-5'>
                  <h4>Additional Notes:</h4>
                  <ul className='list-unstyled'>
                    <li>
                      No Animal Products, No Fish, No Hybrid Foods, No Alcohol
                    </li>
                    <li>Avoid using Microwave as it will “Kill your food”</li>
                    <li>No Canned or Seedless Fruits</li>
                  </ul>
                </div>
              </div>
              <AllHerbs />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default EattotLive
