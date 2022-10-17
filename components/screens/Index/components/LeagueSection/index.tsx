import Section from "@layout/Section";
import SectionTitle from "@ui/SectionTitle";
import Text from "@ui/Text";
import Divider from "@ui/Divider";
import Button from "@ui/Button";

import Cities from "./components/Cities";
import {cities} from "./constants";

const onClick = () => {
  location.href = "http://kicker.aantropov.ru";
};

const League = () => {
  return (
    <Section>
      <Divider />
      <SectionTitle icon="league" title="Лига" />
      <Text>
        В некоторых городах россии проводится командная лига. Ниже вы можете
        подробнее узнать о проведении лиги в вашем городе, скачать протоколы
        игр, связаться с организатором лиги в соответствующем городе.
      </Text>
      <Cities cities={cities} />
      <Text>
        Если хотите ввести счеты или посмотреть результаты сезона, перейдите на
        сайт ниже.
      </Text>
      <Button name="Перейти на сайт" onClick={onClick} />
    </Section>
  );
};

export default League;
