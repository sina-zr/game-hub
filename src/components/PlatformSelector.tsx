import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform(platform: Platform): void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errors } = usePlatforms();
  if (errors.length > 0) return null;
  return (
    <Box ps="5px">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
            <HiChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data?.map((p) => (
                <Menu.Item value={p.slug} onClick={() => onSelectPlatform(p)}>
                  {p.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default PlatformSelector;
