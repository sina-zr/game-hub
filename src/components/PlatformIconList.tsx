import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  slugs: string[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation3: FaPlaystation,
  playstation4: FaPlaystation,
  playstation5: FaPlaystation,
  "xbox-series-x": FaXbox,
  xbox360: FaXbox,
  "xbox-one": FaXbox,
  "nintendo-switch": BsNintendoSwitch,
  linux: FaLinux,
  macos: FaApple,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

const PlatformIconList = ({ slugs }: Props) => {
  return (
    <HStack>
      {[...new Set(slugs.map((s) => iconMap[s]))] // deduplicate icons
        .filter((IconComponent): IconComponent is IconType => IconComponent !== undefined) // remove undefined
        .map((IconComponent, index) => (
          <Icon as={IconComponent} key={index} color="gray.500" />
        ))}
    </HStack>
  );
};

export default PlatformIconList;
