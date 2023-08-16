import TeamCard from "./components/TeamCard";
import UserCard from "./components/UserCard";
import TeamCardCertification from "./components/TeamCardCertification";
import TypologyCard from "./components/TypologyCard";
import SelfAssessmentCard from "./components/SelfAssessmentCard";
import PaqCard from "./components/PaqCard";

const HomePage = () => {
  return (
    <section className="pt-5">
      <div className="mb-6 grid gap-6 sm:grid-cols-1 xl:grid-cols-2">
        <TeamCard />
        <UserCard />
        <TeamCardCertification />
        <TypologyCard />
        <SelfAssessmentCard />
        <PaqCard />
      </div>
    </section>
  );
};

export default HomePage;
