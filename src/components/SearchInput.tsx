import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input ref={searchRef} borderRadius={20} variant="subtle" placeholder="Search Games ..." />
      </InputGroup>
    </form>
  );
}
