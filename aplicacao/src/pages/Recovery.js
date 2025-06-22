// Styles
import styles from "./Recovery.module.css";
// Navigation
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Recovery = () => {
  const [showMessage, setShowMessage] = useState("none");
  const [message, setMessage] = useState("");
  const [sendButton, setSendButton] = useState("enviar");
  const [disableEditEmail, setDisableEditEmail] = useState(false);
  const [email, setEmail] = useState(null);
  const emailValido = /.+@.+\.(com|br)/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sendButton === "enviar") {
      setDisableEditEmail(true);
      setShowMessage("");
      setSendButton("reenviar");
    } else {
      setMessage("E-mail de recuperação reenviado.");
    }
  };

  return (
    <div>
      <div className="blocoSombra">
        <h1 style={{ textAlign: "center" }}>Recuperação de Acesso</h1>
        <form onSubmit={handleSubmit} id="form">
          <label>
            <input
              type="email"
              name="email"
              style={{ alignSelf: "center", width: "16em", marginTop: "0.8em" }}
              placeholder="Digite o seu e-mail"
              disabled={disableEditEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
        {message === "" ? (
          <p
            style={{
              display: `${showMessage}`,
              textAlign: "justify",
              wordWrap: "break-word",
              hyphens: "auto",
              maxWidth: "22em",
            }}
          >
            Caso o e-mail informado esteja em nossa base de dados, enviaremos um
            link para a recuperação de sua senha. Verifique também a caixa de
            Spam e Lixeira.
          </p>
        ) : (
          <p>{message}</p>
        )}
        <div className={styles.botoes}>
          <NavLink to="/">
            <button style={{ backgroundColor: "#999" }}>voltar</button>
          </NavLink>
          <button
            type="submit"
            form="form"
            style={
              emailValido ? {} : { backgroundColor: "#ddd", cursor: "auto" }
            }
            disabled={emailValido ? false : true}
            onClick={handleSubmit}
          >
            {sendButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
