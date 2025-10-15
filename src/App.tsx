import TableOperator from "./table/table-operator"

function App() {

  return (
    <section className='w-100' style={{ padding: '20px 40px' }}>
      <header className="w-100 d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center">
          <h1 className="text-white">Tabla de verdad</h1>
        </div>
        <p className="w-50 text-center mb-0" style={{fontSize: '0.8rem', color: '#ffffff94'}}>Generador interactivo de tablas de verdad para operadores lógicos</p>
      </header>

      <TableOperator/>

      <footer className="w-100 d-flex flex-column py-4">
        
      </footer>
    </section>
  )
}

export default App
