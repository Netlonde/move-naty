/* eslint-disable react/jsx-props-no-spreading */
import { TextField, InputAdornment } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import CustomSearchInputProps from "./CustomSearchInput.props";
import InputContainer from "./CustomSearchInput.style";
import useCustomSearchInputController from "./CustomSearchInput.controller";

export function CustomSearchInput(props: CustomSearchInputProps) {
  const { register, handleSearch, searchText, id } = props;

  return (
    <InputContainer>
      <TextField
        placeholder={searchText || "Pesquisar"}
        className="searchInput"
        id={id}
        type="text"
        {...register}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <SearchIcon /> */}
            </InputAdornment>
          ),
        }}
      />
    </InputContainer>
  );
}
