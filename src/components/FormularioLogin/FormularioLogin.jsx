
export default function FormularioLogin() {
    return (
        <form className="formulario">
            <div className="formulario__grupo">
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="usuario" placeholder="Usuario" />
            </div>
            <div className="formulario__grupo">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" placeholder="Contraseña" />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}
