import styled from "styled-components";
import { COLOR, TextStyles, TEXT_TYPE } from "./consts";
import React from "react";

type Props = {
  texttype: typeof TEXT_TYPE[keyof typeof TEXT_TYPE];
  color?: keyof typeof COLOR;
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
  ${({ texttype }) => TextStyles[texttype]}
  color: ${({ color }) => {
    if (!color) {
      return COLOR.TEXT_MAIN;
    }
    return COLOR[color];
  }};
`;

export { StyledText as Text };
