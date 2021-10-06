import PropTypes from "prop-types";
import { Label, Input } from "./Filter.styled";

export default function Filter({ filterBlur, filterChange, filter }) {
  return (
    <Label>
      Find contacts by name:
      <Input value={filter} onChange={filterChange} onBlur={filterBlur} />
    </Label>
  );
}

Filter.propTypes = {
  filterChange: PropTypes.func,
  filter: PropTypes.string.isRequired,
};
