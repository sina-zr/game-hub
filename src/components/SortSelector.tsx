import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = (props: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rate" },
  ];

  return (
    <Box ps="5px">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            OrderBy: {props.selectedOrder ? sortOrders.find((o) => o.value == props.selectedOrder)?.label : "Relevance"}
            <HiChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrders?.map((s) => (
                <Menu.Item value={s.value} onClick={() => props.onSelectOrder(s.value)}>
                  {s.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
