import List "mo:core/List";
import FAQTypes "../types/faq";
import FAQLib "../lib/faq";

mixin (faqs : List.List<FAQTypes.FAQ>) {
  public shared func addFAQ(faq : FAQLib.NewFAQ) : async FAQTypes.FAQId {
    FAQLib.add(faqs, faq);
  };

  public query func getFAQs() : async [FAQTypes.FAQ] {
    FAQLib.list(faqs);
  };
};
