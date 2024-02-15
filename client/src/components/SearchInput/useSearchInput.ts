import { ChangeEvent, useState } from "react";

import { SearchInputProps } from "./SearchInputProps";
import { useDebounce } from "../../hooks/useDebounce";

export const useSearchInput = ({ setApplyQuery }: SearchInputProps) => {
  const [query, setQuery] = useState("");
  const setApplyQueryWidthDelay = useDebounce(setApplyQuery, 500);

  const handleChangeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trimStart();

    setQuery(value);
    setApplyQueryWidthDelay(value);
  };

  const handleClearSearchQuery = () => {
    setQuery("");
    setApplyQuery("");
  };

  return { handleChangeSearchQuery, query, handleClearSearchQuery };
};
