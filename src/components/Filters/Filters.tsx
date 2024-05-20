import {
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { generateTypeOptions, useInputs } from "./Filters.utils";
import { StyledPaper } from "./Filters.styles";

type FiltersProps = {};

const Filters = ({ ...props }: FiltersProps) => {
  const {
    typeInputValue,
    yearInputValue,
    searchInputValue,
    handleTypeInputChange,
    handleSearchInputChange,
    handleYearInputChange,
  } = useInputs();

  const typeOptions = generateTypeOptions();

  return (
    <StyledPaper>
      <Stack spacing={3} direction="row" justifyContent="space-between">
        <FormControl fullWidth>
          <TextField
            label="Search"
            variant="outlined"
            value={searchInputValue}
            onChange={handleSearchInputChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            value={typeInputValue}
            onChange={handleTypeInputChange}
          >
            {typeOptions}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <DatePicker
            views={["year"]}
            onChange={handleYearInputChange}
            value={yearInputValue}
          />
        </FormControl>
      </Stack>
    </StyledPaper>
  );
};

export default Filters;
