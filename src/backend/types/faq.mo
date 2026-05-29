module {
  public type FAQId = Nat;

  public type FAQ = {
    id : FAQId;
    question : Text;
    answer : Text;
    order : Nat;
    category : Text; // "Domestic" | "International" | "Spiritual"
  };
};
