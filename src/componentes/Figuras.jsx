import { useState } from "react";

export function Figuras() {
    // Estados para las variables, la figura y el resultado
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [figura, setFigura] = useState("triangulo");
    const [resultado, setResultado] = useState(null);

    // Funcion de calculos
    const calcular = (e) => {
        e.preventDefault();
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        // Validacion de las cajas
        if (isNaN(n1) || !num1 || isNaN(n2) || !num2) {
            setResultado("Por favor ingrese los dos numeros");
            return;
        }

        let res;
        // Usamos la estructura switch que ya conoces
        switch (figura) {
            case "triangulo": 
                res = (n1 * n2) / 2;
                break;
            case "rectangulo": 
                res = n1 * n2;
                break;
            case "cuadrado": 
                res = n1 * n1; // El cuadrado multiplica lado x lado
                break;
            default: 
                res = 0;
        }
        setResultado(res);
    };

    return (
        <div className="container mt-4">
            <h2>Cálculo de Figuras</h2>
            <form onSubmit={calcular}>
                {/* Primer numero */}
                <input 
                    type="number" 
                    placeholder="Base (o Lado)" 
                    value={num1} 
                    onChange={(e) => setNum1(e.target.value)} 
                    className="form-control mb-2"
                />

                {/* Selector de figuras */}
                <select 
                    value={figura} 
                    onChange={(e) => setFigura(e.target.value)}
                    className="form-control mb-2"
                >
                    <option value="triangulo">Triángulo</option>
                    <option value="rectangulo">Rectángulo</option>
                    <option value="cuadrado">Cuadrado</option>
                </select>

                {/* Segundo numero */}
                <input 
                    type="number" 
                    placeholder="Altura" 
                    value={num2} 
                    onChange={(e) => setNum2(e.target.value)} 
                    className="form-control mb-3"
                />

                {/* Boton de accion */}
                <button type="submit" className="btn btn-primary">Calcular</button>
            </form>
            
            {/* Mostrar los resultados */}
            <br /><br />
            Resultado: {resultado}
        </div>
    );
}