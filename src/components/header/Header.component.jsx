import { TextField } from "@mui/material";
import "./header.styles.css";

const Header = ({ onChangeHandler }) => {
  return (
    <>
      <div className="header">
        <div>
          <h1 className="heading-primary">Orcs Most Wanted</h1>
        </div>
        <div>
          <TextField
            className="input-field"
            id="filled-basic"
            label="Search Orcs"
            variant="filled"
            color="warning"
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
