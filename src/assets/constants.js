import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const genres = [
  { title: "Pop", value: "POP", list_id: "genre-global-chart-1" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP", list_id: "genre-global-chart-2" },
  { title: "Dance", value: "DANCE", list_id: "genre-global-chart-3" },
  { title: "Electronic", value: "ELECTRONIC", list_id: "genre-global-chart-4" },
  { title: "Soul", value: "SOUL_RNB", list_id: "genre-global-chart-5" },
  {
    title: "Alternative",
    value: "ALTERNATIVE",
    list_id: "genre-global-chart-6",
  },
  { title: "Rock", value: "ROCK", list_id: "genre-global-chart-7" },
  { title: "Latin", value: "LATIN", list_id: "genre-global-chart-8" },
  { title: "Film", value: "FILM_TV", list_id: "genre-global-chart-9" },
  { title: "Country", value: "COUNTRY", list_id: "genre-global-chart-10" },
  { title: "Worldwide", value: "WORLDWIDE", list_id: "genre-global-chart-12" },
  {
    title: "Reggae",
    value: "REGGAE_DANCE_HALL",
    list_id: "genre-global-chart-13",
  },
  { title: "House", value: "HOUSE", list_id: "genre-global-chart-14" },
  { title: "K-Pop", value: "K_POP", list_id: "genre-global-chart-15" },
];

export const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];
