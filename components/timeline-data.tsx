import Link from "next/link";
import { TimelineContent, TimelineEntry } from "./ui/timeline";

export const timelineData: TimelineEntry[] = [
  {
    title: "SoftwareSeni Indonesia, Backend Developer",
    content: (
      <TimelineContent
        date="August 2020 - Present"
        summary={
          <>
            <div>
              Developed a backend microservice for{" "}
              <Link
                target="_blank"
                className="hover:font-bold"
                href="https://akarinti.tech/id/portfolio/e-food-by-nabati"
              >
                <u>eFood</u>
              </Link>
              , a widely used online food delivery and ordering application in
              Indonesia. Utilized NestJS, TypeORM, PostgreSQL, NATS, and Docker
              in the development process.
            </div>
            <div>
              Built a backend for an AI-Powered copywriting tool for real estate
              marketing called ListSMRT with NestJS, Sequelize, PostgreSQL,
              WebSocket, and OpenAI API.
            </div>
            <div>
              Developed and maintained the backend for Pepy, a time-tracking
              software and productivity tool, using Express.js, Golang,
              Sequelize, and MySQL.
            </div>
            <div>
              Maintained a large-scale real-estate CMS system for Agentpoint
              working alongside teams in the UK and Australia using Laravel.
              Maintained backend system in Agentpoint that communicates across
              all services in Agentpoint with technologies like Laravel,
              MongoDB, and GraphQL.
            </div>
          </>
        }
      />
    ),
  },
  {
    title: "DOT Indonesia, Backend Developer (Freelance)",
    content: (
      <TimelineContent
        date="January 2022 - July 2022"
        summary={
          <>
            <div>
              Worked on the backend system for the NFT store application,{" "}
              <Link
                target="_blank"
                className="hover:font-bold"
                href="https://akarinti.tech/id/portfolio/e-food-by-nabati"
              >
                <u>NFT Infinity</u>
              </Link>
              , using NestJS, TypeORM, PostgreSQL, and Web3 technology Solidity.
            </div>
          </>
        }
      />
    ),
  },
  {
    title: "OXY Creative, Software Developer",
    content: (
      <TimelineContent
        date="March 2020 - May 2020"
        summary={
          <>
            <div>
              Developed a mobile application for money lending named Jembatan
              Emas using React Native, with a focus on creating code that is
              clean, efficient, and easily maintainable.
            </div>
          </>
        }
      />
    ),
  },
  {
    title: "Verint Systems, Technical Consultant",
    content: (
      <TimelineContent
        date="December 2019 - February 2020"
        summary={
          <>
            <div>
              Conducted thorough analysis of technical issues reported by
              customers, and provided technical support to customers, assisting
              them with various technical issues.
            </div>
          </>
        }
      />
    ),
  },
];
