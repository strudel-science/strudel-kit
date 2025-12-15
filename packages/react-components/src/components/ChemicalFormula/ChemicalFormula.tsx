import { Typography, TypographyProps } from "@mui/material";
import { ELEMENTS_REGEX, ELEMENTS_SPLIT_REGEX } from "../../utils";

export interface ChemicalFormulaProps extends TypographyProps {
  content: string;
}

const formulaItem = (str: string) => {
  if (!str.match(/\(|\)|\*/g) && !str.match(ELEMENTS_REGEX)) {
    return <sub>{str}</sub>;
  } else {
    return <span>{str}</span>;
  }
};

/**
 * Render a formula string with proper subscripts.
 * Non-elements will be interpreted as subscripts.
 */
export const ChemicalFormula: React.FC<ChemicalFormulaProps> = ({ content, ...rest }) => {
  const splitFormula = content.match(ELEMENTS_SPLIT_REGEX);
  const formula = (
    <span>
      {splitFormula?.map((s, i) => <span key={i}>{formulaItem(s)}</span>)}
    </span>
  );

  return <Typography {...rest}>{formula}</Typography>;
};
