import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export default function SearchInput() {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input borderRadius={20} variant="subtle" placeholder="Search Games ..." />
    </InputGroup>
  );
}
