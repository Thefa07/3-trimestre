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

function LigaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}