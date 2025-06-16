// Styles
import styles from "./NewUser.module.css";
// MUI components
import Button from "@mui/material/Button";
// Navigation
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// Dados
import dados from "../data/db.json";

const NewUser = () => {
  const [genero, setGenero] = useState("m");
  const [profissao, setProfissao] = useState(null);
  const [aceitoRegProf, setAceitoRegProf] = useState(false);
  const [aceitoTermos, setAceitoTermos] = useState(false);
  const [regPersonalizado, setRegPersonalizado] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      <div className={styles.blocoPrincipal}>
        <div className={styles.saudacao}>
          <h1>Bem-vindo/a ao</h1>
          <h1 className={styles.nomeApp}>GeronTrack</h1>
          <h1>!</h1>
        </div>
        <div className={styles.blocoTermos}>
          <h2>INSTRUÇÕES E TERMOS DE USO</h2>
          <ul>
            {dados.termos.map((item) =>
              item.valor.slice(0, 5) === "&top&" ? (
                <h3 key={item.id}>{item.valor.slice(5)}</h3>
              ) : item.valor.slice(0, 5) === "&sub&" ? (
                <li
                  key={item.id}
                  style={{ marginLeft: "1.5em" }}
                  dangerouslySetInnerHTML={{ __html: item.valor.slice(5) }}
                ></li>
              ) : (
                <li
                  key={item.id}
                  dangerouslySetInnerHTML={{ __html: item.valor }}
                ></li>
              )
            )}
          </ul>
          <label>
            <input
              type="checkbox"
              name="aceito"
              onChange={(e) => setAceitoTermos(e.target.checked)}
            />
            <span style={{ marginLeft: "0.5em" }}>
              Li, concordo e aceito os termos acima.
            </span>
          </label>
        </div>
        <form>
          <div className={styles.blocoCadastro} style={{ gridRow: 1 }}>
            <h3 style={{ color: "#000" }}>IDENTIFICAÇÃO</h3>
            <label
              style={{
                gridColumn: "span 2",
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <span>Nome:</span>
              <input
                type="text"
                name="nome"
                placeholder="Informe seu nome completo"
              />
            </label>
            <label
              style={{
                gridColumn: "span 2",
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>E-Mail:</span>
              <input
                type="email"
                name="email"
                placeholder="Informe seu e-mail"
              />
            </label>
            <label>
              <span>Gênero:</span>
              <input
                type="radio"
                name="genero"
                onClick={() => setGenero("m")}
                defaultChecked
              />
              <span style={{ fontWeight: "normal" }}>M</span>
              <input
                type="radio"
                name="genero"
                onClick={() => setGenero("f")}
              />
              <span style={{ fontWeight: "normal" }}>F</span>
            </label>
            <label
              style={{ display: "flex", gap: "0.5em", alignItems: "center" }}
            >
              Função:
              <select name="funcao">
                <option value="none" disabled selected>
                  -- Selecione --
                </option>
                {genero === "m"
                  ? dados.funcao_m.map((item) => (
                      <option value={item.value} key={item.id}>
                        {item.tipo}
                      </option>
                    ))
                  : dados.funcao_f.map((item) => (
                      <option value={item.value} key={item.id}>
                        {item.tipo}
                      </option>
                    ))}
              </select>
            </label>
          </div>
          <div className={styles.blocoCadastro} style={{ gridRow: 2 }}>
            <h3 style={{ color: "#000" }}>PROFISSIONAL</h3>
            <label
              style={{
                gridColumn: "span 2",
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <span>Profissão:</span>
              <select
                name="profissao"
                onChange={(e) => setProfissao(e.target.value)}
              >
                <option value="none" disabled selected>
                  -- Selecione --
                </option>
                {genero === "m"
                  ? dados.profissao_m.map((item) => (
                      <option value={item.value} key={item.id}>
                        {item.tipo}
                      </option>
                    ))
                  : dados.profissao_f.map((item) => (
                      <option value={item.value} key={item.id}>
                        {item.tipo}
                      </option>
                    ))}
                <option value="outra">OUTRA</option>
              </select>
            </label>
            {profissao === "outra" ? (
              <div
                style={{ gridColumn: "span 2", display: "flex", gap: "1em" }}
              >
                <input type="text" placeholder="Informe sua profissão" />
                <label style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ whiteSpace: "nowrap" }}>Possui registro?</span>
                  <input
                    type="radio"
                    name="registro"
                    defaultChecked
                    onClick={() => setRegPersonalizado(false)}
                  />
                  <span style={{ fontWeight: "normal" }}>Não</span>
                  <input
                    type="radio"
                    name="registro"
                    onClick={() => setRegPersonalizado(true)}
                  />
                  <span style={{ fontWeight: "normal" }}>Sim</span>
                </label>
              </div>
            ) : null}
            {!["outra", "none", null].includes(profissao) ? (
              <div
                style={{
                  gridColumn: "span 2",
                  textAlign: "justify",
                  fontWeight: "normal",
                  display: "grid",
                }}
              >
                <label style={{ display: "flex" }}>
                  <input
                    type="checkbox"
                    name="aceito"
                    onChange={(e) => setAceitoRegProf(e.target.checked)}
                  />
                  <span style={{ marginLeft: "0.5em", display: "block" }}>
                    Desejo incluir meu registro profissional junto{" "}
                    {["adv", "musico"].includes(profissao) ? "à" : "ao"}{" "}
                    {dados.conselho.find((item) => item.profissao === profissao)
                      ?.conselho || ""}{" "}
                    do Estado em que atuo na ILPI.
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Registro profissional"
                  value={aceitoRegProf === true ? null : ""}
                  disabled={aceitoRegProf === true ? false : true}
                  style={{
                    marginTop: "1em",
                    width: "50%",
                    justifySelf: "center",
                  }}
                />
              </div>
            ) : null}
            {profissao === "outra" && regPersonalizado === true ? (
              <input
                type="text"
                placeholder="Registro profissional"
                style={{
                  width: "50%",
                  justifySelf: "center",
                  gridColumn: "span 2",
                }}
              />
            ) : null}
          </div>

          <div className={styles.blocoCadastro} style={{ gridRow: 3 }}>
            <h3 style={{ color: "#000" }}>AUTENTICAÇÃO</h3>
            <label
              style={{
                gridColumn: "span 2",
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <span>Senha:</span>
              <input
                type="password"
                name="senha"
                placeholder="Digite 8 caracteres ao seu critério"
              />
            </label>
            <label
              style={{
                gridColumn: "span 2",
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
              }}
            >
              <span>Repita:</span>
              <input
                type="password"
                name="senha2"
                placeholder="Digite a senha novamente"
              />
            </label>
          </div>
        </form>
        <div className={styles.botoes}>
          <NavLink to="/">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#999",
              }}
            >
              Voltar
            </Button>
          </NavLink>
          <Button
            variant="contained"
            disabled={aceitoTermos === false ? true : false}
            onClick={() => navigate("/")}
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
