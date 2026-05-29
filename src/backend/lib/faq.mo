import List "mo:core/List";
import FAQTypes "../types/faq";

module {
  public type FAQ = FAQTypes.FAQ;
  public type FAQId = FAQTypes.FAQId;

  public type NewFAQ = {
    question : Text;
    answer : Text;
    order : Nat;
    category : Text; // "Domestic" | "International" | "Spiritual"
  };

  public func add(
    faqs : List.List<FAQ>,
    faq : NewFAQ,
  ) : FAQId {
    let id = faqs.size();
    let newFAQ : FAQ = {
      id;
      question = faq.question;
      answer = faq.answer;
      order = faq.order;
      category = faq.category;
    };
    faqs.add(newFAQ);
    id;
  };

  public func list(faqs : List.List<FAQ>) : [FAQ] {
    faqs.toArray();
  };

  public func seedInitial(faqs : List.List<FAQ>) {
    if (not faqs.isEmpty()) { return };

    let seeds : [NewFAQ] = [
      // ── Domestic ──────────────────────────────────────────────────────────
      {
        question = "How do I book a domestic tour with Pushkar Tours?";
        answer = "Booking is simple and personal. Reach us via WhatsApp (+91-99309 98580), email travelwithpushkartours@gmail.com, or fill in the inquiry form on our website. Our travel consultant Mrs. Riya Mamghadi will connect with you personally within 24 hours to design a custom itinerary tailored to your needs.";
        order = 1;
        category = "Domestic";
      },
      {
        question = "Which domestic destinations does Pushkar Tours specialise in?";
        answer = "We specialise in India's most iconic destinations — Leh Ladakh, Rajasthan, Kerala Backwaters, Himachal Pradesh, Goa, Uttarakhand, and the North East. Whether you seek mountains, beaches, deserts, or wildlife, we craft personalised journeys that bring the best of India to you.";
        order = 2;
        category = "Domestic";
      },
      {
        question = "What is the best season to travel within India?";
        answer = "India offers year-round travel opportunities. October to March is ideal for Rajasthan and South India. April to June is perfect for hill stations like Manali and Shimla. July to September suits Kerala and the North East with lush monsoon greenery. We recommend planning at least 4–8 weeks in advance for domestic tours.";
        order = 3;
        category = "Domestic";
      },
      {
        question = "Are your domestic tours suitable for families with young children and senior citizens?";
        answer = "Absolutely — family-friendly travel is our core strength. We plan tours with comfortable accommodation, age-appropriate activities, relaxed pacing for senior travellers, and medical accessibility considerations. We also arrange wheelchairs, special meals, and medical assistance on request. Your family's comfort and safety is our top priority.";
        order = 4;
        category = "Domestic";
      },
      {
        question = "Do you offer group discounts for domestic tours?";
        answer = "Yes! We offer attractive group discounts for families, corporate groups, school trips, and pilgrimages. Groups of 6 or more typically enjoy 10–15% savings on tour packages. Contact us with your group size and preferred dates and we will provide a custom group quote.";
        order = 5;
        category = "Domestic";
      },
      // ── International ─────────────────────────────────────────────────────
      {
        question = "What international destinations does Pushkar Tours offer?";
        answer = "We craft bespoke international tours to Southeast Asia (Thailand, Bali, Vietnam), Europe, the Middle East (Dubai, Abu Dhabi), Sri Lanka, Nepal, Bhutan, and beyond. Every international package is fully customised to your interests, budget, and travel style — we handle every detail so you can travel worry-free.";
        order = 1;
        category = "International";
      },
      {
        question = "Do you assist with visa and passport requirements for international travel?";
        answer = "Yes, we provide complete visa assistance for all our international packages — from document checklists and application guidance to appointment scheduling. We strongly recommend having a valid passport with at least 6 months validity before booking. Our team will guide you through every step of the visa process.";
        order = 2;
        category = "International";
      },
      {
        question = "How far in advance should I plan an international trip?";
        answer = "We recommend planning international travel 3–6 months in advance to secure the best flight fares, accommodation, and visa approvals. For peak holiday seasons (December–January, summer April–June), earlier planning is strongly advised. That said, we also assist with short-notice international travel — just reach out via WhatsApp.";
        order = 3;
        category = "International";
      },
      {
        question = "What about currency exchange and travel insurance for international tours?";
        answer = "We advise all international travellers to purchase comprehensive travel insurance covering medical emergencies, trip cancellation, and baggage loss. For currency exchange, we provide guidance on the best rates and methods for your destination. Some packages include forex cards as part of the travel kit — ask our consultant for details.";
        order = 4;
        category = "International";
      },
      // ── Spiritual ─────────────────────────────────────────────────────────
      {
        question = "Does Pushkar Tours organise Char Dham Yatra packages?";
        answer = "Yes, Char Dham Yatra is one of our most cherished offerings. We arrange complete Char Dham packages covering Yamunotri, Gangotri, Kedarnath, and Badrinath with comfortable accommodation, helicopter options, priest services, and medical support. The Yatra season runs from May to June — early booking is highly recommended.";
        order = 1;
        category = "Spiritual";
      },
      {
        question = "Which pilgrimage tours does Pushkar Tours offer?";
        answer = "We offer a wide range of spiritual tours including Char Dham Yatra, Varanasi & Prayagraj, Tirupati, Shirdi, Amarnath Yatra, Kailash Mansarovar, Golden Temple Amritsar, and Jyotirlinga circuits. Each pilgrimage is thoughtfully planned to honour the sanctity of the journey while ensuring your comfort and safety.";
        order = 2;
        category = "Spiritual";
      },
      {
        question = "What should I keep in mind regarding religious travel etiquette?";
        answer = "Respecting local customs is essential for a meaningful pilgrimage experience. Dress modestly and carry a stole or dupatta for temple entry. Remove footwear at sacred sites. Photography may be restricted inside shrines — always check before clicking. Our guides brief you on etiquette specific to each site so your journey is both respectful and enriching.";
        order = 3;
        category = "Spiritual";
      },
      {
        question = "Are spiritual tours suitable for elderly travellers?";
        answer = "Yes, we specially design our spiritual tours keeping elderly and differently-abled pilgrims in mind. We arrange helicopter services for Kedarnath and other high-altitude shrines, palkis (palanquins) where available, comfortable boarding near temple premises, and dedicated assistance throughout the journey. Your darshan experience will be serene and stress-free.";
        order = 4;
        category = "Spiritual";
      },
    ];

    for (seed in seeds.vals()) {
      ignore add(faqs, seed);
    };
  };
};
