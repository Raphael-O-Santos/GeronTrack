// Styles
import styles from "./Welcome.module.css";
// MUI components
import Button from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
// Navigation
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Welcome = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <h1>GeronTrack</h1>
        <form>
          <label className={styles.email} htmlFor="email">
            E-Mail:
          </label>
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
          <label className={styles.senha} htmlFor="senha">
            Senha:
          </label>
          <input
            type={!visible ? "password" : "text"}
            name="senha"
            placeholder="Digite a senha"
          />
          <div className={styles.visibility}>
            {!visible ? (
              <VisibilityOffIcon onClick={() => setVisible((prev) => !prev)} />
            ) : (
              <VisibilityIcon onClick={() => setVisible((prev) => !prev)} />
            )}
          </div>
        </form>
        <label className={styles.lembrar} htmlFor="lembrar">
          <input type="checkbox" name="lembrar" />
          Lembrar
        </label>
        <Button
          variant="contained"
          sx={{ marginTop: "1em", marginBottom: "1em" }}
        >
          Entrar
        </Button>
        <NavLink to="/Recovery">Esqueci a senha</NavLink>
        <div className={styles.ou}>
          <span />
          <p>OU</p>
          <span />
        </div>
        <NavLink to="/Terms">Criar conta</NavLink>
      </div>
    </div>
  );
};

export default Welcome;
