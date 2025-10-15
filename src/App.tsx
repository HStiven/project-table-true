import { DonutLarge } from "@mui/icons-material"
import TableOperator from "./table/table-operator"

function App() {

  return (
    <>
      <section className='w-100' style={{ padding: '20px 40px' }}>
        <header className="w-100 d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center">
            <h1 className="text-white">Tabla de verdad</h1>
          </div>
          <p className="w-50 text-center mb-0" style={{ fontSize: '0.8rem', color: '#ffffff94' }}>Generador interactivo de tablas de verdad para operadores lógicos</p>
        </header>

        <TableOperator />

      </section>
      <footer className="w-100 d-flex justify-content-center align-items-center mt-4" 
        style={{ backgroundColor: '#0A0A0A', padding: '40px 80px', borderTop: '3px solid #282a2c', gap: '120px' }}
      >
        <div className="d-flex flex-column justify-content-center gap-1">
          <h2 className="text-white font-bold" style={{fontSize: '2.6rem'}}>PROYECTO</h2>
          <h5 className="" style={{fontSize: '1.2rem', color: '#ffffff8a'}}>Matematica discreta</h5>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-2" style={{verticalAlign: 'middle'}}>
            <DonutLarge style={{fontSize: '2.1rem', color: 'whitesmoke'}}/>
            <span style={{fontSize: '1.2rem', color: 'whitesmoke'}}>Hernando Stiven Cortes Lopez</span>
          </div>
          <div className="d-flex align-items-center gap-2" style={{verticalAlign: 'middle'}}>
            <DonutLarge style={{fontSize: '2.1rem', color: 'whitesmoke'}}/>
            <span style={{fontSize: '1.2rem', color: 'whitesmoke'}}>Jonathan Yesid Hernandez Corredor</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
