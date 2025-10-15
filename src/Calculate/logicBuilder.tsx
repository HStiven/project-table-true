import React, { useState } from "react";
import { operators } from "../table/ts/object";

const variables = ["p", "q", "r", "s", "t"];

interface LogicBuilderProps {
    onGenerate: (expr: string) => void;
    onClear: () => void;
}

const LogicBuilder: React.FC<LogicBuilderProps> = ({ onGenerate, onClear }) => {
    const [parts, setParts] = useState<string[]>([]);

    const addPart = (part: string) => setParts([...parts, part]);
    const clear = () => {
        setParts([]);
        onClear(); // 🔥 también limpia la tabla en el padre
    };

    const expression = parts.join(" ");


    return (
        <div className="text-white w-100">
            <h4 className="mb-3 text-center">Creador de Fórmulas Lógicas</h4>

            <div className="w-100 d-flex justify-content-between mb-3" style={{ padding: '20px 0px' }}>
                <div className="">
                    <label className="form-label">Variables</label>
                    <div className="d-flex flex-wrap gap-2">
                        {variables.map((v) => (
                            <button
                                key={v}
                                className="btn btn-outline-light btn-sm"
                                onClick={() => addPart(v)}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Operadores */}
                <div className="">
                    <label className="form-label">Operadores</label>
                    <div className="d-flex flex-wrap gap-2">
                        {Object.entries(operators).map(([key, op]) => (
                            <button
                                key={key}
                                className="btn btn-outline-info btn-sm"
                                onClick={() => addPart(op.symbol)}
                                title={op.description}
                            >
                                {op.symbol}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Paréntesis */}
                <div className="">
                    <label className="form-label">Paréntesis</label>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => addPart("(")}
                        >
                            (
                        </button>
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => addPart(")")}
                        >
                            )
                        </button>
                    </div>
                </div>
            </div>
            {/* Variables */}

            {/* Vista previa */}
            <div className="mb-3">
                <h5>Expresión:</h5>
                <div className="w-100 d-flex justify-content-between">
                    <div className="w-75 d-flex align-items-center justify-content-center border rounded p-2 bg-dark text-center">
                        {expression || <i>Vacío</i>}
                    </div>
                    <div className="d-flex gap-2 justify-content-center">
                        <button
                            className="text-white"
                            style={{ backgroundColor: 'cornflowerblue', borderRadius: '10px', padding: '10px 20px', border: 'none' }}
                            onClick={() => onGenerate(expression)}
                            disabled={!expression}
                        >
                            Generar Tabla
                        </button>
                        <button className="btn btn-danger" onClick={clear}>
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogicBuilder;
