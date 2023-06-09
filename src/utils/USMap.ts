import type { State } from "../customTypes";

export const allStates: State[] = [
  { id: "al", val: "01", fullName: "Alabama" },
  { id: "ak", val: "02", fullName: "Alaska" },
  { id: "az", val: "04", fullName: "Arizona" },
  { id: "ar", val: "05", fullName: "Arkansas" },
  { id: "ca", val: "06", fullName: "California" },
  { id: "co", val: "08", fullName: "Colorado" },
  { id: "ct", val: "09", fullName: "Connecticut" },
  { id: "de", val: "10", fullName: "Delaware" },
  { id: "dc", val: "11", fullName: "Washington D.C." },
  { id: "fl", val: "12", fullName: "Florida" },
  { id: "ga", val: "13", fullName: "Georgia" },
  { id: "hi", val: "15", fullName: "Hawaii" },
  { id: "id", val: "16", fullName: "Idaho" },
  { id: "il", val: "17", fullName: "Illinois" },
  { id: "in", val: "18", fullName: "Indiana" },
  { id: "ia", val: "19", fullName: "Iowa" },
  { id: "ks", val: "20", fullName: "Kansas" },
  { id: "ky", val: "21", fullName: "Kentucky" },
  { id: "la", val: "22", fullName: "Louisiana" },
  { id: "me", val: "23", fullName: "Maine" },
  { id: "md", val: "24", fullName: "Maryland" },
  { id: "ma", val: "25", fullName: "Massachusetts" },
  { id: "mi", val: "26", fullName: "Michigan" },
  { id: "mn", val: "27", fullName: "Minnesota" },
  { id: "ms", val: "28", fullName: "Mississippi" },
  { id: "mo", val: "29", fullName: "Missouri" },
  { id: "mt", val: "30", fullName: "Montana" },
  { id: "ne", val: "31", fullName: "New England" },
  { id: "nv", val: "32", fullName: "Nevada" },
  { id: "nh", val: "33", fullName: "New Hampshire" },
  { id: "nj", val: "34", fullName: "New Jersey" },
  { id: "nm", val: "35", fullName: "New Mexico" },
  { id: "ny", val: "36", fullName: "New York" },
  { id: "nc", val: "37", fullName: "North Carolina" },
  { id: "nd", val: "38", fullName: "North Dakota" },
  { id: "oh", val: "39", fullName: "Ohio" },
  { id: "ok", val: "40", fullName: "Oklahoma" },
  { id: "or", val: "41", fullName: "Oregon" },
  { id: "pa", val: "42", fullName: "Pennsylvania" },
  { id: "ri", val: "44", fullName: "Rhode Island" },
  { id: "sc", val: "45", fullName: "South Carolina" },
  { id: "sd", val: "46", fullName: "South Dakota" },
  { id: "tn", val: "47", fullName: "Tennessee" },
  { id: "tx", val: "48", fullName: "Texas" },
  { id: "ut", val: "49", fullName: "Utah" },
  { id: "vt", val: "50", fullName: "Vermont" },
  { id: "va", val: "51", fullName: "Virginia" },
  { id: "wa", val: "53", fullName: "Washington (State)" },
  { id: "wv", val: "54", fullName: "West Virginia" },
  { id: "wi", val: "55", fullName: "Wisconsin" },
  { id: "wy", val: "56", fullName: "Wyoming" },
];

export const getStateNameFromVal = (stateVal: string) => {
  const result = allStates.find((s) => s.val === stateVal);
  return result?.fullName || "";
};
