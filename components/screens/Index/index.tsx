import Title from "@ui/Title";
import League from "./components/LeagueSection";
import Tables from "./components/FoosTablesSection";
import RulesAndRefereeing from "./components/RulesAndRefereeingSection";
import css from "./styles.module.css";

const Index = () => {
  return (
    <div className={css.page}>
      <Title text="Федерация спортивного кикера" />
      <League />
      <Tables />
      <RulesAndRefereeing />
    </div>
  );
};

export default Index;
