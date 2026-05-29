import Common "common";

module {
  public type InquiryId = Nat;

  public type Inquiry = {
    id : InquiryId;
    name : Text;
    email : Text;
    phone : Text;
    destination : Text;
    travel_dates : Text;
    message : Text;
    timestamp : Common.Timestamp;
  };
};
