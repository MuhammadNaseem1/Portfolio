import Image from "next/image";
import Link from "next/link";

import aizen from "@/public/work/aizen.jpg";
import kamui from "@/public/work/kamui.jpg";
import pokedex from "@/public/work/pokedex.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import cryptohunter from "@/public/work/crypto-hunter.jpg";
import redeye from "@/public/work/red-eye.jpg";
import evo from "@/public/work/evo.jpg";
import notion from "@/public/work/notion.jpg";
import nike from "@/public/work/nike.jpg";
import training from "@/public/work/training.png";
import eCMS from "@/public/work/eCMS.jpg";
import HK from "@/public/work/HK.jpg";
import SPP from "@/public/work/SPP.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: training,
      title: "Training Dashboard",
      description: "Management System for Training Programmes",
      link: "https://training.pphisindh.org/",
      target: "_self",
    },
    {
      id: 2,
      image: HK,
      title: "Hamara Kissan",
      description:
        "Farmer support platform with real-time weather via Open Meteo API, Redux Toolkit state management, and Firebase notifications",
      link: "http://hamarakissan.com/",
      target: "_self",
    },
    {
      id: 3,
      image: SPP,
      title: "Sheeba's Play Place",
      description:
        "Educational institute app for kids, upgraded to the latest React Native version and published on Play Store & App Store",
      link: "https://play.google.com/store/apps/details?id=com.eteamid.spp&pcampaignid=web_share",
      target: "_self",
    },
    {
      id: 4,
      image: evo,
      title: "BotAI",
      description:
        "AI-powered app for PDF upload and intelligent data extraction using Google Gemini embeddings, built with Laravel and Node.js",
      link: "https://www.chatpdf.com/?utm_source=google&utm_medium=cpc&utm_campaign=20999309892&utm_term=chatpdf&utm_content=725197736766&device=c&matchtype=e&network=g&adposition=&gclid=Cj0KCQiAst67BhCEARIsAKKdWOk3HE7p9xjQ6Vbl6acTTEVHyW8Ec5O_b2fqGNzYQ8X339d_jdtcfJ0aAus4EALw_wcB&gad_source=1",
      target: "_blank",
    },
    {
      id: 5,
      image: eCMS,
      title: "eCMS ChildLife",
      description:
        "Complaint management system for ChildLife Foundation, upgraded to the latest React Native version with improved UI",
      link: "https://childlifefoundation.org/",
      target: "_blank",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map((project) => {
        return (
          <div
            className="group rounded-2xl mb-6 flex flex-col items-center bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              className="w-full flex justify-center overflow-hidden rounded-xl"
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-xl drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center mt-2">
              <h1 className="font-semibold text-[1.35rem] mt-3 text-gray-800 dark:text-white tracking-tight">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-500 dark:text-gray-400 font-normal text-center text-sm mt-1 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
