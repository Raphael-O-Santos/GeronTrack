// Styles
import styles from "./Login.module.css";
// MUI components
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
// Navigation
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const iconStyle = { cursor: "pointer" };
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="blocoSombra">
        <h1 className={styles.logo}>GeronTrack</h1>
        <form className={styles.credenciais}>
          <label>
            <span>E-Mail:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail"
            />
          </label>
          <label>
            <span>Senha:</span>
            <div style={{ display: "flex" }}>
              <input
                type={visible ? "text" : "password"}
                name="senha"
                maxLength={10}
                placeholder="Digite a senha"
              />
              {visible ? (
                <VisibilityIcon
                  style={iconStyle}
                  onClick={() => setVisible((prev) => !prev)}
                />
              ) : (
                <VisibilityOffIcon
                  style={iconStyle}
                  onClick={() => setVisible((prev) => !prev)}
                />
              )}
            </div>
          </label>
          <div>
            <input type="checkbox" name="lembrar" />
            <span style={{ fontWeight: "normal" }}>Lembrar</span>
          </div>
          <button>entrar</button>
        </form>
        <NavLink to="/Recovery">Esqueci a senha</NavLink>
        <div className={styles.ou}>
          <span />
          <p>OU</p>
          <span />
        </div>
        <NavLink to="/NewUser">Criar conta</NavLink>
      </div>
    </div>
  );
};

export default Login;
