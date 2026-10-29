export type PastEvent = {
  date: string;
  title: string;
  detail?: string;
  role?: string;
};

export const pastEvents: PastEvent[] = [
  {
    date: "September 2026",
    title: "United Colours of Fashion",
    role: "Co-Host",
  },
  {
    date: "September 2026",
    title: "Daneesha Provo’s All Star Five",
    role: "Event Host",
  },
  {
    date: "July 2026",
    title: "CamJam – Canada Day",
    detail: "Upper Hammonds Plains Community",
    role: "Host",
  },
  {
    date: "May 2026",
    title: "Read 2 Achieve Youth Program",
    detail: "For the Delmore Buddy Daye Learning Institute",
    role: "Guest Speaker",
  },
  {
    date: "October 2025",
    title: "Paris Fashion Week Show",
    detail: "Designer A.Kith",
    role: "Event Host",
  },
  {
    date: "August 2025",
    title: "Shady Pines Community BBQ",
    role: "Event Host",
  },
];
