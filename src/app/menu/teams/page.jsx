import member1 from "./img/SalunkeSir.jpg";
import Member from "@/components/Member/Member";
import "./teams.css";
import "../clan/clan.css";
const members = [
{ img: member1, name: "Dr. Mahendra Salunke", position:"Event Co-ordinator",
img: member1, name: "Dr. Mahendra Salunke", position:"Event Co-ordinator",
img: member1, name: "Dr. Mahendra Salunke", position:"Event Co-ordinator" }
];
export default function Teams() {
return (
  <div className=" text-center text-lg">
     Team Coming soon 
      {/* <div className="team" style={{ }}>
      <h1>Our Team</h1>

      <div className="team_wrapper">
        <div className="team_row">
          {members.map((member) => {
            return (
              <>
                <Member name={member.name} image={member.img} position={member.position}/>
              </>
            );
          })}
          </div>


        <h2>Complete Team</h2>
        <div className="team_row">
          {members.map((member) => {
            return (
              <>
                <Member name={member.name} image={member.img} position={member.position} />
              </>
            );
          })}
        </div> 
      </div>
    </div> */}
  </div>
);
}
