import List "mo:core/List";
import ToursTypes "../types/tours";
import ToursLib "../lib/tours";

mixin (packages : List.List<ToursTypes.TourPackage>) {
  public shared func addTourPackage(pkg : ToursLib.NewTourPackage) : async ToursTypes.PackageId {
    ToursLib.add(packages, pkg);
  };

  public query func getTourPackages() : async [ToursTypes.TourPackage] {
    ToursLib.list(packages);
  };
};
