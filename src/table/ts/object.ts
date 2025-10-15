export type Operator = 'AND' | 'OR' | 'NOT' | 'XOR' | 'IMPLIES' | 'BICONDITIONAL';

interface OperatorInfo {
  symbol: string;
  name: string;
  description: string;
  jsEquivalent: string; // cómo se traduce a expr-eval
}

export const operators: Record<Operator, OperatorInfo> = {
  AND: {
    symbol: "∧",
    name: "AND (Conjunción)",
    description: "Verdadero solo cuando ambas proposiciones son verdaderas",
    jsEquivalent: "&&",
  },
  OR: {
    symbol: "∨",
    name: "OR (Disyunción)",
    description: "Verdadero cuando al menos una proposición es verdadera",
    jsEquivalent: "||",
  },
  NOT: {
    symbol: "¬",
    name: "NOT (Negación)",
    description: "Invierte el valor de verdad de la proposición",
    jsEquivalent: "!",
  },
  XOR: {
    symbol: "⊕",
    name: "XOR (Exclusivo)",
    description: "Verdadero cuando las proposiciones son diferentes",
    jsEquivalent: "!=",
  },
  IMPLIES: {
    symbol: "→",
    name: "Implicación",
    description:
      "Falso solo cuando la primera es verdadera y la segunda es falsa",
    jsEquivalent: "(!A || B)",
  },
  BICONDITIONAL: {
    symbol: "↔",
    name: "Bicondicional",
    description:
      "Verdadero cuando ambas proposiciones tienen el mismo valor de verdad",
    jsEquivalent: "(A == B)",
  },
};