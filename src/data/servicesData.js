export const services = [
  {
    id: 'ot',
    title: 'Pediatric Occupational Therapy',
    img: '/assets/services/ot.jpg',
    desc: 'Builds everyday motor coordination, self-care routines and balance through purposeful play.',
    concern: 'Occupational / Sensory',
    benefits: [
      'Fine & gross motor skill development',
      'Handwriting and pencil grasp improvement',
      'Daily living skills (eating, dressing, grooming)',
      'Bilateral coordination and spatial awareness'
    ],
    whoIsItFor: 'Children having difficulty with self-care, awkward handwriting, clumsiness, or struggling with motor milestones.'
  },
  {
    id: 'sensory',
    title: 'Sensory Processing Integration',
    img: '/assets/services/sensory.jpg',
    desc: 'Helps children cope comfortably with touch, sound, movement and space around them.',
    concern: 'Occupational / Sensory',
    benefits: [
      'Sensory gym swings and suspended equipment',
      'Deep-pressure tactile regulation',
      'Vestibular and proprioceptive input',
      'Calming meltdowns and auditory overload'
    ],
    whoIsItFor: 'Children who are overly sensitive or under-responsive to sounds, textures, movement, or get easily overwhelmed.'
  },
  {
    id: 'speech',
    title: 'Speech & Language Therapy',
    img: '/assets/services/speech.jpg',
    desc: 'Strengthens vocabulary, clear pronunciation and conversation with others.',
    concern: 'Speech & Communication',
    benefits: [
      'Speech articulation and phonological clarity',
      'Expressive and receptive language building',
      'Stuttering & fluency support',
      'Social communication and peer engagement'
    ],
    whoIsItFor: 'Children experiencing speech delays, unclear speech, stammering, or difficulty expressing thoughts in sentences.'
  },
  {
    id: 'adhd',
    title: 'ADHD & Behavioural Support',
    img: '/assets/services/adhd.jpg',
    desc: 'Practical strategies for sustained attention, self-regulation and settling into class.',
    concern: 'ADHD / Attention',
    benefits: [
      'Attention span and classroom stamina training',
      'Impulse control and emotional regulation',
      'Executive functioning & task planning',
      'Positive behavioural reinforcement systems'
    ],
    whoIsItFor: 'Children who struggle to sit still, get easily distracted, act impulsively, or find classroom routines challenging.'
  },
  {
    id: 'remedial',
    title: 'Special & Remedial Education',
    img: '/assets/services/service-5.jpg',
    desc: 'Structured multisensory academic guidance for dyslexia, dyscalculia, reading barriers, and exam confidence.',
    concern: 'Special Education',
    benefits: [
      'Phonics, decoding, and reading comprehension',
      'Mathematical reasoning and calculation drills',
      'Memory techniques and individualized worksheets',
      'School board accommodation advisory'
    ],
    whoIsItFor: 'School-going children struggling with reading, writing, spelling, calculations, or diagnosed with learning disabilities.'
  },
  {
    id: 'counseling',
    title: 'Child Psychology & Parent Coaching',
    img: '/assets/services/service-6.jpg',
    desc: 'Nurtures emotional resilience, reduces childhood anxiety, and equips parents with peaceful daily routines.',
    concern: 'General Screening',
    benefits: [
      'Emotional regulation and anger de-escalation',
      'School adjustment and social confidence',
      'Parent-child positive bonding sessions',
      'Developmental milestones screening'
    ],
    whoIsItFor: 'Children with frequent emotional tantrums, separation anxiety, low self-esteem, or parents seeking practical guidance.'
  }
];

