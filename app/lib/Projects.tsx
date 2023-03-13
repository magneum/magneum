"use client";
type Props = {};
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdCode, MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Projects = (props: Props) => {
  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      initial={{
        y: 200,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex relative overflow-x-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        PROJECTS
      </h3>
      <VerticalTimeline className="pt-40">
        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#2f3cd4", color: "#282828" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="https://github.com/magneum">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/github.gif"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">Github</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              GitHub, Inc. is an Internet hosting service for software
              development and version control using Git. It provides the
              distributed version control of Git plus access control, bug
              tracking, software feature requests, task management, continuous
              integration, and wikis for every project.
            </p>
          </Link>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#000", color: "#282828" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="/screens/animehub">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/anime.gif"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">Anime Hub</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Anime is hand-drawn and computer-generated animation originating
              from Japan. Outside of Japan and in English, anime refers
              specifically to animation produced in Japan. However, in Japan and
              in Japanese, anime describes all animated works, regardless of
              style or origin.
            </p>
          </Link>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#085c5c", color: "#282828" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="https://hub.docker.com/repositories/magneum">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/Docker.gif"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">Magneum Docker</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Docker is a set of platform as a service products that use
              OS-level virtualization to deliver software in packages called
              containers. The service has both free and premium tiers. The
              software that hosts the containers is called Docker Engine.
            </p>
          </Link>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#282828", color: "#FFFF" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="https://www.npmjs.com/settings/magneum/packages">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/node.gif"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">
              Node NPM Packages
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              NPM is the worlds largest software registry.<br></br>
              Open source developers from every continent use npm to share and
              borrow packages,and many organizations use npm to manage private
              development as well.
            </p>
          </Link>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#4103fc", color: "#282828" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="/screens/magneumapi">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/server.gif"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">Magneum Api</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              With Magneum you can fetch different types of informations without
              needing to install any dependencies or worrying about servers or
              configurations.
            </p>
          </Link>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#fc7f03", color: "#282828" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="/screens/premiumdl">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/Sound.gif"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">Premiumdl</h3>
            <h4 className="vertical-timeline-element-subtitle">
              YouTube + Spotify
            </h4>
            <p>
              Premiumdl allows you to convert & download video and audio from
              YouTube, Spotify in HD quality. Available formats are .webm .mp4.
              You can easily download for free thousands of videos from YouTube
              and other websites. Once the required video url or song name is
              provided, all the meta informations are shown in the page.
            </p>
          </Link>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#FFFF", color: "#282828" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="https://vlkyre.up.railway.app/vlkyre">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/vlkyre.png"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">
              Vlkyre Home Page
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Vlkyre is a whatsapp bot with automation, moderation, music, games
              and 200+ commands! You can easily deploy your own vlkyre by using
              npm. To Find Out What Vlkyre Offers, Join Any Vlkyre Official
              Groups in vlkyre-home-page.
            </p>
          </Link>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdWork />}
          date=""
          iconStyle={{ background: "#FF0000", color: "#282828" }}
          contentStyle={{ background: "#282828", color: "#FFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          className="vertical-timeline-element--work rounded-xl hover:scale-105"
        >
          <Link href="https://www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA">
            <Image
              height={400}
              width={400}
              alt=""
              src="/projects/YouTube.gif"
              className="rounded-xl"
            ></Image>
            <h3 className="vertical-timeline-element-title">Vlkyre YouTube</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              GitHub, Inc. is an Internet hosting service for software
              development and version control using Git. It provides the
              distributed version control of Git plus access control, bug
              tracking, software feature requests, task management, continuous
              integration, and wikis for every project.
            </p>
          </Link>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
};

export default Projects;

{
  /* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-[#19191a] scrollbar-thumb-blue-900">
<Experience />
</div> */
}
