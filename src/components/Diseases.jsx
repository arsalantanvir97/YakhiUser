import Swal from 'sweetalert2'

const Diseases = () => {
  return (
    <>
      <option value={'Abdominal aortic aneurysm'}>
        Abdominal aortic aneurysm
      </option>
      <option value={'Acne'}>Acne</option>
      <option value={'Acute cholecystitis'}>Acute cholecystitis</option>
      <option value={'Acute lymphoblastic leukaemia'}>
        Acute lymphoblastic leukaemia
      </option>
      <option value={'Acute lymphoblastic leukaemia: Children'}>
        Acute lymphoblastic leukaemia: Children
      </option>
      <option
        value={'Acute lymphoblastic leukaemia: Teenagers and young adults'}
      >
        Acute lymphoblastic leukaemia: Teenagers and young adults
      </option>
      <option value={'Acute myeloid leukaemia'}>Acute myeloid leukaemia</option>
      <option value={'Acute myeloid leukaemia: Children'}>
        Acute myeloid leukaemia: Children
      </option>
      <option value={'Acute myeloid leukaemia: Teenagers and young adults'}>
        Acute myeloid leukaemia: Teenagers and young adults
      </option>
      <option value={'Acute pancreatitis'}>Acute pancreatitis</option>
      <option value={'Addisons disease'}>Addisons disease</option>
      <option value={'Alcohol-related liver disease'}>
        Alcohol-related liver disease
      </option>
      <option value={'Allergic rhinitis'}>Allergic rhinitis</option>
      <option value={'Allergies'}>Allergies</option>
      <option value={'Alzheimers disease'}>Alzheimers disease</option>
      <option value={'Anal cancer'}>Anal cancer</option>
      <option value={'Anaphylaxis'}>Anaphylaxis</option>
      <option value={'Angioedema'}>Angioedema</option>
      <option value={'Ankylosing spondylitis'}>Ankylosing spondylitis</option>
      <option value={'Anorexia nervosa'}>Anorexia nervosa</option>
      <option value={'Anxiety'}>Anxiety</option>
      <option value={'Anxiety disorders in children'}>
        Anxiety disorders in children
      </option>
      <option value={'Appendicitis'}>Appendicitis</option>
      <option value={'Arthritis'}>Arthritis</option>
      <option value={'Asbestosis'}>Asbestosis</option>
      <option value={'Asthma'}>Asthma</option>
      <option value={'Atopic eczema'}>Atopic eczema</option>
      <option value={'Attention deficit hyperactivity disorder (ADHD)'}>
        Attention deficit hyperactivity disorder (ADHD)
      </option>
      <option value={'Autistic spectrum disorder (ASD)'}>
        Autistic spectrum disorder (ASD)
      </option>
      <option value={'Bacterial vaginosis'}>Bacterial vaginosis</option>
      <option value={'Benign prostate enlargement'}>
        Benign prostate enlargement
      </option>
      <option value={'Bile duct cancer (cholangiocarcinoma)'}>
        Bile duct cancer (cholangiocarcinoma)
      </option>
      <option value={'Binge eating'}>Binge eating</option>
      <option value={'Bipolar disorder'}>Bipolar disorder</option>
      <option value={'Bladder cancer'}>Bladder cancer</option>
      <option value={'Blood poisoning (sepsis)'}>
        Blood poisoning (sepsis)
      </option>
      <option value={'Bone cancer'}>Bone cancer</option>

      <option value={'Bone cancer: Teenagers and young adults'}>
        Bone cancer: Teenagers and young adults
      </option>
      <option value={'Bowel cancer'}>Bowel cancer</option>
      <option value={'Bowel incontinence'}>Bowel incontinence</option>
      <option value={'Bowel polyps'}>Bowel polyps</option>
      <option value={'Brain stem death'}>Brain stem death</option>
      <option value={'Brain tumours'}>Brain tumours</option>
      <option value={'Brain tumours: Children'}>Brain tumours: Children</option>

      <option value={'Brain tumours: Teenagers and young adults'}>
        Brain tumours: Teenagers and young adults
      </option>
      <option value={'Breast cancer (female)'}>Breast cancer (female)</option>
      <option value={'Breast cancer (male)'}>Breast cancer (male)</option>
      <option value={'Bronchiectasis'}>Bronchiectasis</option>
      <option value={'Bronchitis'}>Bronchitis</option>
      <option value={'Bulimia'}>Bulimia</option>
      <option value={'Bunion'}>Bunion</option>
      <option value={'Carcinoid syndrome and carcinoid tumours'}>
        Carcinoid syndrome and carcinoid tumours
      </option>
      <option value={'Catarrh'}>Catarrh</option>
      <option value={'Cellulitis'}>Cellulitis</option>
      <option value={'Cervical cancer'}>Cervical cancer</option>
      <option value={'Chest infection'}>Chest infection</option>
      <option value={'Chest pain'}>Chest pain</option>
      <option value={'Chickenpox'}>Chickenpox</option>
      <option value={'Chilblains'}>Chilblains</option>
      <option value={'Chlamydia'}>Chlamydia</option>
      <option value={'Chronic fatigue syndrome'}>
        Chronic fatigue syndrome
      </option>
      <option value={'Chronic kidney disease'}>Chronic kidney disease</option>
      <option value={'Chronic lymphocytic leukaemia'}>
        Chronic lymphocytic leukaemia
      </option>
      <option value={'Chronic myeloid leukaemia'}>
        Chronic myeloid leukaemia
      </option>
      <option value={'Chronic obstructive pulmonary disease'}>
        Chronic obstructive pulmonary disease
      </option>
      <option value={'Chronic pain'}>Chronic pain</option>
      <option value={'Chronic pancreatitis'}>Chronic pancreatitis</option>
      <option value={'Cirrhosis'}>Cirrhosis</option>
      <option value={'Clostridium difficile'}>Clostridium difficile</option>
      <option value={'Coeliac disease'}>Coeliac disease</option>
      <option value={'Cold sore'}>Cold sore</option>

      <option value={'Coma'}>Coma</option>
      <option value={'Common cold'}>Common cold</option>
      <option value={'Common heart conditions'}>Common heart conditions</option>
      <option value={'Congenital heart disease'}>
        Congenital heart disease
      </option>
      <option value={'Conjunctivitis'}>Conjunctivitis</option>
      <option value={'Constipation'}>Constipation</option>
      <option value={'Coronavirus (COVID-19)'}>Coronavirus (COVID-19)</option>
      <option value={'Cough'}>Cough</option>
      <option value={'Crohns disease'}>Crohns disease</option>
      <option value={'Croup'}>Croup</option>
      <option value={'Cystic fibrosis'}>Cystic fibrosis</option>
      <option value={'Cystitis'}>Cystitis</option>
      <option value={'Deafblindness'}>Deafblindness</option>
      <option value={'Deep vein thrombosis'}>Deep vein thrombosis</option>
      <option value={'Dehydration'}>Dehydration</option>
      <option value={'Dementia'}>Dementia</option>
      <option value={'Dementia with Lewy bodies'}>
        Dementia with Lewy bodies
      </option>
      <option value={'Dental abscess'}>Dental abscess</option>
      <option value={'Depression'}>Depression</option>
      <option value={'Dermatitis herpetiformis'}>
        Dermatitis herpetiformis
      </option>
      <option value={'Diabetes'}>Diabetes</option>
      <option value={'Diarrhoea'}>Diarrhoea</option>
      <option value={'Discoid eczema'}>Discoid eczema</option>
      <option value={'Diverticular disease and diverticulitis'}>
        Diverticular disease and diverticulitis
      </option>
      <option value={'Dizziness (Lightheadedness)'}>
        Dizziness (Lightheadedness)
      </option>
      <option value={'Downs syndrome'}>Downs syndrome</option>
      <option value={'Dry mouth'}>Dry mouth</option>
      <option value={'Dysphagia (swallowing problems)'}>
        Dysphagia (swallowing problems)
      </option>
      <option value={'Dystonia'}>Dystonia</option>

      <option value={'Earache'}>Earache</option>
      <option value={'Earwax build-up'}>Earwax build-up</option>
      <option value={'Ebola virus disease'}>Ebola virus disease</option>
      <option value={'Ectopic pregnancy'}>Ectopic pregnancy</option>
      <option value={'Endometriosis'}>Endometriosis</option>
      <option value={'Epilepsy'}>Epilepsy</option>
      <option value={'Erectile dysfunction (impotence)'}>
        Erectile dysfunction (impotence)
      </option>
      <option value={'Escherichia coli (E. coli) O157'}>
        Escherichia coli (E. coli) O157
      </option>
      <option value={'Ewing sarcoma'}>Ewing sarcoma</option>
      <option value={'Ewing sarcoma: Children'}>Ewing sarcoma: Children</option>
      <option value={'Eye cancer'}>Eye cancer</option>
      <option value={'Febrile seizures'}>Febrile seizures</option>
      <option value={'Fever in adults'}>Fever in adults</option>
      <option value={'Fever in children'}>Fever in children</option>
      <option value={'Fibroids'}>Fibroids</option>
      <option value={'Fibromyalgia'}>Fibromyalgia</option>
      <option value={'Flatulence'}>Flatulence</option>
      <option value={'Flu'}>Flu</option>
      <option value={'Foetal alcohol syndrome'}>Foetal alcohol syndrome</option>
      <option value={'Food poisoning'}>Food poisoning</option>
      <option value={'Functional neurological disorder (FND)'}>
        Functional neurological disorder (FND)
      </option>
      <option value={'Fungal nail infection'}>Fungal nail infection</option>
      <option value={'Gallbladder cancer'}>Gallbladder cancer</option>
      <option value={'Gallstones'}>Gallstones</option>
      <option value={'Ganglion'}>Ganglion</option>
      <option value={'Gastroenteritis'}>Gastroenteritis</option>
      <option value={'Gastro-oesophageal reflux disease (GORD)'}>
        Gastro-oesophageal reflux disease (GORD)
      </option>
      <option value={'Genital herpes'}>Genital herpes</option>

      <option value={'Genital warts'}>Genital warts</option>
      <option value={'Germ cell tumours'}>Germ cell tumours</option>
      <option value={'Glandular fever'}>Glandular fever</option>
      <option value={'Gonorrhoea'}>Gonorrhoea</option>
      <option value={'Gout'}>Gout</option>
      <option value={'Gum disease'}>Gum disease</option>
      <option value={'Haemorrhoids (piles)'}>Haemorrhoids (piles)</option>
      <option value={'Hand, foot and mouth disease'}>
        Hand, foot and mouth disease
      </option>
      <option value={'Hay fever'}>Hay fever</option>
      <option value={'Head and neck cancer'}>Head and neck cancer</option>
      <option value={'Head lice and nits'}>Head lice and nits</option>
      <option value={'Headaches'}>Headaches</option>
      <option value={'Hearing loss'}>Hearing loss</option>
      <option value={'Heart failure'}>Heart failure</option>
      <option value={'Hepatitis A'}>Hepatitis A</option>
      <option value={'Hepatitis B'}>Hepatitis B</option>
      <option value={'Hepatitis C'}>Hepatitis C</option>
      <option value={'Hiatus hernia'}>Hiatus hernia</option>
      <option value={'High cholesterol'}>High cholesterol</option>
      <option value={'HIV'}>HIV</option>
      <option value={'Hodgkin lymphoma'}>Hodgkin lymphoma</option>
      <option value={'Hodgkin lymphoma: Children'}>
        Hodgkin lymphoma: Children
      </option>
      <option value={'Hodgkin lymphoma: Teenagers and young adults'}>
        Hodgkin lymphoma: Teenagers and young adults
      </option>
      <option value={'Huntingtons disease'}>Huntingtons disease</option>
      <option value={'Hyperglycaemia (high blood sugar)'}>
        Hyperglycaemia (high blood sugar)
      </option>
      <option value={'Hyperhidrosis'}>Hyperhidrosis</option>
      <option value={'Hypoglycaemia (low blood sugar)'}>
        Hypoglycaemia (low blood sugar)
      </option>

      <option value={'Idiopathic pulmonary fibrosis'}>
        Idiopathic pulmonary fibrosis
      </option>
      <option value={'Impetigo'}>Impetigo</option>
      <option value={'Indigestion'}>Indigestion</option>
      <option value={'Ingrown toenail'}>Ingrown toenail</option>
      <option value={'Inherited heart conditions'}>
        Inherited heart conditions
      </option>
      <option value={'Insomnia'}>Insomnia</option>
      <option value={'Iron deficiency anaemia'}>Iron deficiency anaemia</option>
      <option value={'Irritable bowel syndrome (IBS)'}>
        Irritable bowel syndrome (IBS)
      </option>
      <option value={'Irritable hip'}>Irritable hip</option>
      <option value={'Itching'}>Itching</option>
      <option value={'Itchy bottom'}>Itchy bottom</option>
      <option value={'Kaposis sarcoma'}>Kaposis sarcoma</option>
      <option value={'Kidney cancer'}>Kidney cancer</option>
      <option value={'Kidney infection'}>Kidney infection</option>
      <option value={'Kidney stones'}>Kidney stones</option>
      <option value={'Labyrinthitis'}>Labyrinthitis</option>
      <option value={'Lactose intolerance'}>Lactose intolerance</option>
      <option value={'Laryngeal (larynx) cancer'}>
        Laryngeal (larynx) cancer
      </option>
      <option value={'Laryngitis'}>Laryngitis</option>
      <option value={'Leg cramps'}>Leg cramps</option>
      <option value={'Lichen planus'}>Lichen planus</option>
      <option value={'Liver cancer'}>Liver cancer</option>
      <option value={'Liver disease'}>Liver disease</option>
      <option value={'Liver tumours'}>Liver tumours</option>
      <option value={'Loss of libido'}>Loss of libido</option>
      <option value={'Lung cancer'}>Lung cancer</option>
      <option value={'Lupus'}>Lupus</option>
      <option value={'Lyme disease'}>Lyme disease</option>
      <option value={'Lymphoedema'}>Lymphoedema</option>

      <option value={'Lymphogranuloma venereum (LGV)'}>
        Lymphogranuloma venereum (LGV)
      </option>
      <option value={'Malaria'}>Malaria</option>
      <option value={'Malignant brain tumour (cancerous)'}>
        Malignant brain tumour (cancerous)
      </option>
      <option value={'Malnutrition'}>Malnutrition</option>
      <option value={'Measles'}>Measles</option>
      <option value={'Meningitis'}>Meningitis</option>
      <option value={'Menopause'}>Menopause</option>
      <option value={'Mesothelioma'}>Mesothelioma</option>
      <option value={'Middle ear infection (otitis media)'}>
        Middle ear infection (otitis media)
      </option>
      <option value={'Migraine'}>Migraine</option>
      <option value={'Miscarriage'}>Miscarriage</option>
      <option value={'Motor neurone disease (MND)'}>
        Motor neurone disease (MND)
      </option>
      <option value={'Mouth cancer'}>Mouth cancer</option>
      <option value={'Mouth ulcer'}>Mouth ulcer</option>
      <option value={'Multiple myeloma'}>Multiple myeloma</option>
      <option value={'Multiple sclerosis (MS)'}>Multiple sclerosis (MS)</option>
      <option value={'Mumps'}>Mumps</option>
      <option value={'Menieres disease'}>Menieres disease</option>
      <option value={'Myasthenia gravis'}>Myasthenia gravis</option>
      <option value={'Nasal and sinus cancer'}>Nasal and sinus cancer</option>
      <option value={'Nasopharyngeal cancer'}>Nasopharyngeal cancer</option>
      <option value={'Neuroblastoma: Children'}>Neuroblastoma: Children</option>
      <option value={'Neuroendocrine tumours'}>Neuroendocrine tumours</option>
      <option value={'Non-alcoholic fatty liver disease (NAFLD)'}>
        Non-alcoholic fatty liver disease (NAFLD)
      </option>
      <option value={'Non-Hodgkin lymphoma'}>Non-Hodgkin lymphoma</option>
      <option value={'Non-Hodgkin lymphoma: Children'}>
        Non-Hodgkin lymphoma: Children
      </option>
      <option value={'Norovirus'}>Norovirus</option>

      <option value={'Nosebleed'}>Nosebleed</option>
      <option value={'Obesity'}>Obesity</option>
      <option value={'Obsessive compulsive disorder (OCD)'}>
        Obsessive compulsive disorder (OCD)
      </option>
      <option value={'Obstructive sleep apnoea'}>
        Obstructive sleep apnoea
      </option>
      <option value={'Oesophageal cancer'}>Oesophageal cancer</option>
      <option value={'Oral thrush in adults'}>Oral thrush in adults</option>
      <option value={'Osteoarthritis'}>Osteoarthritis</option>
      <option value={'Osteoporosis'}>Osteoporosis</option>
      <option value={'Osteosarcoma'}>Osteosarcoma</option>
      <option value={'Otitis externa'}>Otitis externa</option>
      <option value={'Ovarian cancer'}>Ovarian cancer</option>
      <option value={'Ovarian cancer: Teenagers and young adults'}>
        Ovarian cancer: Teenagers and young adults
      </option>
      <option value={'Ovarian cyst'}>Ovarian cyst</option>
      <option value={'Overactive thyroid'}>Overactive thyroid</option>
      <option value={'Pagets disease of the nipple'}>
        Pagets disease of the nipple
      </option>
      <option value={'Pancreatic cancer'}>Pancreatic cancer</option>
      <option value={'Panic disorder'}>Panic disorder</option>
      <option value={'Parkinsons disease'}>Parkinsons disease</option>
      <option value={'Pelvic inflammatory disease'}>
        Pelvic inflammatory disease
      </option>
      <option value={'Pelvic organ prolapse'}>Pelvic organ prolapse</option>
      <option value={'Penile cancer'}>Penile cancer</option>
      <option value={'Peripheral neuropathy'}>Peripheral neuropathy</option>
      <option value={'Personality disorder'}>Personality disorder</option>
      <option value={'Pleurisy'}>Pleurisy</option>
      <option value={'Pneumonia'}>Pneumonia</option>
      <option value={'Polymyalgia rheumatica'}>Polymyalgia rheumatica</option>
      <option value={'Post-polio syndrome'}>Post-polio syndrome</option>
      <option value={'Post-traumatic stress disorder (PTSD)'}>
        Post-traumatic stress disorder (PTSD)
      </option>

      <option value={'Postnatal depression'}>Postnatal depression</option>
      <option value={'Pregnancy and baby'}>Pregnancy and baby</option>
      <option value={'Pressure ulcers'}>Pressure ulcers</option>
      <option value={'Prostate cancer'}>Prostate cancer</option>
      <option value={'Psoriasis'}>Psoriasis</option>
      <option value={'Psoriatic arthritis'}>Psoriatic arthritis</option>
      <option value={'Psychosis'}>Psychosis</option>
      <option value={'Pubic lice'}>Pubic lice</option>
      <option value={'Rare tumours'}>Rare tumours</option>
      <option value={'Raynauds phenomenon'}>Raynauds phenomenon</option>
      <option value={'Reactive arthritis'}>Reactive arthritis</option>
      <option value={'Restless legs syndrome'}>Restless legs syndrome</option>
      <option value={'Retinoblastoma: Children'}>
        Retinoblastoma: Children
      </option>
      <option value={'Rhabdomyosarcoma'}>Rhabdomyosarcoma</option>
      <option value={'Rheumatoid arthritis'}>Rheumatoid arthritis</option>
      <option value={'Ringworm and other fungal infections'}>
        Ringworm and other fungal infections
      </option>
      <option value={'Rosacea'}>Rosacea</option>
      <option value={'Scabies'}>Scabies</option>
      <option value={'Scarlet fever'}>Scarlet fever</option>
      <option value={'Schizophrenia'}>Schizophrenia</option>
      <option value={'Scoliosis'}>Scoliosis</option>
      <option value={'Septic shock'}>Septic shock</option>
      <option value={'Shingles'}>Shingles</option>
      <option value={'Shortness of breath'}>Shortness of breath</option>
      <option value={'Sickle cell disease'}>Sickle cell disease</option>
      <option value={'Sinusitis'}>Sinusitis</option>
      <option value={'Sjogrens syndrome'}>Sjogrens syndrome</option>
      <option value={'Skin cancer (melanoma)'}>Skin cancer (melanoma)</option>

      <option value={'Skin cancer (non-melanoma)'}>
        Skin cancer (non-melanoma)
      </option>
      <option value={'Slapped cheek syndrome'}>Slapped cheek syndrome</option>
      <option value={'Soft tissue sarcomas'}>Soft tissue sarcomas</option>
      <option value={'Soft tissue sarcomas: Teenagers and young adults'}>
        Soft tissue sarcomas: Teenagers and young adults
      </option>
      <option value={'Sore throat'}>Sore throat</option>
      <option value={'Spleen problems and spleen removal'}>
        Spleen problems and spleen removal
      </option>
      <option value={'Stillbirth'}>Stillbirth</option>
      <option value={'Stomach ache and abdominal pain'}>
        Stomach ache and abdominal pain
      </option>
      <option value={'Stomach cancer'}>Stomach cancer</option>
      <option value={'Stomach ulcer'}>Stomach ulcer</option>
      <option value={'Streptococcus A (strep A)'}>
        Streptococcus A (strep A)
      </option>
      <option value={'Stress, anxiety and low mood'}>
        Stress, anxiety and low mood
      </option>
      <option value={'Stroke'}>Stroke</option>
      <option value={'Sudden infant death syndrome (SIDS)'}>
        Sudden infant death syndrome (SIDS)
      </option>
      <option value={'Suicide'}>Suicide</option>
      <option value={'Sunburn'}>Sunburn</option>
      <option value={'Swollen glands'}>Swollen glands</option>
      <option value={'Syphilis'}>Syphilis</option>
      <option value={'Testicular cancer'}>Testicular cancer</option>
      <option value={'Testicular cancer: Teenagers and young adults'}>
        Testicular cancer: Teenagers and young adults
      </option>
      <option value={'Testicular lumps and swellings'}>
        Testicular lumps and swellings
      </option>
      <option value={'Thirst'}>Thirst</option>
      <option value={'Threadworms'}>Threadworms</option>
      <option value={'Thrush'}>Thrush</option>
      <option value={'Thyroid cancer'}>Thyroid cancer</option>
      <option value={'Thyroid cancer: Teenagers and young adults'}>
        Thyroid cancer: Teenagers and young adults
      </option>
      <option value={'Tinnitus'}>Tinnitus</option>
      <option value={'Tonsillitis'}>Tonsillitis</option>

      <option value={'Tooth decay'}>Tooth decay</option>
      <option value={'Toothache'}>Toothache</option>
      <option value={'Transient ischaemic attack (TIA)'}>
        Transient ischaemic attack (TIA)
      </option>
      <option value={'Trigeminal neuralgia'}>Trigeminal neuralgia</option>
      <option value={'Tuberculosis (TB)'}>Tuberculosis (TB)</option>
      <option value={'Type 1 diabetes'}>Type 1 diabetes</option>
      <option value={'Type 2 diabetes'}>Type 2 diabetes</option>
      <option value={'Trichomonas infection'}>Trichomonas infection</option>
      <option value={'Transverse myelitis'}>Transverse myelitis</option>
      <option value={'Ulcerative colitis'}>Ulcerative colitis</option>
      <option value={'Underactive thyroid'}>Underactive thyroid</option>
      <option value={'Urinary incontinence'}>Urinary incontinence</option>
      <option value={'Urinary tract infection (UTI)'}>
        Urinary tract infection (UTI)
      </option>
      <option value={'Urinary tract infection (UTI) in children'}>
        Urinary tract infection (UTI) in children
      </option>
      <option value={'Urticaria (hives)'}>Urticaria (hives)</option>
      <option value={'Vaginal cancer'}>Vaginal cancer</option>
      <option value={'Varicose eczema'}>Varicose eczema</option>
      <option value={'Venous leg ulcer'}>Venous leg ulcer</option>
      <option value={'Vertigo'}>Vertigo</option>
      <option value={'Vitamin B12 or folate deficiency anaemia'}>
        Vitamin B12 or folate deficiency anaemia
      </option>
      <option value={'Vomiting in adults'}>Vomiting in adults</option>
      <option value={'Vulval cancer'}>Vulval cancer</option>
      <option value={'Warts and verrucas'}>Warts and verrucas</option>
      <option value={'Whooping cough'}>Whooping cough</option>
      <option value={'Wilms’ tumour'}>Wilms’ tumour</option>
      <option value={'Womb (uterus) cancer'}>Womb (uterus) cancer</option>
      <option value={'Yellow fever'}>Yellow fever</option>
      <option value={'Other'}>Other</option>
    </>
  )
}

export default Diseases
