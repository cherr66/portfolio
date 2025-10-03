import goswimThumb from "/images/portfolio/goswim/thumnail.png";
import aceDemoThumb from "/images/portfolio/ace_demo/thumnail.png";
import cardosseumThumb from "/images/portfolio/cardosseum/thumnail.jpg";
import heartOfJungleThumb from "/images/portfolio/heart_of_the_jungle/thumnail.jpg";
import arCardsThumb from "/images/portfolio/ar_cards/1.jpg";
import crazyEightThumb from "/images/portfolio/crazy8/1.jpg";
import unleashedLoveThumb from "/images/portfolio/unleashed_love/1.jpg";

import zenArt from "/images/illustrations/22/zen.jpg";
import heidiArt from "/images/illustrations/21/heidi2.png";
import giftArt from "/images/illustrations/21/gift.png";
import animeArt from "/images/illustrations/20/anime5.png";
import miscArt from "/images/illustrations/20/misc5.png";
import photography4 from "/images/photography/4.jpg";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/xuexianchen073011106093/",
    icon: "fab fa-linkedin fa-lg",
    colorClass: "hover:text-blue-600",
    newTab: true,
  },
  {
    href: "https://rottencarambola.itch.io/",
    icon: "fas fa-gamepad fa-lg",
    colorClass: "hover:text-pink-500",
    newTab: true,
  },
  {
    href: "mailto:rorychen168@gmail.com",
    icon: "fas fa-envelope fa-lg",
    colorClass: "hover:text-red-500",
    newTab: false,
  },
  {
    href: "https://github.com/cherr66/",
    icon: "fab fa-github fa-lg",
    colorClass: "hover:text-purple-500",
    newTab: true,
  },
];

export const homePageProjects = [
  {
    name: "GoSwim",
    href: "/work/goswim",
    img: goswimThumb,
    description: "3D Casual Game | Unity + Blender",
    imgPosition: "right",
  },
  {
    name: "ACE (demo)",
    href: "/work/acedemo",
    img: aceDemoThumb,
    description: "Chrome add-on | Html + CSS + JS",
    imgPosition: "center",
  },
  {
    name: "Cardosseum",
    href: "/work/cardosseum",
    img: cardosseumThumb,
    description: "2D Deckbuilder Game | Unity",
    imgPosition: "center",
  },
  {
    name: "Heart of the Jungle",
    href: "/work/heartofthejungle",
    img: heartOfJungleThumb,
    description: "2D Platformer | Unity",
    imgPosition: "center",
  },
  {
    name: "AR Cards",
    href: "/work/arcards",
    img: arCardsThumb,
    description: "Augmented Reality App | Unity + AR Core",
    imgPosition: "center",
  },
  {
    name: "Crazy Eight",
    href: "/work/crazy8",
    img: crazyEightThumb,
    description: "2D Card Game | JavaFX + FXML + Scene Builder",
    imgPosition: "center",
  },
  {
    name: "Unleashed Love",
    href: "/work/unleashedlove",
    img: unleashedLoveThumb,
    description: "Interactive Story | Ren’Py",
    imgPosition: "right",
  },
];

export const artsPageLinks = [
  {
    href: "/arts/illustration/#photo-zen",
    img: zenArt,
    alt: "zen",
    objectPosition: "bottom",
    scale: 1,
  },
  {
    href: "/arts/illustration/#photo-heidi",
    img: heidiArt,
    alt: "heidi",
    objectPosition: "bottom",
    scale: 2,
  },
  {
    href: "/arts/illustration/#photo-gift",
    img: giftArt,
    objectPosition: "bottom",
    scale: 1,
    alt: "gift",
  },
  {
    href: "/arts/illustration/#photo-anime",
    img: animeArt,
    objectPosition: "bottom",
    scale: 1,
    alt: "anime",
  },
  {
    href: "/arts/illustration/#photo-misc",
    img: miscArt,
    objectPosition: "bottom",
    scale: 1,
    alt: "misc",
  },
  {
    href: "/arts/photography/",
    img: photography4,
    objectPosition: "center",
    scale: 1,
    alt: "photography",
  },
];
