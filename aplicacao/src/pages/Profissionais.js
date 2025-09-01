// Components
import Header from "../components/Header";
import Bottom from "../components/Bottom";
// Dados
import dados from "../data/db.json";

const Profissionais = () => {
  return (
    <div className="blocoPrincipal">
      <Header />
      <ul className="listaCards">
        {dados.profissionais.map((item) => (
          <div className="card" key={item.id}>
            <span className="letra">{item.profissao[0]}</span>
            <div>
              <h3>{item.profissao}</h3>
              <p>
                {item.ferramentas}
              </p>
            </div>
          </div>
        ))}
      </ul>
      <span style={{ flexGrow: 1 }} />
      <Bottom />
    </div>
  );
};

export default Profissionais;
