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
    complemento: "ap 934",
},
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}