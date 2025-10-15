import { useState } from "react";
import TruthTable from "./calculate";
import LogicBuilder from "./logicBuilder";

const CalculateVisit = () => {

  const [formula, setFormula] = useState("");
  const [showTable, setShowTable] = useState(false);

    const handleGenerate = (newFormula: string) => {
    setFormula(newFormula);
    setShowTable(true);
  };

  const handleClear = () => {
    setFormula("");
    setShowTable(false); // 🔥 desmonta el componente de la tabla
  };

    return (
        <main className="w-100 d-flex flex-column align-items-center gap-5" style={{ marginTop: '60px' }}>
            <article className="w-75 d-flex flex-column gap-5" style={{ padding: '20px', background: '#282a2c', borderRadius: '10px', border: '2px', borderColor: 'gray' }}>
                <header className="d-flex justify-content-between gap-5">
                    <div className="d-flex flex-column">
                        <h2 className="font-bold text-white">Calculadora</h2>
                        <span className="" style={{ color: 'gray', fontSize: '1rem' }}>
                            La calculadora funciona de manera que escribiendo la formula ya arroja el resultado, para escribir una formula simplemente se oprime en los botones para crear la formula.
                        </span>
                    </div>
                </header>
                <div className="d-flex flex-column">
                    <LogicBuilder onGenerate={handleGenerate} onClear={handleClear} />
                    {showTable && <TruthTable expression={formula} />}
                </div>
            </article>
        </main>
    )
}
export default CalculateVisit;