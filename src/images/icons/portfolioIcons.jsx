import React from "react";
import { svgImages } from "./portfolioIcons.module.css";
import SVG from "react-inlinesvg";

const Icon = ({ svgIcon }) => <SVG className={svgImages} src={svgIcon} />;

export default Icon;
