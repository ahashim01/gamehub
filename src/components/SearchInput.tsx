import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        type="text"
        placeholder="Search games..."
        aria-label="Search"
        borderRadius={20}
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
