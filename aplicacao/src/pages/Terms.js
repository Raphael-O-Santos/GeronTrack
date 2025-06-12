// Styles
import styles from "./Terms.module.css";
// MUI components
import Button from "@mui/material/Button";
// Navigation
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Terms = () => {
  const [genero, setGenero] = useState("m");

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
        <div className={styles.pessoa}>
          <form>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              placeholder="Informe seu nome completo"
            />
            <div style={{ display: "flex" }}>
              <p>Gênero:</p>
              <label htmlFor="masculino">
                <input
                  type="radio"
                  name="opcao"
                  value={genero}
                  onClick={() => setGenero("m")}
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
            <span>Função:</span>
            <select name="funcao">
              <option value="none">-- ESCOLHA --</option>
              <option value="dono">Don{genero === "m" ? "o" : "a"}</option>
              <option value="gestor">Gestor{genero === "m" ? "" : "a"}</option>
              <option value="rt">
                Responsável Técnic{genero === "m" ? "o" : "a"} (RT)
              </option>
            </select>
            <span>Profissão:</span>
            <select name="profissao">
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
              <option value="geologo">
                Geólog{genero === "m" ? "o" : "a"}
              </option>
              <option value="med">Médic{genero === "m" ? "o" : "a"}</option>
              <option value="vet">
                Médic{genero === "m" ? "o" : "a"} Veterinári
                {genero === "m" ? "o" : "a"}
              </option>
              <option value="meteorol">Meteorologista</option>
              <option value="museo">
                Museólog{genero === "m" ? "o" : "a"}
              </option>
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
            <input
              type="text"
              name="profissao"
              placeholder="Informe sua profissão"
              // hidden={}
            />
          </form>
        </div>
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
