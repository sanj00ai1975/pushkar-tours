import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface NewFAQ {
    question: string;
    order: bigint;
    answer: string;
    category: string;
}
export type Timestamp = bigint;
export type InquiryId = bigint;
export type FAQId = bigint;
export interface FAQ {
    id: FAQId;
    question: string;
    order: bigint;
    answer: string;
    category: string;
}
export type PackageId = bigint;
export interface NewTourPackage {
    title: string;
    destination: string;
    description: string;
    price_inr_max: bigint;
    price_inr_min: bigint;
    highlights: Array<string>;
    duration_days: bigint;
    best_season: string;
}
export interface TourPackage {
    id: PackageId;
    title: string;
    destination: string;
    description: string;
    price_inr_max: bigint;
    price_inr_min: bigint;
    highlights: Array<string>;
    duration_days: bigint;
    best_season: string;
}
export interface Inquiry {
    id: InquiryId;
    destination: string;
    travel_dates: string;
    name: string;
    email: string;
    message: string;
    timestamp: Timestamp;
    phone: string;
}
export interface backendInterface {
    addFAQ(faq: NewFAQ): Promise<FAQId>;
    addTourPackage(pkg: NewTourPackage): Promise<PackageId>;
    getFAQs(): Promise<Array<FAQ>>;
    getInquiries(): Promise<Array<Inquiry>>;
    getTourPackages(): Promise<Array<TourPackage>>;
    submitInquiry(name: string, email: string, phone: string, destination: string, travel_dates: string, message: string): Promise<InquiryId>;
}
