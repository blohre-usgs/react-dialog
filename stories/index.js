import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Css from "../css/index.css";
import Basic from "./basic";

storiesOf('React Dialog', module)
  .add('Basic', () => (
    <Basic />
  ))
  .add('As Dropdown', () => (
    <TimePicker timeFormat={"h:mm A"} useSelect={true} />
  ));