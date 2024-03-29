import Footer from '../components/Footer'
import Header from '../components/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, imageURL } from '../utils/api'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FeaturedProductsSlider from '../components/FeaturedProductsSlider'
import AllHerbs from '../components/AllHerbs'
import ImageLazyLoad from '../components/ImageLazyLoad'
import ReactPlayer from 'react-player/lazy'

const isWindowContext = typeof window !== 'undefined'

const Index = ({ history }) => {
  const [product, setproduct] = useState([])
  const [selectedheral, setselectedheral] = useState()
  const [filteredproducts, setfilteredproducts] = useState([])

  const [allofcategory, setallofcategory] = useState([])

  const [selectedproduct, setselectedproduct] = useState('')
  const [videouri, setvideouri] = useState('')
  const [thumbnail, setthumbnail] = useState('')

  const [featuredproducts, setfeaturedproducts] = useState([])
  const [bitternadelement, setbitternadelement] = useState([])
  const [herbalproducts, setherbalproducts] = useState([
    // 'Consultations',
    'Geo’Genetics',
    'Teas',
    'Tinctures',
    'Capsules',
    'Tonics',
    'Kits & Bundle',
    'Hygiene',
    'Soaps',
    'Sea Herbs',
    // 'Oral Care',
    'Oils',
    'Salves',
  ])

  const [loading, setloading] = useState(false)
  const herbalsupport = [
    {
      name: `The Muscular System 
  (Tissue Health)`,
    },
    {
      name: `The Integumentary System (Skin/ Hair/ Nails Health)
  `,
    },
    {
      name: `The Skeletal System 
  (Bone Health) 

  `,
    },
    {
      name: `The Nervous System
  (Brain, Nerves, Adrenal Health)
  `,
    },
    {
      name: `The Urinary System
  `,
    },
    {
      name: `The Digestive System
  (Gut Health)
  `,
    },
    {
      name: `The Endocrine System
  (The Glands Health)

  `,
    },
    {
      name: `The Respiratory System
  (Lungs, Bronchial Health)
  `,
    },
    {
      name: `The Lymphatic System Health 
  `,
    },
    {
      name: `The Cardiovascular System
  Heart/Blood/Arteries Health


  `,
    },
    {
      name: `Reproductive Systems Health 

  `,
    },

    {
      name: `Oral Health

  `,
    },
  ]

  const detoxdesired = [
    'Moderate Detox',
    'Advanced Detox',
    'Intense Detox',
    'Revitalize/ReBuild Detox',
    'Preventive Maintenance Detox',
  ]
  useEffect(() => {
    gettingProducts()
  }, [])
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const gettingProducts = async () => {
    setloading(true)
    try {
      const res = await axios({
        url: `${baseURL}/product/getlimitedProducts`,
        method: 'GET',
      })
      setloading(false)
      const ress = await axios({
        url: `${baseURL}/product/bittersandElementProducts`,
        method: 'GET',
      })
      await setbitternadelement(ress?.data?.product)
      console.log('ressss', ress)
      setproduct(res?.data?.products)
      const res2 = await axios({
        url: `${baseURL}/auth/getVideo`,
        method: 'GET',
      })
      console.log('res2', res2)
      setvideouri(res2?.data?.video?.video)
      setthumbnail(res2?.data?.video?.thumbnail)
    } catch (err) {
      console.log(err)
      setloading(false)
    }
    setloading(false)
  }
  useEffect(() => {
    gettingallCategoriesHandler()
    gettingFeaturedProductHandler()
  }, [])
  const gettingallCategoriesHandler = async () => {
    const res = await axios.get(`${baseURL}/category/allOfCategories`, {})
    console.log('res', res)
    setallofcategory(res?.data?.getAllCategories)
    sessionStorage.setItem(
      'categories',
      JSON.stringify(res?.data?.getAllCategories)
    )
  }

  // const gettingproductsbyCategoryidHandler = async (id) => {
  //   const res = await axios.get(
  //     `${baseURL}/product/getproductsbycategoryid/${id}`
  //   );
  //   console.log("res", res);
  //   setprdouctbycategories(res?.data?.products);
  // };
  // const productViewRedirectHandler = async (id) => {
  //   history?.push(`/ProductView/${id}`);
  // };
  const gettingFeaturedProductHandler = async (id) => {
    const res = await axios.get(`${baseURL}/product/featuredProducts`)
    console.log('re2s', res)
    setfeaturedproducts(res?.data?.products)
  }
  // const productViewRedirectHandler = async (id) => {
  //   history?.push(`/ProductView/${id}`)
  // }
  // const showPopupHanlder = () => {
  //   console.log('isWindowContext', isWindowContext)
  // }

  // const closeModalHandler = () => {
  //   var element = document.getElementById('overlay')
  //   element.classList.remove('show')

  //   // isWindowContext && window?.$('#overlay').remove('show')
  //   sessionStorage.setItem('pop_status', 3)
  // }

  // const closeModalHandler2 = () => {
  //   isWindowContext && window?.$('#overlay').remove('show')
  //   console.log('closeModalHandler2')
  //   window.location.replace('https://www.google.com')
  // }
  const categoryFilterHandler = (value) => {
    console.log('value', value, typeof value)
    setselectedheral(value)
    const abc = []
    setherbalproducts([])
    console.log('herbalproducts1', herbalproducts)
    if (value?.includes('The Muscular System')) {
      console.log('helllo')
      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Sea Herbs',
        'Tonics',
        'Oils',
        'Salves',
        'Kits & Bundle'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Integumentary System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Oils',
        'Salves',
        'Hygiene',
        'Soaps',
        'Sea Herbs',
        'Kits & Bundle'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Skeletal System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Oils',
        'Sea Herbs',
        'Tonics'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Nervous System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Tonics',
        'Oils',
        'Sea Herbs'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Urinary System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Tonics',
        'Oils',
        'Sea Herbs'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Digestive System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Tonics',
        'Oils',
        'Sea Herbs'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Endocrine System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Tonics',
        'Oils',
        'Sea Herbs'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Respiratory System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Tonics',
        'Oils',
        'Sea Herbs'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Lymphatic System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Tonics',
        'Oils',
        'Sea Herbs'
      )
      setherbalproducts([...abc])
    } else if (value?.includes(`The Cardiovascular System`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Tonics',
        'Sea Herbs'
      )
      setherbalproducts([...abc])
    }
    // else if (value?.includes(`Reproductive Systems Health`)) {
    //   console.log('helllo2')

    //   abc.push('Capsules', 'Teas', 'Tinctures')
    //   setherbalproducts([...abc])
    // }
    else if (value?.includes(`Oral Health`)) {
      console.log('helllo2')

      abc.push(
        'Capsules',
        'Teas',
        'Tinctures',
        'Kits & Bundle',
        'Oils',
        'Sea Herbs',
        'Hygiene'
      )
      setherbalproducts([...abc])
    }
    console.log('herbalproducts2', herbalproducts)
  }
  const setCategoryHandler = (val) => {
    if (val?.includes('Consultations')) {
      history.push('/Consultation')
    } else if (selectedheral?.includes('The Muscular System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'ATOMIC STRENGTHENER CAPSULES',
          'Black Seed Oil Capsules',
          'BLOOD PURIFIER CAPSULES',
          'Brain, Nerve & Adrenal Capsules',
          'CALCIUM TRI PHOSPHATE CAPSULES',
          'ENDOCRINO BALANCE CAPSULES',
          'GI SUPER MOVER CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Liver & Gall Bladder Capsules',
          'Lymphatic Sweep Tonic Capsules',
          'TURMERIC AND GINGER INFUSION CAPSULES',
          'Superfood+ Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          'Red Clover Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'ATOMIC STRENGTHENER TINCTURE',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BLOOD PURIFIER TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'Calcium Tri-Phosphate Tincture	',
          'CIRCULATORY HIGH TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'THYROID & PARATHYROID SUPPORT',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD EGYPTIAN TURMERIC OIL',
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Salves') {
        setfilteredproducts(['100% WILD EGYPTIAN TURMERIC OIL'])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC KIT',
          'BLOOD PURIFIER BUNDLE',
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
          'REVITALIZE & REBUILD KIT',
        ])
      }
    } else if (selectedheral?.includes('The Integumentary System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'ATOMIC STRENGTHENER CAPSULES',
          'Black Seed Oil Capsules',
          'BLOOD PURIFIER CAPSULES',
          'Brain, Nerve & Adrenal Capsules',
          'CALCIUM TRI PHOSPHATE CAPSULES',
          'ENDOCRINO BALANCE CAPSULES',
          'GI SUPER MOVER CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Liver & Gall Bladder Capsules',
          'Lymphatic Sweep Tonic Capsules',
          'TURMERIC AND GINGER INFUSION CAPSULES',
          'Superfood+ Capsules',
        ])
      } else if (val == 'Hygiene') {
        setfilteredproducts(['Shea Butter '])
      } else if (val == 'Soaps') {
        setfilteredproducts([
          'PURPLE SEA MOSS & ALKANET ROOT SOAP BARS',
          'GOLDEN SEA MOSS & TURMERIC ROOT SOAP BARS	',
          'LAVENDER SOAP BAR',
          'HERBAL LEMONGRAS SOAP BAR',
          'TEA TREE & PARSLEY SOAP BAR',
          'OREGANO SOAP BAR',
          'Charcoal Soaps Bar',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          'Red Clover Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'ATOMIC STRENGTHENER TINCTURE',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BLOOD PURIFIER TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'Calcium Tri-Phosphate Tincture	',
          'CIRCULATORY HIGH TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'THYROID & PARATHYROID SUPPORT',
          'Liver and Gall Bladder Tincture',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD EGYPTIAN TURMERIC OIL',
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Salves') {
        setfilteredproducts(['100% WILD EGYPTIAN TURMERIC OIL'])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC KIT',
          'BLOOD PURIFIER BUNDLE',
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
          'REVITALIZE & REBUILD KIT',
        ])
      }
    } else if (selectedheral?.includes('The Skeletal System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'ATOMIC STRENGTHENER CAPSULES',
          'BLOOD PURIFIER CAPSULES',
          'Brain, Nerve & Adrenal Capsules',
          'CALCIUM TRI PHOSPHATE CAPSULES',
          'Superfood+ Capsules',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Lymphatic Sweep Tonic Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'TURMERIC AND GINGER INFUSION CAPSULES',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          'Red Clover Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'ATOMIC STRENGTHENER TINCTURE',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BLOOD PURIFIER TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'Calcium Tri-Phosphate Tincture	',
          'CIRCULATORY HIGH TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'THYROID & PARATHYROID SUPPORT',
        ])
      } else if (val == 'Salves') {
        setfilteredproducts(['100% WILD EGYPTIAN TURMERIC OIL'])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC KIT',
          'BLOOD PURIFIER BUNDLE',
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
          'REVITALIZE & REBUILD KIT',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD EGYPTIAN TURMERIC OIL',
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      }
    } else if (selectedheral?.includes('The Nervous System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'Brain, Nerve & Adrenal Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Lymphatic Sweep Tonic Capsules',
          'BRAIN NERVE VITALMAX CAPSULES',
          'Superfood+ Capsules',
          'Parasite Elimination Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'Parasite Elimination Tinctures',
          'BRAIN NERVE VITALMAX',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts(['Mediterranean Oregano Oil'])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
        ])
      }
    } else if (selectedheral?.includes('The Urinary System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'Brain, Nerve & Adrenal Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'GI SUPER MOVER CAPSULES',
          'Liver & Gall Bladder Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
          'Red Clover Tea',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'LIVER & GALLBLADDER SUPPORT',
          'Lymphatic Sweep Tonic Tincture',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC KIT',
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
        ])
      }
    } else if (selectedheral?.includes('The Digestive System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'Brain, Nerve & Adrenal Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'GI SUPER MOVER CAPSULES',
          'CALCIUM TRI PHOSPHATE CAPSULES',
          'Lymphatic Sweep Tonic Capsules',
          'TURMERIC AND GINGER INFUSION CAPSULES',
          'Superfood+ Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
          'DIGESTIVE RESTORATION TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD EGYPTIAN TURMERIC OIL',
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC KIT',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
        ])
      }
    } else if (selectedheral?.includes('The Endocrine System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'ATOMIC STRENGTHENER CAPSULES',
          'BLOOD PURIFIER CAPSULES',
          'Brain, Nerve & Adrenal Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Lymphatic Sweep Tonic Capsules	',
          'TURMERIC AND GINGER INFUSION CAPSULES',
          'Superfood+ Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          'Red Clover Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'ATOMIC STRENGTHENER TINCTURE',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BLOOD PURIFIER TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'CIRCULATORY HIGH TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'THYROID & PARATHYROID SUPPORT',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD EGYPTIAN TURMERIC OIL',
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC KIT',
          'BLOOD PURIFIER BUNDLE',
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
        ])
      }
    } else if (selectedheral?.includes('The Respiratory System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'ATOMIC STRENGTHENER CAPSULES',
          'BLOOD PURIFIER CAPSULES',
          'Brain, Nerve & Adrenal Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Lymphatic Sweep Tonic Capsules	',
          'TURMERIC AND GINGER INFUSION CAPSULES',
          'Superfood+ Capsules',
          'CAYENNE PEPPER CAPSULES',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          'Red Clover Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'CIRCULATORY HIGH TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'THYROID & PARATHYROID SUPPORT',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD EGYPTIAN TURMERIC OIL',
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
        ])
      }
    } else if (selectedheral?.includes('The Lymphatic System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'ATOMIC STRENGTHENER CAPSULES',
          'BLOOD PURIFIER CAPSULES',
          'Brain, Nerve & Adrenal Capsules',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Lymphatic Sweep Tonic Capsules	',
          'TURMERIC AND GINGER INFUSION CAPSULES',
          'Superfood+ Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          'Red Clover Tea',
          '3BITTERS',
          'NEEM LEAF TEA',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'Astringent X Tincture',
          'ATOMIC STRENGTHENER TINCTURE',
          'BLACK OLIVE LEAF EXTRACT TINCTURE',
          'BLOOD PURIFIER TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'CIRCULATORY HIGH TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
          'DIGESTIVE RESTORATION TONIC',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts([
          '100% WILD EGYPTIAN TURMERIC OIL',
          '100% WILD INDIA GINGER OIL',
          'INDIA NEEM EXTRACT OIL',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC KIT',
          'BLOOD PURIFIER BUNDLE',
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS CAPSULES',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'FOUNDATION FOURS TINCTURES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
        ])
      }
    } else if (selectedheral?.includes('The Cardiovascular System')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'Brain, Nerve & Adrenal Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Lymphatic Sweep Tonic Capsules	',
          'Superfood+ Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts([
          'Cellular Regeneration Tea',
          'Red Clover Tea',
          '3BITTERS',
        ])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'Calcium Tri-Phosphate Tincture	',
          'CIRCULATORY HIGH TINCTURE',
          'CIRCULATORY LOW TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'THYROID & PARATHYROID SUPPORT',
        ])
      } else if (val == 'Tonics') {
        setfilteredproducts([
          'BITTER LIQUID MINERAL BALANCE TONIC',
          'LYMPHATIC SYSTEM SWEEP TONIC',
        ])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'Essential Glandular Endocrine Kit',
          'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
        ])
      }
    }
    // else if (selectedheral?.includes('Reproductive Systems Health')) {
    //   if (val == 'Capsules') {
    //     setfilteredproducts([
    //       'Brain Nerve Vitalmax Capsules',
    //       'Inner-Cellular Cleanse Capsules',
    //       'Parasite Elimination Capsules',
    //       'Brain, Nerve & Adrenal Capsules',
    //       'Endocrino Capsules',
    //       'GI Super Mover Capsules',
    //       'Blood Purifier Capsules',
    //       'Calcium Tri-Phosphate Capsules',
    //       'Atomic Strengthener Capsules',
    //       'Lymphatic System Detox Capsules',
    //       'Cayenne Pepper Capsules',
    //       'Adult All Purpose Vitamin Capsules',
    //       'Turmeric Infusion Capsules',
    //       'Superfood Powder Plus Capsules',
    //     ])
    //   } else if (val == 'Teas') {
    //     setfilteredproducts([
    //       'Brain Nerve Vitalmax Tea',
    //       'Cellular Regeneration Tea',
    //       'Revitalizer Tea',
    //       '3BITTERS',
    //       'IV Elements',
    //       'Burdock Root Tea',
    //     ])
    //   } else if (val == 'Tinctures') {
    //     setfilteredproducts([
    //       'Brain Nerve Vitalmax Tincture',
    //       'Inner-Cellular Cleanse Tincture',
    //       'Parasite Elimination Tincture',
    //       'Brain, Nerve, & Adrenal Tincture',
    //       'Endocrino Tincture',
    //       'GI Super Mover Tincture',
    //       'Blood Purifier Tincture',
    //       'Calcium Tri-Phosphate Tincture',
    //       'Atomic Strengthener Tincture',
    //       'Lymphatic System Sweep Tonic Tincture',
    //     ])
    //   }
    // }
    else if (selectedheral?.includes('Oral Health')) {
      if (val == 'Capsules') {
        setfilteredproducts([
          'All Purpose Adult Vitamin Capsules',
          'ATOMIC STRENGTHENER CAPSULES',
          'CALCIUM TRI PHOSPHATE CAPSULES',
          'Brain, Nerve & Adrenal Capsules',
          'ENDOCRINO BALANCE CAPSULES',
          'INNER-CELLULAR CLEANSE CAPSULES',
          'Lymphatic Sweep Tonic Capsules	',
          'Superfood+ Capsules',
        ])
      } else if (val == 'Teas') {
        setfilteredproducts(['Cellular Regeneration Tea', 'NEEM LEAF TEA'])
      } else if (val == 'Tinctures') {
        setfilteredproducts([
          'ATOMIC STRENGTHENER TINCTURE',
          'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
          'Calcium Tri-Phosphate Tincture	',
          'CIRCULATORY HIGH TINCTURE',
          'ENDOCRINO BALANCE TINCTURE',
          'Inner-Cellular Cleanse Tincture',
          'Lymphatic Sweep Tonic Tincture',
          'THYROID & PARATHYROID SUPPORT',
        ])
      } else if (val == 'Oils') {
        setfilteredproducts(['INDIA NEEM EXTRACT OIL'])
      } else if (val == 'Hygiene') {
        setfilteredproducts(['Tooth & Gum Powder '])
      } else if (val == 'Sea Herbs') {
        setfilteredproducts([
          'Aeolian Islands Bladderwrack',
          'DULSE (PALMARIA PALMATA)',
          'Kelp Sea',
          'Raw Organic Sea Moss',
        ])
      } else if (val == 'Kits & Bundle') {
        setfilteredproducts([
          'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
          'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
          'INNER-CELLULAR CLEANSE BUNDLE',
          'KIDNEY & ADRENAL KIT',
          'LYMPHATIC SYSTEM SWEEP KIT',
          'REVITALIZE & REBUILD KIT',
        ])
      }
    }
  }
  return (
    <>
      <Header />

      <section className='main-banner'>
        <div className='container-fluid h-100'>
          <div className='row align-items-end justify-content-center h-100 pt-5 pb-4'>
            {/* <div className="col-lg-7 col-md-10 col-xl-5 text-center">
              <h1
                className="banner-h1 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
              >
                the body was created <br />{" "}
                <span class="heading-break">to heal itself...</span>
              </h1>
              <h2
                className="banner-h2 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                if provided with the right environmental conditions!
              </h2>
              <Link
                to="/Capsules"
                className="btn banner-btn aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
                data-aos-delay={400}
              >
                find out how
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='row align-items-center justify-content-center my-md-4  pb-3'>
          <div
            className='col-lg-6 col-md-8 mx-auto my-3 aos-init aos-animate'
            data-aos='fade-up'
            data-aos-duration={3000}
            style={{ width: 540, height: 405 }}
          >
            {/* <iframe
              width='100%'
              height='100%'
              frameborder='0'
              allowfullscreen
              src='https://drive.google.com/file/d/1RbLabw2qJkQUjo0Yykuyheyo4EiZ7K65/preview'
            ></iframe> */}
            {videouri?.length > 0 && (
              <ReactPlayer
                playing={true}
                controls={true}
                url={`${imageURL}${videouri}`}
                light={`${imageURL}${thumbnail}`}
                width='100%'
                height='100%'
              />

              // <video
              //   width='100%'
              //   height='100%'
              //   poster={`${imageURL}${thumbnail}`}
              //   controls
              // >
              //   <source src={`${imageURL}${videouri}`} type='video/mp4' />
              //   Your browser does not support HTML video.
              // </video>
            )}
            {/* <iframe
              src=' https://www.veed.io/view/d348e815-0300-47dd-95c4-89187db63a63?sharingWidget=true&panel=share'
              width='744'
              height='504'
              frameborder='0'
              title='YAHKI WEBSITE COMMERCIAL.mp4'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe> */}

            {/* <img
              src="images/Yahki-awakened-welcome-image.jpg"
              alt=""
              className="img-fluid"
            /> */}
          </div>

          <div
            className='col-lg-6 col-md-8 mx-auto my-3 aos-init aos-animate'
            data-aos='fade-down'
            data-aos-duration={3000}
          >
            <p className='yahki-p pl-4' style={{ textAlign: 'center' }}>
              THE BODY WAS CREATED TO HEAL & REGENERATE ITSELF! IF PROVIDED WITH
              THE RIGHT ENVIRONMENTAL CONDITIONS! EXPERIENCE POWERFUL HERBAL
              THERAPY NOW WITH THE WORLD'S RENOWNED MASTER HEALER YAH'KI RAPHA
              EL AWAKENED!{' '}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ImageLazyLoad
                src='images/yahki-awakened.png'
                alt=''
                classname='img-fluid w-100 mt-4'
              />
            </div>
          </div>
          <div className='filteration'>
            <div className='container py-4'>
              <div className='row my-5 align-items-start justify-content-between'>
                <div className='col-12'>
                  {' '}
                  <h6 className='text-uppercase'>Healing Assistance</h6>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='form-group my-3'>
                    <select
                      className='form-control'
                      placeholder=''
                      id='helpWith'
                      onChange={(e) => {
                        categoryFilterHandler(e.target.value)
                      }}
                      // value={catid}
                      // onChange={(event) => {
                      //   setcatid(event.target.value);
                      //   gettingproductsbyCategoryidHandler(event.target.value);
                      // }}
                    >
                      <option value='' disabled selected>
                        I Need Herbal Support For
                      </option>

                      {herbalsupport?.length > 0 &&
                        herbalsupport?.map((herb) => (
                          <option value={herb?.name}>{herb?.name}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='form-group my-3'>
                    <select
                      className='form-control'
                      id='formula'
                      onChange={(event) => {
                        setCategoryHandler(event.target.value)
                        // productViewRedirectHandler(event.target.value);
                      }}
                    >
                      <option value='' disabled selected>
                        Herbal Products
                      </option>
                      {herbalproducts?.length > 0 &&
                        herbalproducts?.map((herb) => (
                          <option value={herb}>{herb}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='form-group my-3'>
                    <select
                      className='form-control'
                      id='helpWith'
                      value={selectedproduct}
                      onChange={(event) => {
                        setselectedproduct(event.target.value)
                        // gettingproductsbyCategoryidHandler(event.target.value);
                      }}
                    >
                      <option value='' disabled selected>
                        Detox Desired
                      </option>
                      {filteredproducts?.length > 0 &&
                        filteredproducts?.map((det) => (
                          <option value={det}>{det}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className='col-12 my-2 text-center'>
                  <Link
                    to='#'
                    onClick={() => {
                      selectedproduct?.length > 0 &&
                        history?.push(`/ProductViewByName/${selectedproduct}`)
                    }}
                    className='btn maroon-btn-solid d-inline-block py-2 px-5'
                  >
                    Find
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='featured'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-11 mx-auto'>
                <div className='row'>
                  <div className='col-md-12 text-center'>
                    <h4>Trending Products</h4>
                    <h3>Featured Products</h3>
                  </div>
                </div>
                <div className='row mt-5'>
                  <div className='col-md-10 col-xs-12 mx-auto text-center'>
                    <div id=''>
                      {/* <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-1.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-2.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-3.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-4.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-1.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-2.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-3.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-4.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div> */}

                      <FeaturedProductsSlider
                        show={2}
                        history={history}
                        images={featuredproducts}
                        userInfo={userInfo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className='about-company '
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                style={{ height: 385, width: 430 }}
                src='images/digestive_system.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                RESTORE YOUR DIGESTIVE SYSTEM
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Improve your mood and mobility by efficiently cleansing your gut
              </p>
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                ABSORB NUTRIENTS TO REBUILD
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Improve your uptake of minerals and intake of amino acids
              </p>
            </div>
            <div className='col-xl-6 col-10'>
              <img
                style={{ height: 350, width: 330 }}
                src='images/Closed-circulatory-system.png'
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                src='images/maximizefood.png'
                style={{ height: 250, width: 280 }}
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                MAXIMIZE ON THE FOODS YOU ARE DIGESTING
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Improve your utilization factory’s benefit from all you consume
              </p>
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                CREATE AN ELIMINATION PATHWAY
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Your body must eliminate what it accumulates Experience now
              </p>
              <div style={{ height: 40 }}></div>
            </div>
            <div className='col-xl-6 col-10'>
              <img
                style={{ height: 240, width: 300 }}
                src='images/lymphatic-system2.png'
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                style={{
                  height: window.innerWidth < 550 ? 200 : 390,
                  width: 690,
                }}
                src='images/brain.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                IMPROVE YOUR CLARITY & FOCUS
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Reach a state of peace and happiness never before experienced
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 30 }}></div>
      <div
        className='yahki-features '
        style={{
          backgroundImage: 'none',
          backgroundColor: '#fff',
          color: '#000',
          paddingBottom: 0,
        }}
      >
        <div className='container mt-5 pt-3'>
          <div className='row text-center'>
            <div className='col-lg-4'>
              <i
                className='fas fa-light fa-headset fa-5x '
                style={{ fontSize: 85 }}
              />{' '}
              <h3 className='my-4'>CONSULT AN EXPERT</h3>
              <p>Members can chat one on one with a counselor or therapist</p>
              <Link
                style={{ color: '#000' }}
                to='/Consultation'
                className='linear-white-link my-5'
              >
                learn more
              </Link>
            </div>
            <div className='col-lg-4'>
              <i
                className='fas fa-solid fa-cart-plus fa-5x '
                style={{ fontSize: 85 }}
              />{' '}
              <h3 className='my-4'>SHOP ONLINE</h3>
              <p>
                Members can shop online 24/7 from our exclusive Members Only Top
                Quality Herbal Alkaline products.
              </p>
              <Link
                style={{ color: '#000' }}
                to='/Capsules'
                className='linear-white-link my-5'
              >
                learn more
              </Link>
            </div>
            <div className='col-lg-4'>
              <i
                className='fas fa-solid fa-tv fa-5x '
                style={{ fontSize: 85 }}
              />{' '}
              <h3 className='my-4'>MULTIMEDIA COURSES</h3>
              <p>
                Premiere Members can view our media gallery with exclusive
                access to all of our videos and courses.
              </p>
              <Link
                to='#'
                style={{ color: '#000' }}
                className='linear-white-link my-5'
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-md-5 my-0 py-3'>
        <div className='row my-0'>
          <div className='col-12 text-center'>
            <p className='yahki-blockquote' style={{ fontSize: 28 }}>
              “And by the river upon the bank thereof, on this side and on that
              side, shall grow all trees for meat, whose leaf shall not fade,
              neither shall the fruit thereof be consumed: it shall bring forth
              new fruit according to his months, because their waters they
              issued out of the sanctuary: and the fruit thereof shall be for
              meat, and the leaf thereof for medicine.”
            </p>
          </div>
        </div>
      </div>

      {/* <div className='must-watch-video'>
        <div className='container-fluid'>
          <div className='row g-0'>
            <div className='col-12 px-0'>
              <div className='video-container'>
                <video autoPlay muted loop>
                  <source src='images/must-watch.mp4' type='video/mp4' />
                </video>
                <div className='caption'>
                  <h4 className='mb-4'>MUST WATCH</h4>
                  <Link to='#' className='play-btn' id='headerVideoLink'>
                    <i className='far fa-play my-4' />
                  </Link>
                  <p className='mt-4'>
                    ALL DISEASE, INFECTIONS, AND VIRUSES CAN BE COMPLETELY
                    HEALED IF YOU LEARN THIS SIMPLE SYSTEM!!
                  </p>
                </div>
              </div>
              <div
                id='headerPopup'
                className='mfp-hide embed-responsive embed-responsive-21by9'
              >
                <iframe
                  className='embed-responsive-item'
                  width={854}
                  height={480}
                  src='https://www.youtube.com/embed/ebzbKa32kuk'
                  frameBorder={0}
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <section className="offer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row align-items-start justify-content-center text-center">
                <div className="col-xl-3 col-lg-5 col-md-10 mx-auto">
                  <div className="offer-box animate__animated animate__fadeInUp">
                    <img
                      src="images/leaf.png"
                      alt=""
                      className="img-fluid mb-3 curve-leaf "
                    />
                    <h4>Iv Elements</h4>
                    <div className="overlay-heading">
                      <h5 className="purple">
                        40
                        <span className="characters">
                          %<br /> Off
                        </span>
                      </h5>
                      <h5 className="maroon">
                        40
                        <span className="characters">
                          %<br /> Off
                        </span>
                      </h5>
                    </div>
                    <Link to="/Capsules" className="red-link">
                      Shop Now
                    </Link>
                  </div>
                  <img
                    src="images/elementsCircle.png"
                    alt=""
                    className="img-fluid elementsCircle"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-10 mx-auto offset-lg-1">
                  <img
                    src="images/IVElements.png"
                    alt=""
                    className="img-fluid animate__animated animate__fadeInUp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <AllHerbs />

      <Footer />
      {/* {visible == true && ( */}
      {/* <div
        className={visible == true ? 'modal fade show' : 'modal fade'}
        id='overlay'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='termspopupcontainer'>
              <h3 className='termstitle'>
                Yahki Awakened Eye of Lotus Health Club Terms of Use
              </h3>
              <div className='termscontentwrapper'>
                <div id='wp-terms-popup-content'>
                  <div>
                    <div className='wbp_wrapper'>
                      <h4 style={{ textAlign: 'center', marginTop: 4 }}>
                        Before Continuing to this Website, You must agree to Our
                        Terms of Use, Privacy Policy and Health Club Disclaimer
                      </h4>
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '14pt', fontWeight: 'bold' }}>
                          <strong>
                            POTENTIAL CLIENT DISCLAIMER AND LIABILITY
                            INFORMATION
                          </strong>
                        </span>
                      </p>
                      <p>
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club
                        </strong>
                        &nbsp; is a private health club. We promote an alkaline
                        diet and botanical protocols to assist with illness and
                        mineral deficiencies. Being a member of our Private
                        Health Club gives you access to vital information on
                        proper diet, botanical regimens, daily routine, and
                        knowledge on common Dis-Eases that plague the community
                        today. Botanical recommendations are based on health
                        history, blood work, and iridology readings. We offer
                        both free and paid membership to this club. All paid
                        memberships are non-refundable, but may be downgraded,
                        paused or canceled at any time. Your signature indicates
                        acceptance and agreement to the following terms of
                        membership.
                      </p>
                      <p>
                        As a member of the&nbsp;
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club,&nbsp;
                        </strong>
                        I understand that I have the constitutional right to
                        pursue various health practices and consult whom I wish
                        to achieve my goals for better health. I enter this
                        agreement on the behalf of any person I am legally
                        responsible for which includes myself, a minor
                        dependent, or any adult I am legally responsible for.
                        This agreement is between me and the &nbsp;
                        <span style={{ fontWeight: 400 }}>
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                        </span>
                      </p>
                      <p>
                        I also understand that I am working with a consultant
                        who makes no claims of being a health practitioner; I do
                        this on my own free will. I understand that no diagnosis
                        or prescription will be given. I understand that Yah’ki
                        is a Master Herbalist and Master Reiki Healer and that
                        he is not a medical doctor. I also understand that only
                        a medical doctor can diagnose and prescribe treatment.
                      </p>
                      <p>
                        I will willingly provide the representatives of&nbsp;
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club
                        </strong>
                        &nbsp; permission (all rights) to openly discuss my
                        personal health concerns as well as solutions to those
                        issues. &nbsp;
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club
                        </strong>
                        &nbsp; representatives may provide educational
                        information including, but not limited to, fasting,
                        herbal botanicals, diet, nutrition, and other health
                        information which does not include diagnosing, or
                        prescribing treatment, and is not considered to be a
                        substitute for medically necessary diagnostics.
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          I fully agree to hold harmless any member or
                          representative of&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; with whom I communicate in any manner. I also
                          understand that I am working with a consultant who
                          makes no claims of being a health practitioner; I do
                          this on my own free will. I assume total liability for
                          my actions. I understand and acknowledge that no
                          members of the&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; hold malpractice insurance and I agree to not
                          file a malpractice lawsuit against any member of
                          &nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          . Any violation of these terms will result in a
                          no-contest legal proceeding against me.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          I attest that my actions with the &nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; are private and I refuse to share with any
                          state, or Federal Regulatory Board, FDA, FTC, Medicaid
                          or any other insurance company without said
                          permission. I agree to waive all HIPPA privacy rights
                          and complaint processes. I understand that no
                          doctor-patient relationship exists. I understand that
                          it is my responsibility to educate myself on any
                          advice or recommendations given to me by any member
                          of&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club.
                          </strong>
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; declares one of our primary objectives is to
                          maintain and improve the civil rights, constitutional
                          guarantees, and political freedom of every member
                          throughout the world who chooses to participate in our
                          Private Sector Private Health Club. We believe the
                          First Amendment of the Constitution of the United
                          States of America guarantees our members the right to
                          free speech, petition, assembly and the right to
                          gather together for the lawful purpose of advising and
                          helping one another to attain vibrant health by
                          asserting our rights under the Federal and State
                          Constitutions and Statutes. It is hereby declared that
                          we, as a Private Sector Private Health Club are
                          exercising our right of “Freedom of Assembly” as
                          guaranteed by both the 1st and 14th Amendments of the
                          U.S. Constitution and the equivalent provisions of the
                          various State Declarations. This means any activities
                          through or within&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; are restricted to that of the Private Domain
                          only.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          Further, the application of any learned techniques
                          intended to remedy my personal health considerations
                          without a medical doctor’s approval, is also of my own
                          free will and is considered an act of exercising my
                          Constitutional Rights. Purchasing&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; products as recommendation for reversing
                          illness and mineral deficiency in the body and cells
                          is only a general recommendation. The recommendations
                          given are only suggestions and I (the client) must
                          take responsibility for further educating and making
                          myself in regard to my body’s health issues and
                          receiving proper medical care.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; products are considered to be supplements and
                          not cures to conditions such as herpes, cancers,
                          diabetes, autoimmune diseases and others. With a
                          proper diet these supplements have the ability to
                          revitalize the immune system, nervous system, and
                          lymphatic system. The Food and Drug Administration has
                          not evaluated statements made about specific
                          supplements nor does the Food and Drug Administration
                          recognize that any nutritional supplement is to be
                          used as a cure for any condition.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          I agree to and digitally sign this affidavit, without
                          coercion or remuneration, in exchange for access to
                          benefits this Private Health Club offers. By clicking
                          “I agree” at the time of creating my membership, I
                          acknowledge that I have read, understand and agree to
                          the above stated terms.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='button'>
                  <button
                    type='button'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    onClick={() => {
                      closeModalHandler()
                    }}
                  >
                    I agree
                  </button>
                  <button
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    style={{ backgroundColor: 'black' }}
                    onClick={() => {
                      closeModalHandler2()
                    }}
                  >
                    I disagree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* )} */}
    </>
  )
}

export default Index
