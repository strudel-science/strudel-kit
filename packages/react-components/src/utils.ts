export const VALID_ELEMENTS =
  'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar Kr K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Ar Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La-Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac-Lr Rf Db Sg Bh Hs Mt Ds Rg Cn La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr'.split(
    ' '
  );

export const ELEMENTS_REGEX =
  /A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[dgnot]|N[abdeiop]?|Os?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilm]|U(u[opst])?|V|W|Xe|Yb?|Z[nr]|La-Lu?|Ac-Lr?/g;

export const ELEMENTS_SPLIT_REGEX =
  /(A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[dgnot]|N[abdeiop]?|Os?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilm]|U(u[opst])?|V|W|Xe|Yb?|Z[nr]|La-Lu?|Ac-Lr?)|(.)/g;

/**
 * Determine if a value is truthy or falsy in the context of a filter.
 * Values like 0 and false should be considered as having a value,
 * and having an empty array should be considered not having a value.
 */
export const hasValue = (value: unknown) => {
  if (value === 0 || value === false) {
    return true;
  } else if (Array.isArray(value) && value.length === 0) {
    return false;
  } else {
    return !!value;
  }
};

/**
 * Determine if a range value has a meaningful value.
 */
export const rangeHasValue = (value: [number, number] | null, min: number, max: number) => {
  if (
    value &&
    (value[0] !== null && value[0] !== min) &&
    (value[1] !== null && value[1] !== max)
  ) {
    return true;
  }
  return false;
}