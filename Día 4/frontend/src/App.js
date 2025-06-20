import { useEffect, useState } from 'react';

function App() {
  const [visitas, setVisitas] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

  const fetchVisitas = async () => {
    try {
      const res = await fetch(`${API_URL}/visitas`);
      const data = await res.json();
      setVisitas(data.contador);
    } catch (error) {
      console.error('Error al obtener visitas:', error);
    }
  };

  useEffect(() => {
    fetchVisitas();
  }, []);

  const incrementarVisitas = async () => {
    setLoading(true);
    try {
      await fetch(`${API_URL}/visitas/incrementar`, { method: 'POST' });
      await fetchVisitas();
    } catch (error) {
      console.error('Error al incrementar visitas:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Contador de Visitas</h1>
      {visitas === null
        ? <p>Cargando...</p>
        : <p>Visitas: {visitas}</p>}
      <button 
        onClick={incrementarVisitas}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Incrementando...' : 'Incrementar'}
      </button>
    </div>
  );
}

export default App;
