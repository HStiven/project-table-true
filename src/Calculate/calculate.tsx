import React, { useEffect, useState } from "react";
import { Parser } from "expr-eval";

interface Row {
  [key: string]: boolean | string;
}

interface TruthTableProps {
  expression: string;
}

const TruthTable: React.FC<TruthTableProps> = ({ expression }) => {
  const [variables, setVariables] = useState<string[]>([]);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if (!expression) return;
    generateTable();
  }, [expression]);

  const translateToExprEval = (expr: string) => {
    return expr
      .replace(/∧/g, "&&")
      .replace(/∨/g, "||")
      .replace(/¬/g, "!")
      .replace(/⊕/g, "!=")
      .replace(/↔/g, "==")
      .replace(/→/g, "IMPLIES");
  };

  const generateTable = () => {
    const cleaned = translateToExprEval(expression);
    const vars = Array.from(new Set(cleaned.match(/[a-z]/gi))) || [];
    setVariables(vars);

    const combinations = generateCombinations(vars.length);
    const results: Row[] = [];

    combinations.forEach((combo) => {
      const scope: Record<string, number> = {};
      vars.forEach((v, i) => (scope[v] = combo[i] ? 1 : 0));

      let exprParsed = cleaned;
      // Reemplazar implicación "A IMPLIES B" por (!A || B)
      exprParsed = exprParsed.replace(
        /([a-z])\s*IMPLIES\s*([a-z])/gi,
        (_, a, b) => `(!${a} || ${b})`
      );

      const parser = new Parser();
      const result = parser.evaluate(exprParsed, scope);

      const row: Row = {};
      vars.forEach((v, i) => (row[v] = combo[i]));
      row["Resultado"] = result ? "V" : "F";
      results.push(row);
    });

    setRows(results);
  };

  const generateCombinations = (n: number): boolean[][] => {
    const total = 2 ** n;
    const combos: boolean[][] = [];
    for (let i = 0; i < total; i++) {
      const combo = Array.from({ length: n }, (_, j) => Boolean((i >> (n - j - 1)) & 1));
      combos.push(combo);
    }
    return combos;
  };

  return (
    <div className="mt-4 text-center">
      <h5 className="text-white">Tabla de verdad para:</h5>
      <div className="text-white mb-3 fw-bold">{expression}</div>

      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            {variables.map((v) => (
              <th key={v}>{v}</th>
            ))}
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {variables.map((v) => (
                <td key={v}>{row[v] ? "V" : "F"}</td>
              ))}
              <td>{row["Resultado"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruthTable;