export const areasOfSupport = [
  {
    id: 'speech-language-delay',
    title: 'Speech & Language Delays',
    subtitle: 'Helping children find words, speak clearly, and connect with confidence',
    category: 'Communication',
    icon: 'bi-chat-dots-fill',
    img: '/assets/support/activity-1.jpg',
    overview: 'Communication challenges can create frustration for both child and parents. Our pediatric speech pathologists evaluate receptive vocabulary, articulation, and expressive speech to foster joyful, clear expression.',
    signs: [
      'Limited words compared to age milestones',
      'Difficulty putting 2–3 words together into sentences',
      'Unclear pronunciation or stammering',
      'Reluctance to speak in social or school settings'
    ],
    howWeHelp: 'Play-based speech drills, oral-motor exercises, interactive storytelling, and conversational turn-taking tailored to your child.',
    therapyMatched: 'Speech & Language Therapy',
    concern: 'Speech & Communication'
  },
  {
    id: 'sensory-processing-meltdowns',
    title: 'Sensory Overload & Meltdowns',
    subtitle: 'Calming auditory, tactile, and movement sensitivity with sensory integration',
    category: 'Sensory Regulation',
    icon: 'bi-soundwave',
    img: '/assets/support/activity-2.jpg',
    overview: 'Children with sensory processing differences perceive everyday sounds, tags on clothes, textures, and crowds with magnified intensity. We provide scientific sensory diets in our specialized sensory gyms.',
    signs: [
      'Covering ears in noisy environments or crowded places',
      'Distress over specific food textures, sticky hands, or clothes tags',
      'Constant spinning, jumping, or crashing into furniture',
      'Frequent emotional overwhelm or sudden meltdowns'
    ],
    howWeHelp: 'Suspended swings, deep-pressure compression protocols, tactile exploration, and vestibular stimulation guided by certified therapists.',
    therapyMatched: 'Sensory Processing Integration',
    concern: 'Occupational / Sensory'
  },
  {
    id: 'adhd-focus-hyperactivity',
    title: 'Attention Deficit, Focus & Hyperactivity',
    subtitle: 'Building classroom stamina, impulse control, and sustained attention',
    category: 'Attention & Executive Function',
    icon: 'bi-lightning-charge-fill',
    img: '/assets/support/activity-3.jpg',
    overview: 'Restlessness, quick distraction, and impulsive actions are not stubbornness—they are neurodevelopmental stamina hurdles that respond positively to structured cognitive routines and physical regulation.',
    signs: [
      'Difficulty sitting still during classroom lessons or meal times',
      'Easily distracted by background sounds or visual stimuli',
      'Impulsive interrupting or difficulty waiting for their turn',
      'Starting multiple tasks but struggling to finish any'
    ],
    howWeHelp: 'Timed focus blocks, cognitive executive functioning drills, movement-break schedules, and positive reward reinforcement systems.',
    therapyMatched: 'ADHD & Behavioural Support',
    concern: 'ADHD / Attention'
  },
  {
    id: 'autism-social-communication',
    title: 'Autism Spectrum & Social Interaction',
    subtitle: 'Nurturing peer connection, shared attention, and social milestones',
    category: 'Neurodevelopment',
    icon: 'bi-people-fill',
    img: '/assets/support/activity-4.jpg',
    overview: 'Children on the Autism Spectrum possess remarkable unique strengths. Our multidisciplinary care bridges social cues, joint attention, and conversational empathy within a warm, sensory-friendly environment.',
    signs: [
      'Reduced eye contact or limited response when their name is called',
      'Repetitive body movements, hand flapping, or fixed routines',
      'Difficulty reading social facial cues and making peer friends',
      'Intense special interests with heightened attention to detail'
    ],
    howWeHelp: 'Combined speech-OT social pods, picture exchange & non-verbal support, peer play facilitation, and structured visual schedules.',
    therapyMatched: 'Occupational & Speech Therapy',
    concern: 'Occupational / Sensory'
  },
  {
    id: 'handwriting-fine-motor',
    title: 'Handwriting, Fine Motor & Coordination',
    subtitle: 'Strengthening finger grip, bilateral balance, and neat handwriting',
    category: 'Motor Development',
    icon: 'bi-pencil-fill',
    img: '/assets/support/activity-5.jpg',
    overview: 'Holding a pencil, cutting with scissors, tying shoe laces, or catching a ball require intricate hand-eye coordination and core muscle strength that our occupational therapy exercises systematically build.',
    signs: [
      'Awkward pencil grasp causing quick finger fatigue and pain',
      'Slow, illegible handwriting with uneven letter sizing and spacing',
      'Frequent tripping, clumsiness, or difficulty catching a ball',
      'Struggling with buttoning shirts, zippers, or tying shoelaces'
    ],
    howWeHelp: 'Theraputty finger strengthening, pincer grasp games, upper body postural stabilization, and multisensory handwriting sheets.',
    therapyMatched: 'Pediatric Occupational Therapy',
    concern: 'Occupational / Sensory'
  },
  {
    id: 'dyslexia-learning-barriers',
    title: 'Learning Disabilities (Dyslexia, Dyscalculia)',
    subtitle: 'Multisensory reading, spelling, and mathematics remediation',
    category: 'Academic Support',
    icon: 'bi-book-half',
    img: '/assets/support/activity-6.jpg',
    overview: 'Bright children often struggle unexpectedly when reading letters or processing math symbols. Our certified special educators identify specific cognitive processing gaps and restore learning self-esteem.',
    signs: [
      'Confusing mirror letters like b/d, p/q or reversing numbers like 6/9',
      'Reading word-by-word with high effort, hesitation, or guessing',
      'Struggling with basic arithmetic concepts and number sequences',
      'Growing homework anxiety, school refusal, or low academic self-belief'
    ],
    howWeHelp: 'Orton-Gillingham style multisensory phonics, customized memory aids, structured calculation routines, and school accommodation guidance.',
    therapyMatched: 'Special & Remedial Education',
    concern: 'Special Education'
  },
  {
    id: 'behaviour-emotional-regulation',
    title: 'Emotional Regulation & Tantrums',
    subtitle: 'Teaching healthy emotional expression, calmness, and coping mechanisms',
    category: 'Emotional Wellness',
    icon: 'bi-emoji-smile-fill',
    img: '/assets/support/activity-7.jpg',
    overview: 'Big feelings can overwhelm little nervous systems. We guide children to identify emotional triggers, build frustration tolerance, and transition peacefully between activities at home and school.',
    signs: [
      'Intense, prolonged meltdowns over small changes in plans',
      'Aggressive hitting, screaming, or throwing items when upset',
      'Extreme separation anxiety when entering school',
      'Difficulty calming down even after comfort from parents'
    ],
    howWeHelp: 'Zones of regulation visual thermometers, deep-breathing somatic techniques, social stories, and practical parent coaching at home.',
    therapyMatched: 'Child Psychology & Behaviour Support',
    concern: 'General Screening'
  },
  {
    id: 'developmental-milestones-infants',
    title: 'Early Developmental Milestone Delays',
    subtitle: 'Early intervention screening for toddlers and infants (0–5 years)',
    category: 'Early Intervention',
    icon: 'bi-activity',
    img: '/assets/support/activity-8.jpg',
    overview: 'The first five years are the golden window of neuroplasticity. Timely developmental screening ensures that subtle motor, speech, or social delays are addressed early for maximum lifelong impact.',
    signs: [
      'Delayed sitting, crawling, or unassisted walking milestones',
      'Absence of babbling, pointing, or gesturing by 12–15 months',
      'Not responding with social smiles or imitating parent sounds',
      'Persistent toe-walking or stiffness in legs and arms'
    ],
    howWeHelp: 'Comprehensive standardized screening (motor, cognitive, speech), neurodevelopmental play stimulation, and empowering parent training.',
    therapyMatched: 'Multidisciplinary Early Intervention',
    concern: 'General Screening'
  }
];

export const CONCERNS = [
  { value: 'Speech & Communication', label: 'Speech and communication' },
  { value: 'Occupational / Sensory', label: 'Sensory and motor skills' },
  { value: 'ADHD / Attention', label: 'ADHD and attention' },
  { value: 'Special Education', label: 'Reading and learning' },
  { value: 'General Screening', label: 'Not sure yet' }
];

export const TIMES = ['Anytime', 'Morning', 'Afternoon', 'Evening'];

export const CENTRE_OPTIONS = ['Nerul', 'Thane', 'Chembur', 'Vashi', 'Ulwe', 'Nagpur', 'Nashik'];
