import Section from "@layout/Section";
import SectionTitle from "@ui/SectionTitle";
import Divider from "@ui/Divider";
import Text from "@ui/Text";
import Slider from "@ui/Slider";

import {slides} from "./constants";
import DownloadRules from "./components/DownloadRules";

const RulesAndRefereeing = () => {
  return (
    <Section>
      <Divider />
      <SectionTitle icon="rules" title="Правила и судейство" />
      <Text>
        В этой игре есть правила)))))))))00)) Краткие правила в карусельке ниже:
      </Text>
      <Slider slides={slides} />
      <DownloadRules />
    </Section>
  );
};

export default RulesAndRefereeing;
