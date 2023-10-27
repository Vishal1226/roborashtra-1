import Image from "next/image";
import "./clan.css";
import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";
import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";
export default function Clan() {
  return (
    <div className="clan">
      <h1 className="title">RoboHawk</h1>
      <p className="clan_text">
        Advanced drone technology, showcasing autonomous flight, obstacle
        avoidance, and precision cinematic capture, all while adhering to
        specific time constraints. This event provides an opportunity to observe
        the future of aerial cinematography and technological innovation in
        action. Advanced drone technology, showcasing autonomous flight,
        obstacle avoidance, and precision cinematic capture, all while adhering
        to specific time constraints.
      </p>
      <div className="social_media">
        <a href="">
          <Image src={instagram} alt="instagram" />
        </a>
        <a href="">
          <Image src={facebook} alt="instagram" />
        </a>

        <a href="">
          <Image src={linkedin} alt="instagram" />
        </a>
        <a href="">
          <Image src={twitter} alt="instagram" />
        </a>
      </div>
    </div>
  );
}
