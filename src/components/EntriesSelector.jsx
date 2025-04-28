import SelectField from './SelectField';
import { Form } from 'react-bootstrap';
import { numberOfLines } from "../utils/constants";
import { useSelector, useDispatch } from 'react-redux';
import { setEntriesCount, setCurrentPage } from "../store/tableSlice";



function EntriesSelector({ id = "entriesSelect" }) {
  const dispatch = useDispatch();
  const entriesCount = useSelector((state) => state.table.entriesCount);

  const handleChange = (e) => {
    dispatch(setEntriesCount(Number(e.target.value)));
    dispatch(setCurrentPage(1));
  };

  return (
    <Form.Group className="d-flex align-items-center gap-2 mb-3">
      <SelectField
        name={id}
        label="Show"
        options={numberOfLines}
        value={entriesCount}
        onChange={handleChange}
        labelPosition="side"
      />
      <span className="mb-3">entries</span>
    </Form.Group>
  );
}

export default EntriesSelector;
