import List "mo:core/List";
import ToursTypes "../types/tours";

module {
  public type TourPackage = ToursTypes.TourPackage;
  public type PackageId = ToursTypes.PackageId;

  public type NewTourPackage = {
    title : Text;
    description : Text;
    destination : Text;
    price_inr_min : Nat;
    price_inr_max : Nat;
    duration_days : Nat;
    highlights : [Text];
    best_season : Text;
  };

  public func add(
    packages : List.List<TourPackage>,
    pkg : NewTourPackage,
  ) : PackageId {
    let id = packages.size();
    let newPkg : TourPackage = {
      id;
      title = pkg.title;
      description = pkg.description;
      destination = pkg.destination;
      price_inr_min = pkg.price_inr_min;
      price_inr_max = pkg.price_inr_max;
      duration_days = pkg.duration_days;
      highlights = pkg.highlights;
      best_season = pkg.best_season;
    };
    packages.add(newPkg);
    id;
  };

  public func list(packages : List.List<TourPackage>) : [TourPackage] {
    packages.toArray();
  };

  public func seedInitial(packages : List.List<TourPackage>) {
    if (not packages.isEmpty()) { return };

    let seeds : [NewTourPackage] = [
      {
        title = "Leh Ladakh Adventure";
        description = "Experience the breathtaking landscapes of Leh Ladakh — from the shimmering Pangong Lake to the soaring Khardung La pass. A journey through the roof of the world, blending adventure with ancient Tibetan culture and Buddhist monasteries.";
        destination = "Leh Ladakh, Jammu & Kashmir";
        price_inr_min = 35000;
        price_inr_max = 55000;
        duration_days = 7;
        highlights = [
          "Pangong Tso Lake visit",
          "Khardung La Pass (World's highest motorable road)",
          "Thiksey & Hemis Monastery",
          "Nubra Valley & Bactrian camel safari",
          "Magnetic Hill experience",
          "Shanti Stupa sunset views",
        ];
        best_season = "June – September";
      },
      {
        title = "Rajasthan Heritage Circuit";
        description = "Journey through the royal splendour of Rajasthan — the land of maharajas, golden deserts, and magnificent forts. Explore Jaipur's Pink City, Udaipur's shimmering lakes, Jodhpur's Blue City, and the golden dunes of Jaisalmer.";
        destination = "Jaipur, Udaipur, Jodhpur, Jaisalmer, Rajasthan";
        price_inr_min = 25000;
        price_inr_max = 42000;
        duration_days = 8;
        highlights = [
          "Amber Fort & City Palace, Jaipur",
          "Mehrangarh Fort, Jodhpur",
          "Udaipur's Lake Pichola boat ride",
          "Jaisalmer Desert Safari & overnight camp",
          "Havelis and local bazaars",
          "Traditional Rajasthani cuisine experience",
        ];
        best_season = "October – March";
      },
      {
        title = "Kerala Backwaters Retreat";
        description = "Drift along the serene backwaters of Kerala on a traditional houseboat, surrounded by swaying coconut palms and lush paddy fields. Experience Ayurvedic wellness, spice plantations, and the pristine beaches of Kovalam.";
        destination = "Kochi, Alleppey, Munnar, Kovalam, Kerala";
        price_inr_min = 28000;
        price_inr_max = 48000;
        duration_days = 6;
        highlights = [
          "Alleppey houseboat overnight stay",
          "Munnar tea plantation tour",
          "Kathakali & Kalaripayattu performance",
          "Periyar Wildlife Sanctuary",
          "Ayurvedic spa & rejuvenation session",
          "Fort Kochi heritage walk",
        ];
        best_season = "September – March";
      },
      {
        title = "Himachal Pradesh Escapade";
        description = "Discover the enchanting hill stations and mountain valleys of Himachal Pradesh. From the colonial charm of Shimla to the apple orchards of Manali and the spiritual vibe of Old Manali — a perfect Himalayan retreat.";
        destination = "Shimla, Manali, Kullu, Himachal Pradesh";
        price_inr_min = 20000;
        price_inr_max = 35000;
        duration_days = 5;
        highlights = [
          "Solang Valley snow activities",
          "Rohtang Pass (seasonal)",
          "Mall Road, Shimla stroll",
          "Kullu River rafting",
          "Hadimba Devi Temple, Manali",
          "Local Himachali cuisine & craft villages",
        ];
        best_season = "March – June, October – December";
      },
      {
        title = "Char Dham Yatra";
        description = "Embark on one of India's most sacred pilgrimages — the Char Dham Yatra. Visit Yamunotri, Gangotri, Kedarnath, and Badrinath nestled in the majestic Himalayas of Uttarakhand. A spiritually transformative journey through divine landscapes.";
        destination = "Yamunotri, Gangotri, Kedarnath, Badrinath, Uttarakhand";
        price_inr_min = 22000;
        price_inr_max = 38000;
        duration_days = 10;
        highlights = [
          "Darshan at all four sacred dhams",
          "Kedarnath helicopter option available",
          "Gangotri Glacier & River Ganga origin",
          "Valley of Flowers en route (seasonal)",
          "Mana Village — last village before Tibet",
          "Experienced religious guide & puja arrangements",
        ];
        best_season = "May – June, September – October";
      },
      {
        title = "Goa Beach Holiday";
        description = "Unwind on Goa's sun-kissed beaches with a perfect blend of relaxation, adventure, and vibrant nightlife. From the tranquil north Goa shores to the serene south Goa beaches, experience the unique Portuguese-Indian culture and fresh seafood.";
        destination = "North & South Goa";
        price_inr_min = 18000;
        price_inr_max = 30000;
        duration_days = 4;
        highlights = [
          "Baga & Calangute beach leisure",
          "Water sports — parasailing, jet ski, scuba",
          "Old Goa churches UNESCO heritage tour",
          "Spice plantation tour with Goan lunch",
          "Dudhsagar Waterfalls day trip",
          "Goan seafood trail & night market",
        ];
        best_season = "November – February";
      },
    ];

    for (seed in seeds.vals()) {
      ignore add(packages, seed);
    };
  };
};
