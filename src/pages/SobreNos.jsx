import ListContainer from "../components/ListContainer/ListContainer";
import PerfilCard from "../components/PerfilCard/PerfilCard";
import Base from "./Base";

const dadosPerfil = [
    {
        "nome": "Guilherme Reis",
        "detalhes": "Sou Guilherme Reis, aluno de Engenharia de Software no IBMEC, no terceiro período. Tenho interesse em aprender constantemente e em me preparar para uma boa abertura no mercado de trabalho, desenvolvendo habilidades em programação",
    },
    {
        "nome": "Rodrigo Mourão",
        "detalhes": "Sou Rodrigo Mourão, aluno de Análise e Desenvolvimento de Sistemas no IBMEC, atualmente no primeiro período. Tenho interesse em programação e tecnologia, e busco aprender e ampliar meus conhecimentos",
    },
    {
        "nome": "Matheus Reis",
        "detalhes": "Meu nome é Matheus Reis, sou estudante de Engenharia de Software no IBMEC, e estou no terceiro período. Tenho o objetivo de aprender cada vez mais, focando em desenvolvimento de software",
    },
];

const SobreNos = () => {
    return (
        <Base>
            <ListContainer>
                {
                    dadosPerfil.map((pro) => (
                        <PerfilCard
                            nome={pro.nome}
                            key={pro.nome} // Usando nome como chave única
                            detalhes={pro.detalhes}
                        />
                    ))
                }
            </ListContainer>
        </Base>
    );
}

export default SobreNos;
