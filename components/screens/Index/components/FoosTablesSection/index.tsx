import Section from "@layout/Section";
import Divider from "@ui/Divider";
import SectionTitle from "@ui/SectionTitle";
import Text from "@ui/Text";
import Tables from "./components/Tables";
import Table from "./components/Table";

const tables = [
  {key: "leonhartFigurines", name: "Leonheart"},
  {key: "garlandoFigurines", name: "Garlando"},
  {key: "tornadofigurines", name: "Tornado"},
  {key: "bonziniFigurines", name: "Bonzini"},
  {key: "robertoFigurines", name: "Roberto"},
];

const FoosTablesSection = () => {
  return (
    <Section>
      <Divider />
      <SectionTitle icon="table" title="Столы" />
      <Text>
        Есть несколько производителей столов для официального кикера, признанных
        itsf. Можете почитать подробнее
      </Text>
      <Tables tables={tables} />
      <Text>
        Еще есть Вовин стол, про него тоже почитайте, если хотите. Можете
        перейти в магаизн.
      </Text>
      <Table table={{name: "Vortex", key: "vortexFigurines"}} />
    </Section>
  );
};

export default FoosTablesSection;
