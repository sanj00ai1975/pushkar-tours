import List "mo:core/List";
import Time "mo:core/Time";
import InquiryTypes "../types/inquiry";
import InquiryLib "../lib/inquiry";

mixin (inquiries : List.List<InquiryTypes.Inquiry>) {
  public shared func submitInquiry(
    name : Text,
    email : Text,
    phone : Text,
    destination : Text,
    travel_dates : Text,
    message : Text,
  ) : async InquiryTypes.InquiryId {
    InquiryLib.submit(
      inquiries,
      name,
      email,
      phone,
      destination,
      travel_dates,
      message,
      Time.now(),
    );
  };

  public query func getInquiries() : async [InquiryTypes.Inquiry] {
    InquiryLib.list(inquiries);
  };
};
