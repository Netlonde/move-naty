import { UseFormRegisterReturn } from 'react-hook-form';

interface CustomSearchInputProps {
  register?: UseFormRegisterReturn<string>;
  handleSearch: (searchText: string) => void;
  searchText?: string;
  id?: string;
}

export default CustomSearchInputProps;
