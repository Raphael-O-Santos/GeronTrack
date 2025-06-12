// Styles
import styles from "./Recovery.module.css";
// MUI components
import Button from "@mui/material/Button";
// Navigation
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Recovery = () => {
  const [showMessage, setShowMessage] = useState("none");
  const [message, setMessage] = useState("");
  const [sendButton, setSendButton] = useState("Enviar");
  const [disableEditEmail, setDisableEditEmail] = useState(false);
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sendButton === "Enviar") {
      setDisableEditEmail(true);
      setShowMessage("");
      setSendButton("Reenviar");
    } else {
      setMessage("E-mail de recuperação reenviado.");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.recovery}>
        <h1>
          Recuperação
          <br />
          de Acesso
        </h1>
        <form onSubmit={handleSubmit} id="form">
          <label className={styles.email} htmlFor="email">
            Informe o e-mail da conta:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            disabled={disableEditEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        {message === "" ? (
          <p style={{ display: `${showMessage}` }}>
            Caso o e-mail informado esteja em nossa base de dados, enviaremos um
            link para a recuperação de sua senha.
            <br />
            Verifique também a caixa de Spam e Lixeira.
          </p>
        ) : (
          <p>{message}</p>
        )}
        <div className={styles.botoes}>
          <NavLink to="/">
            <Button
              variant="contained"
              sx={{
                marginTop: "1em",
                marginBottom: "1em",
                backgroundColor: "#999",
              }}
            >
              Voltar
            </Button>
          </NavLink>
          <Button
            variant="contained"
            sx={{ marginTop: "1em", marginBottom: "1em" }}
            type="submit"
            form="form"
            disabled={/.+@.+\.(com|br)/.test(email) ? false : true}
          >
            {sendButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
