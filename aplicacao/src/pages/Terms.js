// Styles
import styles from "./Terms.module.css";
// MUI components
import Button from "@mui/material/Button";
// Navigation
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Terms = () => {
  const [genero, setGenero] = useState("m");
  const [profissao, setProfissao] = useState(null);

  return (
    <div className={styles.page}>
      <div className={styles.terms}>
        <div className={styles.saudacao}>
          <h1>Bem-vindo/a ao</h1>
          <h1 className={styles.nomeApp}>GeronTrack</h1>
          <h1>!</h1>
        </div>
        <div className={styles.instrucoes}>
          <h2># Instruções e Termos de Uso:</h2>
          <div className={styles.blocoInstrucoes}>
            <ul>
              <h3>SOBRE O SISTEMA:</h3>
              <li>
                Esta aplicação é voltada ao ambiente de{" "}
                <b>Instituições de Longa Permanência para Idosos (ILPI)</b>{" "}
                sediadas em território nacional.
              </li>
              <li>
                Em atenção ao cumprimento das normas estabelecidas na Resolução
                de Diretoria Colegiada - <b>RDC nº 502</b>, de 27 de maio de
                2021, que dispõe sobre o <b>funcionamento</b> das ILPIs de
                caráter <b>residencial</b>, trazemos apoio às seguintes
                demandas:
              </li>
              <ol>
                <li>
                  Auto-acompanhamento do cumprimento das{" "}
                  <b>premissas mínimas</b> que a ILPI deve atender (Art. 6º).
                </li>
                <li>
                  Suporte à organização das <b>imunizações periódicas</b>{" "}
                  previstas no Plano Nacional de Imunização (PNI) do Ministério
                  da Saúde (Art. 39).
                </li>
                <li>
                  Suporte ao <b>controle de medicamentos</b> administrados aos
                  residentes (Art. 40).
                </li>
                <li>
                  Organização dos{" "}
                  <b>planejamentos de rotinas e procedimentos</b> de cuidado ao
                  idoso (Art. 41)
                </li>
                <li>
                  Suporte ao <b>registro de intercorrências médicas</b> (Arts.
                  42, 54 e 55).
                </li>
                <li>
                  Suporte ao <b>controle de produtos</b> utilizados no
                  processamento de roupas (Art. 50).
                </li>
                <li>
                  Suporte ao lenvantamento periódico de <b>indicadores</b> (Art.
                  60 e anexo da RDC).
                </li>
              </ol>
              <h3>SOBRE USUÁRIOS:</h3>
              <li>
                A criação de usuários nesta página é indicada exclusivamente
                para <b>donos, gestores e responsáveis técnicos</b> (RT) de
                ILPI.
              </li>
              <li>
                Demais membros da instituição devem ser cadastrados{" "}
                <b>pelo usuário principal</b> na área interna da aplicação.
              </li>
              <li>
                Cada <b>usuário colaborador</b> terá acesso à informações{" "}
                <b>limitadas</b> ao seu campo de atuação, colaborando com o
                levantamento geral, sob <b>controle do usuário principal</b>.
              </li>
              <li>
                A <b>comunicação entre equipes</b> também é definida pelo
                usuário principal.
              </li>
            </ul>
          </div>
        </div>
        <form>
          <div className={styles.identificacao}>
            <h3>Identificação:</h3>
            <div style={{ display: "flex" }}>
              <label
                htmlFor="nome"
                style={{ fontWeight: "bold", marginRight: "0.2em" }}
              >
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                placeholder="Informe seu nome completo"
              />
              <div style={{ display: "flex", marginLeft: "1em" }}>
                <label htmlFor="masculino">
                  <span style={{ fontWeight: "bold" }}>Gênero:</span>
                  <input
                    type="radio"
                    name="opcao"
                    value={genero}
                    onClick={() => setGenero("m")}
                    defaultChecked
                  />
                  M
                </label>
                <label htmlFor="feminino">
                  <input
                    type="radio"
                    name="opcao"
                    value={genero}
                    onClick={() => setGenero("f")}
                  />
                  F
                </label>
              </div>
            </div>
            <label htmlFor="email" style={{ fontWeight: "bold" }}>
              E-Mail:
            </label>
            <input type="email" name="email" placeholder="Informe seu e-mail" />
            <span>Função:</span>
            <select name="funcao">
              <option value="none">-- ESCOLHA --</option>
              <option value="dono">Don{genero === "m" ? "o" : "a"}</option>
              <option value="gestor">Gestor{genero === "m" ? "" : "a"}</option>
              <option value="rt">
                Responsável Técnic{genero === "m" ? "o" : "a"} (RT)
              </option>
            </select>
          </div>
          <span>Profissão:</span>
          <select
            name="profissao"
            onChange={(e) => setProfissao(e.target.value)}
          >
            <option value="none">-- ESCOLHA --</option>
            <option value="admin">
              Administrador{genero === "m" ? "" : "a"}
            </option>
            <option value="adv">Advogad{genero === "m" ? "o" : "a"}</option>
            <option value="agro">Agrônom{genero === "m" ? "o" : "a"}</option>
            <option value="arq">
              Arquitet{genero === "m" ? "o" : "a"} e Urbanista
            </option>
            <option value="assist_social">Assistente Social</option>
            <option value="biblio">
              Bibliotecári{genero === "m" ? "o" : "a"}
            </option>
            <option value="bio">Biólog{genero === "m" ? "o" : "a"}</option>
            <option value="biom">Biomédic{genero === "m" ? "o" : "a"}</option>
            <option value="contador">
              Contador{genero === "m" ? "" : "a"}
            </option>
            <option value="corretor">
              Corretor{genero === "m" ? "" : "a"} de Imóveis
            </option>
            <option value="dent">Dentista</option>
            <option value="econ">Economista</option>
            <option value="edfis">
              Educador{genero === "m" ? "" : "a"} Físic
              {genero === "m" ? "o" : "a"}
            </option>
            <option value="enf">Enfermeir{genero === "m" ? "o" : "a"}</option>
            <option value="eng">Engenheir{genero === "m" ? "o" : "a"}</option>
            <option value="estat">
              Estatístic{genero === "m" ? "o" : "a"}
            </option>
            <option value="farm">
              Farmacêutic{genero === "m" ? "o" : "a"}
            </option>
            <option value="fisio">Fisioterapeuta</option>
            <option value="fono">
              Fonoaudiólog{genero === "m" ? "o" : "a"}
            </option>
            <option value="geo">Geógraf{genero === "m" ? "o" : "a"}</option>
            <option value="geologo">Geólog{genero === "m" ? "o" : "a"}</option>
            <option value="med">Médic{genero === "m" ? "o" : "a"}</option>
            <option value="vet">
              Médic{genero === "m" ? "o" : "a"} Veterinári
              {genero === "m" ? "o" : "a"}
            </option>
            <option value="meteorol">Meteorologista</option>
            <option value="museo">Museólog{genero === "m" ? "o" : "a"}</option>
            <option value="musico">Músic{genero === "m" ? "o" : "a"}</option>
            <option value="nutri">Nutricionista</option>
            <option value="psi">Psicólog{genero === "m" ? "o" : "a"}</option>
            <option value="quim">Químic{genero === "m" ? "o" : "a"}</option>
            <option value="rel_pub">Relações Públicas</option>
            <option value="rep_comercial">Representante Comercial</option>
            <option value="rad">
              Tecnólog{genero === "m" ? "o" : "a"} em Radiologia
            </option>
            <option value="terap_ocup">Terapeuta Ocupacional</option>
            <option value="outra">OUTRA</option>
          </select>
          {profissao === "outra" ? (
            <input type="text" placeholder="Informe sua profissão" />
          ) : null}
          {!["outra", "none", null].includes(profissao) ? (
            <div>
              <label htmlFor="conselho">Conselho Regional:</label>
              <input
                type="text"
                name="conselho"
                value={
                  profissao === "admin"
                    ? "CRA"
                    : profissao === "adv"
                    ? "OAB"
                    : profissao === "agro"
                    ? "CREA"
                    : profissao === "arq"
                    ? "CAU"
                    : profissao === "assist_social"
                    ? "CRESS"
                    : profissao === "biblio"
                    ? "CRB"
                    : profissao === "bio"
                    ? "CRBio"
                    : profissao === "biom"
                    ? "CRBM"
                    : profissao === "contador"
                    ? "CRC"
                    : profissao === "corretor"
                    ? "CRECI"
                    : profissao === "dent"
                    ? "CRO"
                    : profissao === "econ"
                    ? "CORECON"
                    : profissao === "edfis"
                    ? "CREF"
                    : profissao === "enf"
                    ? "COREN"
                    : profissao === "eng"
                    ? "CREA"
                    : profissao === "estat"
                    ? "CONRE"
                    : profissao === "farm"
                    ? "CRF"
                    : profissao === "fisio"
                    ? "CREFITO"
                    : profissao === "fono"
                    ? "CREFONO"
                    : profissao === "geo"
                    ? "CREA"
                    : profissao === "geologo"
                    ? "CREA"
                    : profissao === "med"
                    ? "CRM"
                    : profissao === "vet"
                    ? "CRMV"
                    : profissao === "meteorol"
                    ? "CREA"
                    : profissao === "museo"
                    ? "COREM"
                    : profissao === "musico"
                    ? "OMB"
                    : profissao === "nutri"
                    ? "CRN"
                    : profissao === "psi"
                    ? "CRP"
                    : profissao === "quim"
                    ? "CRQ"
                    : profissao === "rel_pub"
                    ? "CONRERP"
                    : profissao === "rep_comercial"
                    ? "CORE"
                    : profissao === "rad"
                    ? "CRTR"
                    : profissao === "terap_ocup"
                    ? "CREFITO"
                    : ""
                }
              />
            </div>
          ) : null}
        </form>
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
      </div>
    </div>
  );
};

export default Terms;
