module {
  public type PackageId = Nat;

  public type TourPackage = {
    id : PackageId;
    title : Text;
    description : Text;
    destination : Text;
    price_inr_min : Nat;
    price_inr_max : Nat;
    duration_days : Nat;
    highlights : [Text];
    best_season : Text;
  };
};
