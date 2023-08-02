import FillButton from "@/components/Button/FillButton";
import OutlineButton from "@/components/Button/OutlineButton";
import "./page.scss";
import { TryComp } from "@/components/TryComp";
import { Alert } from "@mui/material";
import ArrowTooltip from "@/components/Tooltip/ArrowTooltip";
import BasicTooltip from "@/components/Tooltip/BasicTooltip";
import LightTooltip from "@/components/Tooltip/LightTooltip";
import TextfieldOutline from "@/components/Textfield/TextfieldOutline";
import SingleDropdown from "@/components/Dropdown/SingleDropdown";
import MultiDropdown from "@/components/Dropdown/MultiDropdown";
import DialogShow from "@/components/TryDialog";
import SearchDropdown from "@/components/Dropdown/SearchDropdown";
import CheckboxDropdown from "@/components/Dropdown/CheckboxDropdown";

export default function Home() {
  return (
    <main className="main">
      <h1 style={{ color: "green", textAlign: "center" }}>UI Components</h1>
      <div className="comp-wrapper-div">
        <legend>Button</legend>
        <div className="fieldset">
          <OutlineButton>Outline</OutlineButton>
          <FillButton onClick={TryComp}>Filled</FillButton>
        </div>
      </div>
      <div className="comp-wrapper-div">
        <legend>Textfield</legend>
        <div className="fieldset">
          <TextfieldOutline placeholder="Simple Textfield" value="" />
          <TextfieldOutline
            placeholder="Error Textfield"
            value=""
            error={true}
          />
        </div>
      </div>
      <div className="comp-wrapper-div">
        <legend>Dropdown</legend>
        <div className="fieldset">
          <SingleDropdown options={["imran", "jithesh", "samuel"]} />
          <MultiDropdown options={["imran", "jithesh", "samuel"]} />
          <SearchDropdown options={["imran", "jithesh", "samuel"]} />
          <CheckboxDropdown options={["imran", "jithesh", "samuel"]} />
        </div>
      </div>
      <div className="comp-wrapper-div">
        <legend>Snackbar</legend>
        <div className="fieldset">
          <Alert severity="error" elevation={6} variant="filled">
            This is an error message!
          </Alert>
          <Alert severity="warning" elevation={6} variant="filled">
            This is a warning message!
          </Alert>
          <Alert severity="info" elevation={6} variant="filled">
            This is an information message!
          </Alert>
          <Alert elevation={6} variant="filled" severity="success">
            This is a success message!
          </Alert>
        </div>
      </div>
      <div className="comp-wrapper-div">
        <legend>Tooltip</legend>
        <div className="fieldset">
          <ArrowTooltip title="Arrow type tooltip for check">
            <OutlineButton>Arrow Tooltip</OutlineButton>
          </ArrowTooltip>
          <BasicTooltip title="Basic type tooltip for check">
            <OutlineButton>Basic Tooltip</OutlineButton>
          </BasicTooltip>
          <LightTooltip title="Light type tooltip for check">
            <OutlineButton>Light Tooltip</OutlineButton>
          </LightTooltip>
        </div>
      </div>

      <DialogShow />
    </main>
  );
}
