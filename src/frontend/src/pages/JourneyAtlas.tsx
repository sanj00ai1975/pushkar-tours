// Journey Atlas — Interactive destination guide for Indian states
// Horizontal layout with rich accordion: description, how to reach (road/train/flight),
// best season, local cuisine, travel tips, traveler FAQs

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  ChevronDown,
  Compass,
  HelpCircle,
  Lightbulb,
  MapPin,
  Plane,
  Search,
  Train,
  Truck,
  Utensils,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import type { StateGuide } from "../types";

const STATE_GUIDES: StateGuide[] = [
  {
    state: "Rajasthan",
    region: "North India",
    description:
      "The Land of Kings — Rajasthan is famous for its golden desert landscape, majestic forts, ornate palaces, and vibrant Rajput culture. Home to the Thar Desert, iconic cities like Jaipur (Pink City), Jodhpur (Blue City), and Udaipur (City of Lakes), it is one of India's most beloved travel destinations.",
    howToReach: {
      byFlight:
        "Fly into Jaipur (JAI), Jodhpur (JDH), or Udaipur (UDR) airports. Jaipur is the best-connected hub with direct flights from Delhi, Mumbai, Bangalore, and Hyderabad.",
      byTrain:
        "Well-connected via Shatabdi Express (Delhi–Jaipur: 4.5 hrs), Rajdhani Express, and Palace on Wheels luxury train. Udaipur and Jodhpur have direct trains from major cities.",
      byRoad:
        "NH-48 from Delhi to Jaipur (270 km, ~5 hrs). Volvo AC buses from Delhi are popular. Self-drive is excellent — roads are wide and well-maintained between major cities.",
    },
    bestSeason: "October – March",
    bestSeasonDetail:
      "Winters (Oct–Feb) are ideal with pleasant temperatures (10–25°C). The Pushkar Camel Fair in Nov and Jaipur Literature Festival in Jan are highlights. Avoid April–June (45°C+).",
    localCuisine: [
      "Dal Baati Churma",
      "Laal Maas",
      "Ghevar",
      "Ker Sangri",
      "Bajre ki Roti",
    ],
    cuisineNote:
      "Rajasthani food is rich, spicy, and uses a lot of ghee. Dal Baati Churma is the quintessential dish — don't leave without trying it at a local dhaba.",
    travelTips: [
      "Book Amber Fort timed entry online — queues can be 2+ hours without prior booking.",
      "Carry a light jacket for winter evenings; temperatures drop sharply after sunset.",
      "Negotiate auto fares in Jodhpur's old city — meters are rarely used.",
      "The Pushkar Camel Fair (Oct/Nov) needs hotel booking 3 months in advance.",
    ],
    travelerFAQs: [
      {
        question: "Is Rajasthan safe for solo female travellers?",
        answer:
          "Yes, Rajasthan is generally safe. Stick to tourist areas, use app-based cabs, dress conservatively in religious sites, and keep your hotel's number handy. Most locals are helpful and welcoming.",
      },
      {
        question: "How many days are enough for Rajasthan?",
        answer:
          "A Golden Triangle + Rajasthan circuit (Delhi–Jaipur–Jodhpur–Udaipur) takes 8–10 days. For a thorough experience including Jaisalmer and Pushkar, plan 12–14 days.",
      },
      {
        question: "Can I do a desert safari in Rajasthan?",
        answer:
          "Absolutely! Jaisalmer and Bikaner offer camel safaris with overnight desert camping. Book through your hotel or a reputable operator for the Sam Sand Dunes experience.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    state: "Kerala",
    region: "South India",
    description:
      "God's Own Country — Kerala is celebrated for its serene backwaters, lush tea estates in Munnar, pristine beaches in Kovalam, and ancient Ayurvedic traditions. The state blends natural beauty with rich cultural heritage, offering everything from houseboat stays on the Alleppey backwaters to wildlife sightings in Periyar.",
    howToReach: {
      byFlight:
        "International & domestic flights to Kochi (COK), Thiruvananthapuram (TRV), or Kozhikode (CCJ). Kochi is the best entry point with direct flights from Dubai, Singapore, and all Indian metros.",
      byTrain:
        "Konkan Railway connects Mumbai to Kochi (~12 hrs). Kerala Express from Delhi to Thiruvananthapuram (46 hrs). Trains are scenic along the coastal route.",
      byRoad:
        "NH-66 runs along the Kerala coast connecting Mangalore, Kochi, and Thiruvananthapuram. State buses and private coaches operate from Bengaluru, Chennai, and Coimbatore.",
    },
    bestSeason: "September – March",
    bestSeasonDetail:
      "Post-monsoon (Sep–Nov) is lush and green. Peak season (Dec–Jan) is ideal for beaches and backwaters. Monsoon (Jun–Aug) is great for Ayurvedic treatments — many retreats offer monsoon packages.",
    localCuisine: [
      "Sadya (banana leaf feast)",
      "Karimeen Pollichathu",
      "Appam & Stew",
      "Kerala Prawn Curry",
      "Puttu & Kadala",
    ],
    cuisineNote:
      "Kerala cuisine is coconut-forward and rice-based. A traditional Onam Sadya (feast on a banana leaf) with 20+ dishes is an unmissable cultural experience.",
    travelTips: [
      "Book houseboats 2–3 months ahead for peak winter season.",
      "Wear lightweight cotton — humidity stays high year-round.",
      "Hire a local guide for Periyar Wildlife Sanctuary for best wildlife sightings.",
      "Avoid trekking in Munnar during monsoon (Jun–Sep); opt for October–February.",
    ],
    travelerFAQs: [
      {
        question: "What is the best way to experience the Kerala backwaters?",
        answer:
          "An overnight houseboat stay in Alleppey (Alappuzha) is the classic experience. For budget travel, public ferries between Alleppey and Kollam offer stunning scenery at a fraction of the cost.",
      },
      {
        question: "Is Kerala good for a family trip?",
        answer:
          "Kerala is excellent for families — safe, clean, and diverse. Kids love the houseboat experience, elephant encounters at Guruvayur and Kodanad, and the Athirappilly Waterfalls.",
      },
      {
        question: "What Ayurvedic experiences are available in Kerala?",
        answer:
          "Kerala is the birthplace of authentic Ayurveda. Kovalam, Varkala, and Thrissur have reputed Ayurvedic resorts offering Panchakarma treatments, Abhyanga massage, and 7–21 day wellness retreats.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    state: "Ladakh",
    region: "North India (UT)",
    description:
      "The Land of High Passes — Ladakh is an otherworldly Union Territory of moonscapes, turquoise lakes, and ancient Buddhist monasteries perched at altitudes above 3,500m. Famous for Pangong Tso lake, Nubra Valley, Magnetic Hill, and the world's highest motorable roads, Ladakh is a bucket-list destination for adventurers and spiritual seekers alike.",
    howToReach: {
      byFlight:
        "Fly into Leh (IXL) — the only commercial airport at 3,500m altitude. Direct flights from Delhi (1.5 hrs), Mumbai, and Srinagar. Morning slots are better as afternoon turbulence is common.",
      byTrain:
        "There is no railway connection to Leh. The nearest railheads are Jammu (~690 km) and Chandigarh (~490 km via Manali highway). Taxis and buses connect from there.",
      byRoad:
        "Manali–Leh Highway (490 km, open Jun–Oct). Srinagar–Leh Highway via Zoji La Pass (~420 km, open May–Nov). Both routes are adventurous and stunningly scenic.",
    },
    bestSeason: "June – September",
    bestSeasonDetail:
      "June–September is the only reliably accessible window. July and August are warmest (20°C days). Winter (Nov–Feb) sees Chadar Trek on the frozen Zanskar River — only for experienced trekkers.",
    localCuisine: [
      "Thukpa (noodle soup)",
      "Skyu",
      "Momos",
      "Butter Tea (Po Cha)",
      "Tsampa",
    ],
    cuisineNote:
      "Ladakhi food is Tibetan-influenced, high-calorie and warming. Butter tea (Po Cha) is an acquired taste but essential for high-altitude acclimatisation — locals swear by it.",
    travelTips: [
      "Acclimatize for 48 hours in Leh before any high-altitude excursions.",
      "Carry altitude sickness medication (Diamox) as advised by your doctor.",
      "Inner Line Permits required for Nubra Valley, Pangong Tso, and Tso Moriri — apply online.",
      "Cash is king — ATMs in Leh often run dry; carry enough rupees from Chandigarh or Delhi.",
    ],
    travelerFAQs: [
      {
        question: "Is Ladakh accessible for senior citizens?",
        answer:
          "Yes, with precautions. Fly into Leh (do not drive from Manali if over 55 or with heart/lung conditions). Rest for 2 days on arrival. Consult your doctor about Diamox. Many seniors enjoy Leh and nearby monasteries without trekking.",
      },
      {
        question: "What permits do I need for Ladakh?",
        answer:
          "Indian nationals need Inner Line Permits for Nubra Valley, Pangong Tso, and Tso Moriri — these can be obtained online or from the DC Office in Leh. Foreign nationals need Protected Area Permits (PAP) and must travel in groups of 2+.",
      },
      {
        question: "When is the Hemis Festival?",
        answer:
          "Hemis Monastery Festival (Hemis Tsechu) is usually in June/July — one of the most colourful Buddhist festivals in India. Check exact dates each year as they follow the Tibetan lunar calendar.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    state: "Uttar Pradesh",
    region: "North India",
    description:
      "The Spiritual & Heritage Heartland — Uttar Pradesh is home to the Taj Mahal (Agra), the ghats of Varanasi, and 17 other UNESCO World Heritage Sites. As the most-visited state in India, it combines Mughal grandeur, ancient Hindu spirituality, and the rich culinary legacy of Awadh (Lucknow).",
    howToReach: {
      byFlight:
        "Fly into Varanasi (VNS), Lucknow (LKO), or Agra (AGR). All are well-connected with Delhi (30–60 min flight). Prayagraj (IXD) is the gateway for Kumbh Mela.",
      byTrain:
        "Rajdhani and Shatabdi Express connect Delhi to major UP cities. Gatimaan Express to Agra (1.5 hrs from Delhi) is the fastest. Vande Bharat runs to Varanasi from Delhi in 8 hrs.",
      byRoad:
        "Yamuna Expressway: Delhi to Agra (3.5 hrs, 165 km). NH-44 to Lucknow from Delhi (~7 hrs). The expressway network in UP is excellent — self-driving is very comfortable.",
    },
    bestSeason: "October – March",
    bestSeasonDetail:
      "Winters (Oct–Feb) are ideal. Varanasi's Dev Deepawali (Nov) sees the ghats lit with 1 million lamps. Agra is best at sunrise (misty Taj). Avoid April–June when temperatures touch 45°C+.",
    localCuisine: [
      "Lucknowi Biryani",
      "Galouti Kebab",
      "Peda (Mathura)",
      "Banarasi Paan",
      "Malaiyo",
    ],
    cuisineNote:
      "Awadhi cuisine from Lucknow is refined and fragrant — dum biryani and galouti kebab are unmatched. Try street food along Varanasi's ghats: kachori sabzi, lassi, and thandai.",
    travelTips: [
      "Visit Taj Mahal at sunrise — the 6 AM entry slot has fewest tourists and best light.",
      "Ganga Aarti in Varanasi is at dusk — arrive 45 minutes early for a good spot on the ghats.",
      "Dress modestly near temples and ghats — cover shoulders and knees.",
      "Agra's Agra Fort and Fatehpur Sikri are often overlooked but equally magnificent.",
    ],
    travelerFAQs: [
      {
        question: "Is the Taj Mahal open on Fridays?",
        answer:
          "No, the Taj Mahal is closed every Friday for prayers. Plan your visit on any other day. The monument is also closed on national holidays. Entry tickets must be purchased online to skip the queue.",
      },
      {
        question: "What is the best way to experience Varanasi's spirituality?",
        answer:
          "Stay in an old city guesthouse with a Ganges-facing room. Wake before dawn to witness the morning rituals on the ghats. Take a boat ride at sunrise. Attend the Ganga Aarti at Dashashwamedh Ghat at sunset — it's transcendent.",
      },
      {
        question: "Is Kumbh Mela worth attending?",
        answer:
          "The Kumbh Mela (Prayagraj, every 12 years; Ardh Kumbh every 6 years) is the world's largest peaceful gathering. It's transformative and incredibly organized. Book camps and transport 6–12 months in advance.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    state: "Himachal Pradesh",
    region: "North India",
    description:
      "The Land of the Gods — Himachal Pradesh offers the full spectrum of Himalayan adventure and serenity: apple orchards in Kinnaur, backpacker cafés in Kasol, ski slopes in Solang Valley, Tibetan monasteries in Dharamsala (home of the Dalai Lama), and the Spiti Valley's desolate moon-like terrain. Each valley is a world unto itself.",
    howToReach: {
      byFlight:
        "Fly into Kullu–Manali (KUU), Shimla (SLV/Jubbarhatti), or Dharamsala (DHM/Gaggal). Chandigarh (IXC) is the most connected gateway — 3-hr drive to Shimla or 8-hr drive to Manali.",
      byTrain:
        "Kalka–Shimla Toy Train is a UNESCO Heritage Railway (96 km, 5 hrs) — a must-do journey. Chandigarh and Pathankot are main railheads. Overnight trains from Delhi to Chandigarh are convenient.",
      byRoad:
        "Volvo buses run nightly from Delhi ISBT to Manali (~14 hrs) and Shimla (~10 hrs). Self-drive from Delhi to Shimla via NH-5 is 370 km (7 hrs). All major roads are well-maintained.",
    },
    bestSeason: "March – June and September – November",
    bestSeasonDetail:
      "Summer (Mar–Jun) is perfect for Shimla, Manali, and trekking. Monsoon (Jul–Aug) brings landslides — avoid road trips. Post-monsoon (Sep–Nov) has crystal-clear skies for Spiti. Winters are for skiing in Solang Valley.",
    localCuisine: [
      "Dham (festive meal)",
      "Chha Gosht",
      "Siddu",
      "Aktori (Buckwheat Cake)",
      "Madra",
    ],
    cuisineNote:
      "Himachali food is simple, wholesome, and nourishing. Dham — a ceremonial meal cooked by Brahmins — is served at all festivals. In Spiti, try butter tea and tsampa for high-altitude energy.",
    travelTips: [
      "Book Rohtang Pass permits online on the HRTC portal — limited vehicles allowed daily.",
      "Carry warm layers even in summer; temperatures plummet after 3 PM at altitude.",
      "Spiti Valley roads are best tackled with a 4WD; carry a spare tyre and a puncture kit.",
      "Kasol and Kheerganga are great for trekking — avoid the Parvati Valley in monsoon (Jul–Aug).",
    ],
    travelerFAQs: [
      {
        question: "Can I visit Spiti Valley in winter?",
        answer:
          "Spiti is accessible by road only in summer (Jun–Oct). In winter, the only access is by flight to Shimla + local transport. The valley gets cut off by snow and temperatures drop to -30°C. Only highly experienced travellers should attempt it.",
      },
      {
        question: "What trekking routes are popular in Himachal?",
        answer:
          "Popular treks include Triund (easy, near McLeod Ganj), Kheerganga (moderate, Parvati Valley), Hampta Pass (challenging, Manali), Beas Kund (moderate), and the Pin Parvati Trek (expert level).",
      },
      {
        question: "Is Dharamsala good for a spiritual retreat?",
        answer:
          "Absolutely. McLeod Ganj near Dharamsala is the seat of the Tibetan government-in-exile. You can attend teachings by the Dalai Lama (register at the Tibet Office), visit Tsuglagkhang temple, and join meditation retreats at Tushita Meditation Centre.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    state: "Goa",
    region: "West India",
    description:
      "India's Beach Paradise — Goa is more than parties and palm trees. This former Portuguese colony has a unique cultural identity: baroque churches, spice plantations, colonial architecture, vibrant flea markets, and some of India's finest seafood. North Goa pulses with energy; South Goa offers serene luxury.",
    howToReach: {
      byFlight:
        "Fly into Goa Dabolim Airport (GOI) or new Manohar International Airport (MOPA). Direct flights from all Indian metros and international flights from UK, Germany, and Russia.",
      byTrain:
        "Konkan Railway from Mumbai (9 hrs) or Bengaluru (10 hrs) to Madgaon (Margao) station. Vande Bharat from Mumbai to Madgaon in 7.5 hrs. Train is scenic with the Western Ghats backdrop.",
      byRoad:
        "NH-66 coastal highway connects Mumbai (560 km, ~9 hrs) and Bengaluru (560 km, ~9 hrs) to Goa. State buses are cheap; private AC Volvo coaches are comfortable overnight options.",
    },
    bestSeason: "November – February",
    bestSeasonDetail:
      "Peak season (Dec–Jan) is warm, sunny, and festive. November is less crowded with great weather. Shoulder season (Feb–Mar) has good weather with fewer tourists. Monsoon (Jun–Sep) sees most shacks shut but the landscape turns lush — great for budget travel.",
    localCuisine: [
      "Goan Fish Curry Rice",
      "Vindaloo",
      "Xacuti",
      "Bebinca (layer cake)",
      "Ros Omelette",
    ],
    cuisineNote:
      "Goan food is a glorious fusion of Portuguese and Konkani traditions. Fish curry rice is the daily staple. For dessert, Bebinca (a layered coconut-egg cake) is unmissable. Fernandes or Xavier's in Panaji are legendary local restaurants.",
    travelTips: [
      "North Goa for beach parties and nightlife; South Goa (Palolem, Agonda) for peace and luxury.",
      "Rent a scooter (₹300–500/day) — it's the best way to explore both coasts independently.",
      "Book beach shacks for sunset dinners at Arambol or Palolem — arrive early for seats.",
      "Avoid Dec 25–Jan 1 unless booked 6 months in advance — prices triple during Christmas week.",
    ],
    travelerFAQs: [
      {
        question: "Is Goa suitable for a family trip?",
        answer:
          "Yes! South Goa beaches like Palolem and Colva are calm and family-friendly. Kids enjoy spice plantation tours, the Dudhsagar Waterfall trip (4×4 jeep), and dolphin spotting boat trips. Avoid North Goa nightlife areas.",
      },
      {
        question: "What is there to do in Goa beyond beaches?",
        answer:
          "Explore Old Goa's UNESCO churches (Basilica of Bom Jesus), visit Dudhsagar Falls, do a spice plantation tour with lunch, kayak through mangroves in Chorao, or visit the Saturday Night Market (Arpora) or Anjuna Flea Market.",
      },
      {
        question: "Is Goa safe during monsoon?",
        answer:
          "Goa in monsoon (Jun–Sep) is safe but quiet — most beach shacks are shut and swimming is prohibited due to strong currents. However, the interiors are stunning and green, hotels offer 50–70% discounts, and you'll have Old Goa all to yourself.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    state: "Tamil Nadu",
    region: "South India",
    description:
      "The Temple State — Tamil Nadu is a living museum of Dravidian civilization with over 33,000 ancient temples, spectacular temple gopurams (towers), classical Bharatanatyam dance, UNESCO-heritage towns, and a coastline dotted with French colonial architecture. Mahabalipuram, Madurai, Thanjavur, and Ooty are all world-class destinations.",
    howToReach: {
      byFlight:
        "Fly into Chennai (MAA) — a major international hub, Madurai (IXM), Coimbatore (CJB), or Trichy (TRZ). Chennai has direct flights from Singapore, Malaysia, Sri Lanka, and all Indian cities.",
      byTrain:
        "Tamil Nadu Express from Delhi to Chennai (33 hrs). Shatabdi connects Chennai to Coimbatore and Madurai. The Nilgiri Mountain Railway (Ooty toy train) is a UNESCO heritage experience.",
      byRoad:
        "NH-44 runs the length of Tamil Nadu. Excellent state highway network. TNSTC buses are extensive and affordable. Self-drive between temple towns is comfortable and rewarding.",
    },
    bestSeason: "October – March",
    bestSeasonDetail:
      "Post-monsoon (Oct–Dec) and winter (Jan–Mar) are ideal across the state. Avoid April–June (extreme heat, 40°C+). Ooty and Kodaikanal are cooler year-round. Tamil Nadu's east coast receives heavy rain in Nov–Dec during northeast monsoon.",
    localCuisine: [
      "Chettinad Chicken",
      "Pongal",
      "Dosa & Sambar",
      "Filter Coffee",
      "Kuzhi Paniyaram",
    ],
    cuisineNote:
      "Tamil cuisine is rice-centric, tangy with tamarind, and uses a lot of curry leaves and mustard seeds. A proper South Indian filter coffee served in a steel tumbler-davara is a ritual. Chettinad food (from the Chettinad region near Karaikudi) is India's most aromatic cuisine.",
    travelTips: [
      "Temple dress codes are strict — carry a dhoti/lungi or shawl; women need covered attire.",
      "Meenakshi Amman Temple in Madurai is magnificent at dusk when the towers are lit.",
      "Ooty Nilgiri Mountain Railway needs booking months ahead — it's always sold out.",
      "Mahabalipuram's Shore Temple is best visited at dawn before tour groups arrive.",
    ],
    travelerFAQs: [
      {
        question: "What is the best temple circuit in Tamil Nadu?",
        answer:
          "The classic Pancha Bhuta Stalas circuit covers 5 Shiva temples representing the 5 elements: Chidambaram, Thiruvannamalai, Kanchipuram, Kalahasti, and Thiruvanaikoil. Allow 7–10 days. The Brihadeeswarar Temple in Thanjavur (Big Temple) is a must-add.",
      },
      {
        question: "Can I visit Sri Lanka from Tamil Nadu?",
        answer:
          "Yes! The Rameshwaram–Talaimannar ferry service has been proposed but the most common route is Chennai to Colombo by flight (1 hr). Rameshwaram itself is a major pilgrimage site and the gateway to the Gulf of Mannar.",
      },
      {
        question: "Is Tamil Nadu good for wildlife?",
        answer:
          "Yes. Mudumalai National Park (part of the Nilgiri Biosphere Reserve), Anamalai Tiger Reserve (Pollachi), and Vedanthangal Bird Sanctuary are excellent. Mudumalai borders Bandipur (Karnataka) and Wayanad (Kerala) — a combined wildlife circuit is ideal.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    state: "West Bengal",
    region: "East India",
    description:
      "The Cultural Capital of India — West Bengal is the land of Rabindranath Tagore, the Mother Teresa legacy, Durga Puja grandeur, and the Darjeeling Himalayan Railway. From the intellectual energy of Kolkata (formerly Calcutta) to the tea gardens of Darjeeling and the Sundarbans mangrove delta (UNESCO), West Bengal is endlessly layered.",
    howToReach: {
      byFlight:
        "Fly into Netaji Subhas Chandra Bose International Airport, Kolkata (CCU) — a major hub. For Darjeeling: fly to Bagdogra (IXB) near Siliguri. Both have connections from Delhi, Mumbai, and Bengaluru.",
      byTrain:
        "Rajdhani Express from Delhi to Kolkata (17 hrs). Darjeeling Himalayan Railway (Toy Train) from New Jalpaiguri (NJP) is a UNESCO World Heritage ride — 7 hrs of pure nostalgia.",
      byRoad:
        "NH-12 connects Kolkata to other states. Siliguri is the gateway to North Bengal, Sikkim, and the Northeast. Comfortable overnight buses run from Kolkata to Digha (seaside) and Murshidabad (heritage).",
    },
    bestSeason: "October – March",
    bestSeasonDetail:
      "Durga Puja (Sep/Oct) transforms Kolkata into the world's largest open-air art festival. Winter (Nov–Feb) is pleasant at 15–25°C in Kolkata, and cold but clear in Darjeeling (5–15°C). Avoid summer (March–May) — Kolkata gets humid and hot.",
    localCuisine: [
      "Hilsa Fish Curry (Ilish Maach)",
      "Mishti Doi",
      "Rasgolla",
      "Luchi Aloor Dom",
      "Kosha Mangsho",
    ],
    cuisineNote:
      "Bengali food is subtle, sweet-tinged, and fish-forward. Hilsa (Ilish) is the prized fish — eaten poached in mustard sauce. Sweets are a religion here: Mishti Doi, Sandesh, Rasgolla, and Chomchom from Porabari are legendary.",
    travelTips: [
      "Tiger Hill, Darjeeling: arrive by 3:30 AM for the Kanchenjunga sunrise — it's transcendent.",
      "Kolkata's metro is clean, fast, and cheap — use it to navigate across the city.",
      "Durga Puja (Sep/Oct) transforms Kolkata — book hotels 3 months ahead, pandal-hopping is an art.",
      "Sundarbans requires a permit and guided boat tour — plan 2 nights minimum.",
    ],
    travelerFAQs: [
      {
        question: "Is Darjeeling accessible throughout the year?",
        answer:
          "Darjeeling is best from March–May and September–December. Monsoon (Jun–Sep) brings heavy rain and fog. Winter (Dec–Feb) can be very cold (0°C at night) but stunning on clear days. The Toy Train runs year-round, subject to weather.",
      },
      {
        question: "What is special about Sundarbans?",
        answer:
          "Sundarbans is the world's largest mangrove delta — a UNESCO World Heritage Site and home to the Royal Bengal Tiger. Boat safaris through narrow waterways are the primary way to explore it. Stay at eco-lodges in Gosaba or Pakhiralay.",
      },
      {
        question: "When is Durga Puja and how should I plan my visit?",
        answer:
          "Durga Puja falls in September or October (5 days during Navratri). Kolkata's elaborate pandals (marquees) are open all night. Plan to arrive 2–3 days before Shashti (Day 6) for the full experience. The city runs 24/7 — an extraordinary cultural spectacle.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3571072/pexels-photo-3571072.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const REGIONS = [
  "All",
  "North India",
  "South India",
  "East India",
  "West India",
  "North India (UT)",
];

type AccordionSection =
  | "description"
  | "howToReach"
  | "bestSeason"
  | "cuisine"
  | "tips"
  | "faqs";

function StateCard({ guide, index }: { guide: StateGuide; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [openSection, setOpenSection] = useState<AccordionSection | null>(null);

  function toggleSection(section: AccordionSection) {
    setOpenSection((prev) => (prev === section ? null : section));
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="flex-shrink-0 w-80 border border-border rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-smooth snap-start"
    >
      {/* Image + header */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={guide.imageUrl}
          alt={guide.state}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <h3 className="font-display text-lg font-bold text-white leading-tight">
              {guide.state}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <MapPin size={10} className="text-white/70" />
              <span className="text-white/70 text-xs">{guide.region}</span>
            </div>
          </div>
          <Badge className="bg-white/20 text-white border-white/30 text-[10px] px-2 py-0.5">
            <Calendar size={9} className="mr-1" />
            {guide.bestSeason}
          </Badge>
        </div>
      </div>

      {/* Expand toggle */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        data-ocid={`state-expand-${guide.state.toLowerCase().replace(/\s+/g, "-")}`}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left transition-smooth hover:bg-muted/50"
        aria-expanded={expanded}
      >
        <span className="text-sm font-medium text-foreground">
          {expanded ? "Hide details" : "Explore this destination"}
        </span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={15} className="text-muted-foreground" />
        </motion.span>
      </button>

      {/* Expanded accordion content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden border-t border-border"
          >
            <div className="divide-y divide-border">
              {/* Description */}
              <AccordionItem
                section="description"
                open={openSection === "description"}
                onToggle={() => toggleSection("description")}
                icon={<MapPin size={13} />}
                label="About this Destination"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {guide.description}
                </p>
              </AccordionItem>

              {/* How to Reach */}
              <AccordionItem
                section="howToReach"
                open={openSection === "howToReach"}
                onToggle={() => toggleSection("howToReach")}
                icon={<Compass size={13} />}
                label="How to Reach"
              >
                <div className="space-y-3">
                  <ReachMode icon={<Plane size={12} />} label="By Flight">
                    {guide.howToReach.byFlight}
                  </ReachMode>
                  <ReachMode icon={<Train size={12} />} label="By Train">
                    {guide.howToReach.byTrain}
                  </ReachMode>
                  <ReachMode icon={<Truck size={12} />} label="By Road">
                    {guide.howToReach.byRoad}
                  </ReachMode>
                </div>
              </AccordionItem>

              {/* Best Season */}
              <AccordionItem
                section="bestSeason"
                open={openSection === "bestSeason"}
                onToggle={() => toggleSection("bestSeason")}
                icon={<Calendar size={13} />}
                label="Best Season to Visit"
              >
                <div className="space-y-2">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(27,48,34,0.1)",
                      color: "#1B3022",
                    }}
                  >
                    <Calendar size={11} />
                    {guide.bestSeason}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guide.bestSeasonDetail}
                  </p>
                </div>
              </AccordionItem>

              {/* Local Cuisine */}
              <AccordionItem
                section="cuisine"
                open={openSection === "cuisine"}
                onToggle={() => toggleSection("cuisine")}
                icon={<Utensils size={13} />}
                label="Local Cuisine & Food"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {guide.localCuisine.map((dish) => (
                      <span
                        key={dish}
                        className="text-xs bg-muted text-foreground px-2.5 py-1 rounded-full border border-border"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guide.cuisineNote}
                  </p>
                </div>
              </AccordionItem>

              {/* Travel Tips */}
              <AccordionItem
                section="tips"
                open={openSection === "tips"}
                onToggle={() => toggleSection("tips")}
                icon={<Lightbulb size={13} />}
                label="Travel Tips"
              >
                <ul className="space-y-2">
                  {guide.travelTips.map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#A0522D" }}
                      />
                      {tip}
                    </li>
                  ))}
                </ul>
              </AccordionItem>

              {/* Traveler FAQs */}
              <AccordionItem
                section="faqs"
                open={openSection === "faqs"}
                onToggle={() => toggleSection("faqs")}
                icon={<HelpCircle size={13} />}
                label="Traveler FAQ's"
              >
                <div className="space-y-4">
                  {guide.travelerFAQs.map((faq) => (
                    <div key={faq.question}>
                      <p className="text-sm font-semibold text-foreground mb-1 leading-snug">
                        Q: {faq.question}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            </div>

            {/* CTA */}
            <div className="px-4 py-4">
              <a
                href={`https://wa.me/919930998580?text=I'm interested in planning a trip to ${encodeURIComponent(guide.state)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`state-cta-${guide.state.toLowerCase().replace(/\s+/g, "-")}`}
                className="btn-outline-gold rounded-full px-4 py-2 text-xs inline-flex w-full justify-center"
                style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Plan My {guide.state} Trip
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function AccordionItem({
  section,
  open,
  onToggle,
  icon,
  label,
  children,
}: {
  section: AccordionSection;
  open: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        data-ocid={`accordion-${section}`}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/40 transition-smooth"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 text-xs font-semibold text-foreground uppercase tracking-wider">
          <span className="text-muted-foreground">{icon}</span>
          {label}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={13} className="text-muted-foreground" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReachMode({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2.5">
      <div
        className="mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(27,48,34,0.08)", color: "#1B3022" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-semibold text-foreground uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

export function JourneyAtlas() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [query, setQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = STATE_GUIDES.filter((g) => {
    const matchesRegion = activeRegion === "All" || g.region === activeRegion;
    const matchesQuery =
      query.trim() === "" ||
      g.state.toLowerCase().includes(query.toLowerCase()) ||
      g.region.toLowerCase().includes(query.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Page sub-navigation bar with HOME tab */}
      <div
        className="sticky top-[60px] z-40 border-b"
        style={{
          background: "rgba(234,221,205,0.97)",
          borderColor: "rgba(47,54,63,0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="section-padding container-wide">
          <div className="flex items-center gap-1 py-2 overflow-x-auto">
            <Link
              to="/"
              data-ocid="atlas-home-tab"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
              style={{
                background: "#2F363F",
                color: "#EADDCD",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <ArrowLeft size={11} />
              Home
            </Link>
            <span
              className="text-[10px] font-light px-2"
              style={{ color: "rgba(47,54,63,0.3)" }}
            >
              /
            </span>
            <span
              className="text-[11px] font-medium whitespace-nowrap"
              style={{
                color: "#2F363F",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Journey Atlas
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="section-padding container-narrow text-center py-12 md:py-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-label text-muted-foreground mb-4"
        >
          Destination Intelligence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-heading-lg text-foreground mb-5"
        >
          Journey Atlas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          India, state by state. Tap any destination to uncover how to get
          there, when to go, what to eat, traveler tips, and expert FAQs.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search destinations…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            data-ocid="atlas-search-input"
            className="pl-10 bg-muted border-border rounded-full text-sm"
          />
        </motion.div>

        {/* Region filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => setActiveRegion(region)}
              data-ocid={`atlas-filter-${region.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-1.5 rounded-full text-xs transition-smooth border ${
                activeRegion === region
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
              style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              {region}
            </button>
          ))}
        </div>
      </section>

      {/* Horizontal scroll destination row */}
      <section className="section-padding">
        {filtered.length === 0 ? (
          <div className="text-center py-16" data-ocid="atlas-empty-state">
            <p className="text-muted-foreground">
              No destinations match your search. Try a different region or name.
            </p>
          </div>
        ) : (
          <>
            {/* Scroll hint */}
            <p
              className="text-xs text-muted-foreground mb-4 text-center"
              style={{ letterSpacing: "0.08em" }}
            >
              ← Scroll horizontally to explore all destinations →
            </p>
            <div
              ref={scrollRef}
              className="flex flex-row gap-5 overflow-x-auto pb-6 snap-x snap-mandatory"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(0,0,0,0.15) transparent",
                WebkitOverflowScrolling: "touch",
              }}
              data-ocid="atlas-horizontal-scroll"
            >
              {filtered.map((guide, i) => (
                <StateCard key={guide.state} guide={guide} index={i} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* CTA */}
      <section className="section-padding container-narrow text-center py-16 border-t border-border mt-4">
        <p className="font-display text-heading-md text-foreground mb-3">
          Ready to start your journey?
        </p>
        <p className="text-muted-foreground mb-8 text-sm">
          Our experts will craft a personalised itinerary for your chosen
          destination.
        </p>
        <a
          href="https://wa.me/919930998580"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="atlas-whatsapp-cta"
          className="btn-outline-gold rounded-full px-8 py-3 text-sm inline-flex"
          style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Plan My Journey
        </a>
      </section>
    </div>
  );
}
