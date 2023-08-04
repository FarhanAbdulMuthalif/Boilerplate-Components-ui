"use client";
import React, { useContext } from "react";
import SimpleDialog from "./Dialogs/SimpleDialog";
import { NextContext } from "./Theme/MUIThemeProvider";
import FillButton from "./Button/FillButton";
import FormDialog from "./Dialogs/FormDialog";

const DialogShow = () => {
  const { isOpen, setIsOpen, setIsFormDiaOpen, isFormDiaOpen } =
    useContext(NextContext);
  const DialogOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  const DialogOpenHandlerForm = () => {
    setIsFormDiaOpen(!isFormDiaOpen);
  };
  return (
    <>
      <div className="comp-wrapper-div">
        <legend>Dialog</legend>
        <div className="fieldset">
          <FillButton onClick={DialogOpenHandler}>Simple Dialog</FillButton>
          <FillButton onClick={DialogOpenHandlerForm}>Form Dialog</FillButton>
        </div>
      </div>
      <SimpleDialog
        open={isOpen}
        onClose={DialogOpenHandler}
        content=" Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running."
      />
      <FormDialog
        open={isFormDiaOpen}
        onClose={DialogOpenHandlerForm}
        onSubmit={DialogOpenHandlerForm}
        content=" To subscribe to this website, please enter your email address here. We
        will send updates occasionally."
      />
    </>
  );
};

export default DialogShow;
