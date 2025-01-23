export const VALID_ELEMENTS =
  'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar Kr K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Ar Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La-Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac-Lr Rf Db Sg Bh Hs Mt Ds Rg Cn La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr'.split(
    ' '
  );

export const ELEMENTS_REGEX =
  /A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[dgnot]|N[abdeiop]?|Os?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilm]|U(u[opst])?|V|W|Xe|Yb?|Z[nr]|La\-Lu?|Ac\-Lr?/g;

export const ELEMENTS_SPLIT_REGEX =
  /(A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[dgnot]|N[abdeiop]?|Os?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilm]|U(u[opst])?|V|W|Xe|Yb?|Z[nr]|La\-Lu?|Ac\-Lr?)|(.)/g;

interface FormulaProps extends React.HTMLAttributes<HTMLSpanElement> {
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
export const Formula: React.FC<FormulaProps> = ({ content, ...rest }) => {
  let formula: React.ReactNode;
  const splitFormula = content.match(ELEMENTS_SPLIT_REGEX);
  formula = (
    <span>
      {splitFormula?.map((s, i) => <span key={i}>{formulaItem(s)}</span>)}
    </span>
  );

  return <span {...rest}>{formula}</span>;
};
