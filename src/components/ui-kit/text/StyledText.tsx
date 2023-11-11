import styled from "styled-components";
import { COLOR, TextStyles } from "./consts";
import React from "react";

type Props = {
  texttype: string;
  color?: boolean;
};

type TextProps = {
  tagName: string;
} & { [k: string]: any };
const Text = ({ tagName, ...otherProps }: TextProps) => {
  const Tag = tagName;
  return <Tag {...otherProps} />;
};

const StyledText = styled(Text)<Props>`
  font-family: "Montserrat", sans-serif;
  font-weight: ${({ tagName }) => (tagName.includes("h") ? 700 : 400)};
  color: ${({ color }) => (color ? COLOR.TEXT_SUBHEADING : COLOR.TEXT_MAIN)};
  ${({ texttype }) => TextStyles[texttype]}
`;

export { StyledText as Text };
