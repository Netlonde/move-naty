import { useEffect, useState } from "react";

function useCustomSearchInputController(
  handleSearch: (searchString: string) => void
) {
  const [searchValue, setSearchValue] = useState("");

  return {
    setSearchValue,
  };
}

export default useCustomSearchInputController;
