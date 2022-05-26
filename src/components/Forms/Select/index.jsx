import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleTeam } from "../../../redux/actions/team/teamAction";

const Select = ({
  onChange,
  value,
  title,
  data,
  readOnly = false,
  required = false,
  filter = "",
  filterValue = "",
  secondaryFilter = "",
  secondaryValue = "",
  concat = "",
  size = "medium",
}) => {
  return (
    <div className={`nirsal__InputContainer ${size}`}>
      <label>{title}</label>
      <select
        onChange={onChange}
        value={value}
        // defaultValue={title}
        readOnly={readOnly}
        required={required}
      >
        <option value="" disabled>
          {title}
        </option>
        {data &&
          data.map((item, i) =>
            filter ? (
              <option
                value={
                  secondaryValue ? item[secondaryValue] : item[filterValue]
                }
                key={i}
              >
                {secondaryFilter
                  ? item[filter][secondaryFilter] + " " + item[filter][concat]
                  : item[filter]}
              </option>
            ) : (
              <option value={item.value} key={i}>
                {item.value}
              </option>
            )
          )}
      </select>
    </div>
  );
};

export default Select;

export const SelectOfficers = ({
  onChange,
  value,
  title,
  readOnly = false,
  required = false,
  show = "",
  size = "medium",
  id = "",
  success = false,
}) => {
  const [responsibleOfficer, setResponsibleOfficer] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (id) {
      dispatch(getSingleTeam(id));
    }
  }, [id, dispatch]);

  const getTeamRequest = useSelector((state) => state.team);

  React.useEffect(() => {
    if (getTeamRequest.success) {
      setResponsibleOfficer(getTeamRequest.data);
    }
  }, [getTeamRequest.success, getTeamRequest.data]);

  const getList = () => {
    if (success) {
      return responsibleOfficer.map((item, i) => (
        <option value={item._id} key={i}>
          {item[show]}
        </option>
      ));
    }
  };

  return (
    <>
      <select
        onChange={onChange}
        value={value}
        // defaultValue={title}
        readOnly={readOnly}
        required={required}
      >
        <option value="" disabled>
          --Select {title}--
        </option>
        {getTeamRequest.loading ? (
          <option value="">Loading...</option>
        ) : (
          getList()
        )}
      </select>
    </>
  );
};
export const SelectInput = ({
  onChange,
  value,
  title,
  data,
  readOnly = false,
  required = false,
  show = "",
  size = "medium",
}) => {
  return (
    <>
      <select
        onChange={onChange}
        value={value}
        // defaultValue={title}
        readOnly={readOnly}
        required={required}
      >
        <option value="" disabled>
          --Select {title}--
        </option>
        {data &&
          data.map((item, i) => (
            <option value={item._id} key={i}>
              {item[show]}
            </option>
          ))}
      </select>
    </>
  );
};
