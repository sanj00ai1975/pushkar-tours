import List "mo:core/List";
import InquiryTypes "types/inquiry";
import ToursTypes "types/tours";
import FAQTypes "types/faq";
import ToursLib "lib/tours";
import FAQLib "lib/faq";
import InquiryMixin "mixins/inquiry-api";
import ToursMixin "mixins/tours-api";
import FAQMixin "mixins/faq-api";



actor {
  let inquiries = List.empty<InquiryTypes.Inquiry>();
  let packages = List.empty<ToursTypes.TourPackage>();
  let faqs = List.empty<FAQTypes.FAQ>();

  // Seed initial data on first run
  ToursLib.seedInitial(packages);
  FAQLib.seedInitial(faqs);

  include InquiryMixin(inquiries);
  include ToursMixin(packages);
  include FAQMixin(faqs);
};
