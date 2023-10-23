import React, { useState } from 'react';

const SubjectPay = () => {
  const [cantidadMaterias, setCantidadMaterias] = useState(0);

  const handleCantidadMateriasChange = (event) => {
    setCantidadMaterias(event.target.value);
  };

  const handlePagar = () => {
    // Aquí debes implementar la lógica para procesar el pago a través de MercadoPago.
    // Puedes utilizar la librería de MercadoPago o realizar una solicitud HTTP a tu servidor que se encargue de procesar el pago.

    // Después de procesar el pago, podrías mostrar un mensaje de confirmación o redirigir al usuario a una página de éxito.
  };

  return (
    <div>
      <h2>Pagos de Materias</h2>
      <p>Seleccionela cuota a abonar:</p>
      <select value={cantidadMaterias} onChange={handleCantidadMateriasChange}>
        <option value=" ">Seleccionar</option>
        <option value="1">1 materia</option>
        <option value="2">2 materias</option>
        <option value="3">3 materias</option>
        {/* Agrega más opciones según tus necesidades */}
      </select>
      <br />
      <button onClick={handlePagar}>Pagar con MercadoPago</button>
      <button onClick={() => alert("Redirigir a la página de inicio")}>Volver a Home</button>
    </div>
  );
};

export default SubjectPay;
