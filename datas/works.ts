// images
import Isobox from "@/assets/images/isobox.png";
import TheSsencard from "@/assets/images/thessencard.jpg";
import Hatch from "@/assets/images/hatch-3d.png";
import Pantasia from "@/assets/images/pantasia.png";
import Hitthepic from "@/assets/images/hitthepic.png";

export const projects = [
  {
    id: 1,
    title: "더쎈카드 혜택 추천 어플",
    description: "마이데이터 기반 카드 추천 및 혜택 모니터링 서비스 어플 개발",
    image: TheSsencard,
    tags: ["React Native", "Mobx", "Javascript"],
    github: "#",
    live: "https://play.google.com/store/apps/details?id=com.bigsol.topcard",
    category: "Mobile App",
  },
  {
    id: 2,
    title: "ISOBOX 서비스 소개 페이지",
    description: "이더리움 기반 NFT 지갑을 연동한 소개페이지 개발",
    image: Isobox,
    tags: ["React", "Typescript", "Caver.js", "NFT"],
    github: "#",
    live: "https://www.isobox.io/",
    category: "Web Development",
  },

  {
    id: 3,
    title: "Hatch 3d assets 소셜 커머스",
    description: "버튜버 3d assets 소셜 커머스 개발",
    image: Hatch,
    tags: ["Next.js", "Node.js", "Typescript", "Mysql 8.0", "AWS"],
    github: "#",
    live: "https://hatchpla.net/",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Hitthepic 소개 페이지",
    description: "노션을 활용한 Hatch 3d 서비스 및 회사 소개 랜딩페이지",
    image: Hitthepic,
    tags: ["Next.js", "Notion", "AWS"],
    github: "#",
    live: "https://www.hitthepic.com/",
    category: "Landing page",
  },
  {
    id: 5,
    title: "Pantasia 세계관 설정 서비스",
    description:
      "나만의 위키, 나만의 세계관을 구축할 수 있는 설정집 서비스 개발",
    image: Pantasia,
    tags: ["Next.js", "Node.js", "Typescript", "Postgresql", "AWS"],
    github: "https://github.com/klimes888/theworld_front",
    live: "https://www.pantasia.live/",
    category: "Web Development",
  },
];
