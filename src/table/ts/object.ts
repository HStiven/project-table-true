export type Operator = 'AND' | 'OR' | 'NOT' | 'XOR' | 'IMPLIES' | 'BICONDITIONAL';

interface OperatorInfo {
  symbol: string;
  name: string;
  description: string;
}

export const operators: Record<Operator, OperatorInfo> = {
  AND: {
    symbol: '∧',
    name: 'AND (Conjunción)',
    description: 'Verdadero solo cuando ambas proposiciones son verdaderas'
  },
  OR: {
    symbol: '∨',
    name: 'OR (Disyunción)',
    description: 'Verdadero cuando al menos una proposición es verdadera'
  },
  NOT: {
    symbol: '¬',
    name: 'NOT (Negación)',
    description: 'Invierte el valor de verdad de la proposición'
  },
  XOR: {
    symbol: '⊕',
    name: 'XOR (Disyunción Exclusiva)',
    description: 'Verdadero cuando las proposiciones tienen valores diferentes'
  },
  IMPLIES: {
    symbol: '→',
    name: 'Implicación',
    description: 'Falso solo cuando la primera es verdadera y la segunda es falsa'
  },
  BICONDITIONAL: {
    symbol: '↔',
    name: 'Bicondicional',
    description: 'Verdadero cuando ambas proposiciones tienen el mismo valor'
  }
};