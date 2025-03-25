export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "👨‍🚀",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "💑",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "👩‍👩‍👧‍👦",
    people: "3 to 5",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "🫂",
    people: "5 to 10",
  },
];
export const selectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay consious of costs",
    icon: "💰",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💵",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  },
];
export const AI_PROMPT =
  "Generate Travel Plan for Location:{location}, for {totaldays} days for {traveler} traveller with a {budget} budget, give me a {budget} budget hotels options list with hotelName, Hotel address, hotelPrice, hotel image url,geo coordinates, rating, descriptions and suggest itinerary with placename, Place details,Place Image url,Geo Coordinates, ticket pricing,rating,travel time each of the location for {totaldays} days with each day plan with best time to visit in JSON format.";
