// Components
import Header from "../components/Header";
import Bottom from "../components/Bottom";
// Dados
import dados from "../data/db.json";

const Residentes = () => {
  return (
    <div className="blocoPrincipal">
      <Header />
      <ul className="listaCards">
        {dados.residentes.map((item) => (
          <div className="card" key={item.id}>
            <span className="letra">{item.nome[0]}</span>
            <div>
              <h3>{item.nome}</h3>
              <p>
                Quarto {item.quarto} | {item.idade}a | Grau {item.grau}
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

export default Residentes;
