import Image from "next/image";

import Text from "@ui/Text";
import Button from "@ui/Button2";
import Divider from "@ui/Divider";
import css from "./styles.module.css";

const DownloadRules = () => {
  const downloadRules = () => {
    console.log("DownloadRules");
  };

  return (
    <Button onClick={downloadRules} className={css.container}>
      <Image width={13} height={12} src="/document.svg" alt="document" />
      <Text>Правила игры в кикер.pdf</Text>
      <Divider direction="column" />
      <Image width={24} height={24} src="/download.svg" alt="download" />
    </Button>
  );
};

export default DownloadRules;
