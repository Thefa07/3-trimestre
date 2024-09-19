const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["123456789", "987654321"],
};
cliente.enderecos = [{

    rua: "R. Joseph Climber",
    numero: 1819,
    apartamento: true,
    complemento: "ap 123",
},
];

const ChavesDoObjeto = object.keys(clientes);
console.log(ChavesDoObjeto)

if (!ChavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
}