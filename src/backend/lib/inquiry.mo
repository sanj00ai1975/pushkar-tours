import List "mo:core/List";
import InquiryTypes "../types/inquiry";
import Common "../types/common";

module {
  public type Inquiry = InquiryTypes.Inquiry;
  public type InquiryId = InquiryTypes.InquiryId;

  public func submit(
    inquiries : List.List<Inquiry>,
    name : Text,
    email : Text,
    phone : Text,
    destination : Text,
    travel_dates : Text,
    message : Text,
    timestamp : Common.Timestamp,
  ) : InquiryId {
    let id = inquiries.size();
    let inquiry : Inquiry = {
      id;
      name;
      email;
      phone;
      destination;
      travel_dates;
      message;
      timestamp;
    };
    inquiries.add(inquiry);
    id;
  };

  public func list(inquiries : List.List<Inquiry>) : [Inquiry] {
    inquiries.toArray();
  };
};
