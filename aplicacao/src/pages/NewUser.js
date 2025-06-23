// Styles
import styles from "./NewUser.module.css";
// MUI components
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
// Navigation
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Dados
import dados from "../data/db.json";

const NewUser = () => {
  const [genero, setGenero] = useState("m");
  const [profissao, setProfissao] = useState(null);
  const [aceitoRegProf, setAceitoRegProf] = useState(false);
  const [aceitoTermos, setAceitoTermos] = useState(false);
  const [regPersonalizado, setRegPersonalizado] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [cep, setCEP] = useState("");
  const [error, setError] = useState(null);
  const [isLoadingCEP, setIsLoadingCEP] = useState(false);
  const [dadosEndereco, setDadosEndereco] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
    estado: "",
  });

  const formatCEP = (value) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/^(\d{5})(\d)/, "$1-$2");
  };

  const formatCNPJ = (value) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  useEffect(() => {
    const numericCEP = cep.replace(/\D/g, "");
    if (numericCEP.length === 8) {
      const fetchCEPData = async () => {
        setIsLoadingCEP(true);
        setError(null);
        setDadosEndereco({
          logradouro: "",
          bairro: "",
          localidade: "",
          uf: "",
          estado: "",
        });
        try {
          const url = `https://viacep.com.br/ws/${numericCEP}/json/`;
          const res = await fetch(url);
          const json = await res.json();
          if (json.erro) {
            setError("CEP inválido!");
            setDadosEndereco({
              logradouro: "",
              bairro: "",
              localidade: "",
              uf: "",
              estado: "",
            });
          } else {
            setDadosEndereco({
              logradouro: json.logradouro || "",
              bairro: json.bairro || "",
              localidade: json.localidade || "",
              uf: json.uf || "",
              estado: json.estado || "",
            });
          }
        } catch (err) {
          console.error("Erro ao buscar CEP:", err.message);
          setError("Erro ao buscar CEP. Tente novamente.");
          setDadosEndereco({
            logradouro: "",
            bairro: "",
            localidade: "",
            uf: "",
            estado: "",
          });
        } finally {
          setIsLoadingCEP(false);
        }
      };
      fetchCEPData();
    } else if (numericCEP.length < 8 && dadosEndereco.logradouro !== "") {
      setDadosEndereco({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
        estado: "",
      });
      setError(null);
    }
  }, [cep, dadosEndereco.logradouro]);

  return (
    <div className="blocoSombra">
      <h1
        style={
          window.innerWidth >= 601
            ? { marginBottom: "0.3em" }
            : { textAlign: "center", marginBottom: "0.3em" }
        }
      >
        Saudações do <span style={{ color: "#00b4d8" }}>GeronTrack</span>! Vamos
        iniciar o seu cadastro?
      </h1>
      <div className={styles.blocos}>
        <div className={styles.termos}>
          <h2 style={window.innerWidth >= 601 ? {} : { textAlign: "center" }}>
            INSTRUÇÕES E TERMOS DE USO
          </h2>
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
        <form className={styles.formulario}>
          <div className={styles.blocoCadastro}>
            <h3 style={{ color: "#000" }}>IDENTIFICAÇÃO</h3>
            <div
              style={
                window.innerWidth >= 601
                  ? { display: "flex", gap: "1em" }
                  : { display: "flex", flexDirection: "column", gap: "1em" }
              }
            >
              <label style={{ flex: 1 }}>
                <span>Nome:</span>
                <input
                  type="text"
                  name="nome"
                  placeholder="Informe seu nome completo"
                />
              </label>
              <label
                style={
                  window.innerWidth >= 601
                    ? {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "1em",
                      }
                    : {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }
                }
              >
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
            </div>
            <div
              style={
                window.innerWidth >= 601
                  ? { display: "flex", gap: "1em" }
                  : { display: "flex", flexDirection: "column", gap: "1em" }
              }
            >
              <label style={{ flex: 1 }}>
                <span>E-Mail:</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Informe seu e-mail"
                />
              </label>
              <label style={{ gap: "0.1em" }}>
                <span>Função:</span>
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
          </div>
          <div className={styles.blocoCadastro}>
            <h3 style={{ color: "#000" }}>PERFIL PROFISSIONAL</h3>
            <div
              style={
                window.innerWidth >= 601
                  ? { display: "flex", flexDirection: "row", gap: "1em" }
                  : { display: "flex", flexDirection: "column", gap: "1em" }
              }
            >
              <label>
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
                <input
                  type="text"
                  style={
                    window.innerWidth >= 601
                      ? {
                          flex: 1,
                          height: "fit-content",
                          alignSelf: "center",
                          marginTop: "1.2em",
                        }
                      : {}
                  }
                  placeholder="Informe sua profissão"
                />
              ) : null}
            </div>
            {profissao === "outra" ? (
              <div
                style={
                  window.innerWidth >= 601
                    ? { display: "flex", gap: "1em" }
                    : { display: "flex", flexDirection: "column", gap: "1em" }
                }
              >
                <label style={{ display: "flex", flexDirection: "row" }}>
                  <span>Possui registro?</span>
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
                <input
                  type="text"
                  style={
                    regPersonalizado === true
                      ? { flex: 1 }
                      : { display: "none" }
                  }
                  placeholder="Registro profissional"
                />
              </div>
            ) : null}
            {!["outra", "none", null].includes(profissao) ? (
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1em" }}
              >
                <div>
                  <label
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.5em",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="aceito"
                      onChange={(e) => setAceitoRegProf(e.target.checked)}
                    />
                    <span
                      style={{ fontWeight: "normal", textAlign: "justify" }}
                    >
                      Desejo incluir meu registro profissional junto{" "}
                      {["adv", "musico"].includes(profissao) ? "à" : "ao"}{" "}
                      {dados.conselho.find(
                        (item) => item.profissao === profissao
                      )?.conselho || ""}{" "}
                      do Estado em que atuo na ILPI.
                    </span>
                  </label>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <input
                    type="text"
                    placeholder="Registro profissional"
                    value={aceitoRegProf === true ? null : ""}
                    disabled={aceitoRegProf === true ? false : true}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className={styles.blocoCadastro}>
            <h3 style={{ color: "#000" }}>INSTITUIÇÃO</h3>
            <div
              style={
                window.innerWidth >= 601
                  ? { display: "flex", gap: "1em" }
                  : { display: "flex", flexDirection: "column", gap: "1em" }
              }
            >
              <label style={{ flex: 1 }}>
                <span>Razão Social:</span>
                <input
                  type="text"
                  name="razao"
                  placeholder="Informe a Razão Social"
                />
              </label>
              <label style={window.innerWidth >= 601 ? { width: "9.5em" } : {}}>
                <span>CNPJ:</span>
                <input
                  type="text"
                  name="cnpj"
                  placeholder="Informe o CNPJ"
                  onChange={(e) =>
                    (e.target.value = formatCNPJ(e.target.value))
                  }
                  maxLength={18}
                />
              </label>
            </div>
            <label>
              <span>Nome Fantasia:</span>
              <input
                type="text"
                name="fantasia"
                placeholder="Informe o Nome Fantasia"
              />
            </label>
            <div
              style={
                window.innerWidth >= 601
                  ? { display: "flex", gap: "1em" }
                  : { display: "flex", flexDirection: "column", gap: "1em" }
              }
            >
              <label style={{ width: "5.5em" }}>
                <span>CEP:</span>
                <input
                  type="text"
                  name="cep"
                  value={formatCEP(cep)}
                  onChange={(e) => setCEP(e.target.value)}
                  maxLength={9}
                  disabled={isLoadingCEP}
                />
                {error && (
                  <span style={{ color: "red", fontSize: "0.8em" }}>
                    {error}
                  </span>
                )}
              </label>
              <label style={{ flex: 1 }}>
                <span>Logradouro:</span>
                <input
                  type="text"
                  name="logradouro"
                  value={dadosEndereco.logradouro}
                  disabled
                />
              </label>
              <label style={{ width: "4.5em" }}>
                <span>Número:</span>
                <input type="text" name="numero" maxLength={5} />{" "}
              </label>
            </div>
            <div
              style={
                window.innerWidth >= 601
                  ? { display: "flex", gap: "1em" }
                  : { display: "flex", flexDirection: "column", gap: "1em" }
              }
            >
              <label style={{ flex: 1 }}>
                <span>Complemento:</span>
                <input type="text" name="complemento" />
              </label>
              <label>
                <span>Bairro:</span>
                <input
                  type="text"
                  name="bairro"
                  value={dadosEndereco.bairro}
                  disabled
                />
              </label>
            </div>
            <div
              style={
                window.innerWidth >= 601
                  ? { display: "flex", gap: "1em" }
                  : { display: "flex", flexDirection: "column", gap: "1em" }
              }
            >
              <label style={{ flex: 1 }}>
                <span>Cidade:</span>
                <input
                  type="text"
                  name="cidade"
                  value={dadosEndereco.localidade}
                  disabled
                />
              </label>
              <label>
                <span>Estado:</span>
                <input
                  type="text"
                  name="estado"
                  value={dadosEndereco.estado}
                  disabled
                />{" "}
              </label>
              <label style={window.innerWidth >= 601 ? { width: "2em" } : {}}>
                <span>UF:</span>
                <input
                  type="text"
                  name="uf"
                  value={dadosEndereco.uf}
                  disabled
                />
              </label>
            </div>
          </div>
          <div className={styles.blocoCadastro}>
            <h3 style={{ color: "#000" }}>AUTENTICAÇÃO</h3>
            <p style={{ fontWeight: "normal" }}>
              • A senha deve ter no mínimo 8 e no máximo 10 caracteres
              <br />• Deve conter pelo menos uma letra maiúscula
              <br />• Deve conter pelo menos uma letra minúscula
              <br />• Deve conter pelo menos um número
              <br />• Deve conter pelo menos um caractere especial
            </p>
            <label
              style={
                window.innerWidth >= 601
                  ? {
                      display: "flex",
                      flexDirection: "row",
                      gap: "1em",
                      alignSelf: "center",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      gap: "1em",
                      alignSelf: "center",
                      alignItems: "center",
                    }
              }
            >
              <input
                type={!visible ? "password" : "text"}
                name="senha"
                placeholder="Digite a senha"
                maxLength={10}
              />
              <input
                type={!visible ? "password" : "text"}
                name="senha2"
                placeholder="Repita a senha"
                maxLength={10}
              />
              {!visible ? (
                <VisibilityOffIcon
                  onClick={() => setVisible((prev) => !prev)}
                />
              ) : (
                <VisibilityIcon onClick={() => setVisible((prev) => !prev)} />
              )}
            </label>
          </div>
        </form>
      </div>
      <div className={styles.botoes}>
        <NavLink to="/">
          <button style={{ backgroundColor: "#999" }}>voltar</button>
        </NavLink>
        <button
          // type="submit"
          // form="form"
          style={
            aceitoTermos === true
              ? {}
              : { backgroundColor: "#ddd", cursor: "auto" }
          }
          disabled={aceitoTermos === true ? false : true}
          onClick={() => navigate("/Home")}
        >
          cadastrar
        </button>
      </div>
    </div>
  );
};

export default NewUser;
