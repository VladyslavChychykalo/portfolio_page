import React from "react";
import { icon } from "./portfolioIcons.module.css";
import SVG from "react-inlinesvg";
import svgIcon from "../svg/algorithm.svg";

const Icon = () => <SVG className={icon} src={svgIcon} />;

export default Icon;
