import { useMemo, useState } from "react";
import { operators, type Operator } from "./ts/object";
import { MenuItem, Select } from "@mui/material";

const TableOperator = () => {

    const [selectedOperator, setSelectedOperator] = useState<Operator>('AND')

    const calculateResult = (p: boolean, q: boolean, operator: Operator): boolean => {
        switch (operator) {
            case 'AND':
                return p && q;
            case 'OR':
                return p || q;
            case 'NOT':
                return !p;
            case 'XOR':
                return p !== q;
            case 'IMPLIES':
                return !p || q;
            case 'BICONDITIONAL':
                return p === q;
            default:
                return false;
        }
    };

    const truthTable = useMemo(() => {
        if (selectedOperator === 'NOT') {
            return [
                { p: true, result: calculateResult(true, false, selectedOperator) },
                { p: false, result: calculateResult(false, false, selectedOperator) }
            ];
        }

        return [
            { p: true, q: true, result: calculateResult(true, true, selectedOperator) },
            { p: true, q: false, result: calculateResult(true, false, selectedOperator) },
            { p: false, q: true, result: calculateResult(false, true, selectedOperator) },
            { p: false, q: false, result: calculateResult(false, false, selectedOperator) }
        ];
    }, [selectedOperator]);

    const formatValue = (value: boolean): string => value ? 'V' : 'F';

    return (
        <main className="w-100 d-flex flex-column align-items-center gap-5" style={{ marginTop: '20px' }}>
            <article className="w-75 d-flex flex-column" style={{ padding: '20px', background: '#282a2c', borderRadius: '10px', border: '2px', borderColor: 'gray' }}>
                <header className="d-flex justify-content-between gap-5">
                    <div className="d-flex flex-column">
                        <h2 className="font-bold text-white">Operadores</h2>
                        <span className="" style={{ color: 'gray', fontSize: '1rem' }}>Selecciona el operador lógico para generar su tabla de verdad</span>
                    </div>
                    <div className="">
                        <div className="fs-3 mb-1 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px', backgroundColor: 'cornflowerblue', borderRadius: '50%' }}>
                            {operators[selectedOperator].symbol}
                        </div>
                    </div>
                </header>
                <div className="d-flex gap-3" style={{ marginTop: '50px' }}>
                    <Select
                        labelId="operator-select-label"
                        value={selectedOperator}
                        label="Operador lógico"
                        onChange={(e) => setSelectedOperator(e.target.value as Operator)}
                        sx={{
                            color: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'gray',
                                border: '2px solid',
                                borderRadius: '15px'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'lightgray',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'cornflowerblue',
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white',
                            }
                        }}
                    >
                        {(Object.keys(operators) as Operator[]).map((op) => (
                            <MenuItem style={{ background: 'black' }} key={op} value={op}>
                                <div className="d-flex align-items-center">
                                    <span className="fs-4 me-2 text-white">{operators[op].symbol}</span>
                                    <span>{op}</span>
                                </div>
                            </MenuItem>
                        ))}
                    </Select>
                    <div className="card bg-dark border-secondary shadow-lg" style={{ border: '2px solid white' }}>
                        <div className="d-flex flex-column hustify-content-center mb-3" style={{ padding: '10px' }}>
                            <h5 className="text-white mb-1 fs-7">{operators[selectedOperator].name}</h5>
                            <p className="text-white mb-0 small">
                                {operators[selectedOperator].description}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
            <div className="w-75 d-flex flex-column gap-4" style={{ padding: '20px', background: '#282a2c', borderRadius: '10px', border: '2px', borderColor: 'gray' }}>
                <div className="w-100 d-flex justify-content-start">
                    <h3 className="card-title text-white mb-0">
                        Tabla de Verdad
                    </h3>
                </div>
                <div className="table-responsive">
                    <table className="table table-dark table-bordered table-hover">
                        <thead className="table-primary">
                            <tr>
                                <th className="text-center py-3">P</th>
                                {selectedOperator !== 'NOT' && (
                                    <th className="text-center py-3">Q</th>
                                )}
                                <th className="text-center py-3">
                                    {selectedOperator === 'NOT'
                                        ? `${operators[selectedOperator].symbol}P`
                                        : `P ${operators[selectedOperator].symbol} Q`}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {truthTable.map((row, index) => (
                                <tr key={index}>
                                    <td className="text-center py-3 fw-bold">
                                        <span className={row.p ? 'text-success' : 'text-danger'}>
                                            {formatValue(row.p)}
                                        </span>
                                    </td>
                                    {selectedOperator !== 'NOT' && 'q' in row && (
                                        <td className="text-center py-3 fw-bold">
                                            <span className={row.q ? 'text-success' : 'text-danger'}>
                                                {formatValue(row.q)}
                                            </span>
                                        </td>
                                    )}
                                    <td className="text-center py-3 fw-bold">
                                        <span className={row.result ? 'text-success' : 'text-danger'}>
                                            {formatValue(row.result)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default TableOperator;