/*Objetos 1*/
/**
 * @typedef {Object} carro
 * @property {number} Idlink
 * @property {string} origem
 * @property {string} fabricante
 * @property {string} modelo
 * @property {string} versão
 * @property {number} valorPT
 * @property {number} valor
 * @property {number} ano
 * @property {number} km
 * @property {string} fuel
 * @property {number} CV
 * @property {number} CC
 * @property {string} caixa
 * @property {number} consumB
 * @property {number} consumE
 */


/*Objetos 2*/
/**
 * @typedef {Object} carroBDInvest
 * @property {number} id_link
 * @property {number} NCotas
 * @property {number} prazo
 * @property {number} Mincota
 * @property {number} RestCota
 * @property {number} profit
 * @property {number} profitPorc
 * @property {number} ReservCotas
 * @property {number} ReservBuy
 */


/** @type {carro[]} */
const carros = [

    { IdSite: 17744677, origem: "Alemanha", fabricante: "Audi", modelo: "A3 Sportback", versão: "Attraction", valorPT: 11995, valor: 9700, ano: 2013, km: 230, fuel: "diesel", CV: 105, CC: 1.598, caixa: "Manual", consumB: 4, consumE: 3.38},
    { IdSite: 1115024, origem: "Bélgica", fabricante: "Audi", modelo: "A3 Sportback", versão: "Attraction", valorPT: 12300, valor: 10820, ano: 2013, km: 200, fuel: "diesel", CV: 105, CC: 1.598, caixa: "Manual", consumB: 4, consumE: 3.8	},
    { IdSite: 218943, origem: "Alemanha", fabricante: "Audi", modelo: "A3", versão: "Attraction", valorPT: 14995, valor: 12590, ano: 2016, km: 179, fuel: "diesel", CV: 110, CC: 1.598, caixa: "Manual", consumB: 3.8	, consumE: 3.7	},
    { IdSite: 392117, origem: "Alemanha", fabricante: "BMW", modelo: "118d F20", versão: "Sport Line", valorPT: 10750, valor: 9920, ano: 2012, km: 195, fuel: "diesel", CV: 143, CC: 1.995, caixa: "Manual", consumB: 4.4	, consumE: 4.2	},
    { IdSite: 3163746, origem: "Alemanha", fabricante: "BMW", modelo: "118d F40", versão: "M Sport", valorPT: 27990, valor: 25920, ano: 2020, km: 230, fuel: "diesel", CV: 150, CC: 1.995, caixa: "Automática", consumB: 4.6	, consumE: 4.3	},
    { IdSite: 25221242, origem: "Alemanha", fabricante: "BMW", modelo: "116d F20", versão: "Advance-Advantage", valorPT: 17000, valor: 14000, ano: 2017, km: 80, fuel: "diesel", CV: 116, CC: 1.498, caixa: "Manual", consumB: 3.9	, consumE: 4 }
]

/** @type {carroBDInvest[]} */
const BDInvest = [
    { IdSite: 17744677, NCotas: 4, prazo: 90, Mincota: 2425, profit: 1800, profitPorc: 19, ReservCotas: 1, ReservBuy: 10 },
    { IdSite: 1115024, NCotas: 4, prazo: 60, Mincota: 2705, profit: 1480, profitPorc: 14, ReservCotas: 1, ReservBuy: 7 },
    { IdSite: 218943, NCotas: 4, prazo: 90, Mincota: 3148, profit: 2156, profitPorc: 17, ReservCotas: 1, ReservBuy: 0 },
    { IdSite: 392117, NCotas: 6, prazo: 60, Mincota: 1653, profit: 830, profitPorc: 8, ReservCotas: 2, ReservBuy: 0 },
    { IdSite: 3163746, NCotas: 15, prazo: 60, Mincota: 1728, profit: 2070, profitPorc: 8, ReservCotas: 2, ReservBuy: 0 },
    { IdSite: 25221242, NCotas: 4, prazo: 90, Mincota: 3500, profit: 2996, profitPorc: 21, ReservCotas: 1, ReservBuy: 1 }
]


/*Outros*/
const BdSeguranca = [
    [17744677, "ABS", "Airbag do condutor", "Airbag do passageiro", "Airbag lateral do condutor e passageiro"],
    [1115024, "ABS", "Chamada automática de SOS", "Airbag do condutor", "Airbag do passageiro", "Airbag lateral do condutor e passageiro"],
    [218943, "Chamada automática de SOS", "Airbag do condutor", "Airbag do passageiro", "Airbag lateral do condutor e passageiro"],
    [392117, "Chamada automática de SOS", "Airbag do condutor", "Airbag do passageiro", "Airbag lateral do condutor e passageiro"],
    [3163746, "Chamada automática de SOS", "Airbag do condutor", "Airbag do passageiro", "Airbag lateral do condutor e passageiro"],
    [25221242, "Chamada automática de SOS", "Airbag do condutor", "Airbag do passageiro", "Airbag lateral do condutor e passageiro"]
];

const BdConducao = [
    [17744677, "Cruise Control", "Sensor de estacionamento traseiro", "Assistente de estacionamento", "Câmara de marcha-atrás", "Retrovisores exteriores com regulação eléctrica", "Sistema de aviso de transposição da via", "Reconhecimento sinais trânsito", "Luzes diurnas", "Luzes diurnas LED", "Faróis de nevoeiro", "Farolim traseiro LED", "	Travão de mão eléctrico", "Direcção assistida"],
    [1115024, "Sensor de estacionamento traseiro", "Assistente de estacionamento", "Câmara de marcha-atrás", "Retrovisores exteriores com regulação eléctrica", "Sistema de aviso de transposição da via", "Reconhecimento sinais trânsito", "Luzes diurnas", "Faróis de nevoeiro", "Farolim traseiro LED", "	Travão de mão eléctrico", "Direcção assistida"],
    [218943, "Assistente de estacionamento", "Câmara de marcha-atrás", "Retrovisores exteriores com regulação eléctrica", "Sistema de aviso de transposição da via", "Reconhecimento sinais trânsito", "Luzes diurnas", "Luzes diurnas LED", "Faróis de nevoeiro", "Farolim traseiro LED"],
    [392117, "Sensor de estacionamento traseiro", "Assistente de estacionamento", "Câmara de marcha-atrás", "Retrovisores exteriores com regulação eléctrica", "Sistema de aviso de transposição da via", "Reconhecimento sinais trânsito", "Luzes diurnas", "Faróis de nevoeiro", "Farolim traseiro LED", "	Travão de mão eléctrico", "Direcção assistida"],
    [3163746, "Sensor de estacionamento traseiro", "Assistente de estacionamento", "Câmara de marcha-atrás", "Retrovisores exteriores com regulação eléctrica", "Sistema de aviso de transposição da via", "Reconhecimento sinais trânsito", "Luzes diurnas", "Faróis de nevoeiro", "Farolim traseiro LED", "	Travão de mão eléctrico", "Direcção assistida"],
    [25221242, "Sensor de estacionamento traseiro", "Assistente de estacionamento", "Câmara de marcha-atrás", "Retrovisores exteriores com regulação eléctrica", "Sistema de aviso de transposição da via", "Reconhecimento sinais trânsito", "Luzes diurnas", "Faróis de nevoeiro", "Farolim traseiro LED", "	Travão de mão eléctrico", "Direcção assistida"]

];

const BdConforto = [
    [17744677, "Estofos em tecido", "Apoio de braço dianteiro", "Volante em pele", "Comandos do rádio no volante", "Volante multifunções", "Fecho central sem chave", "Sensor de chuva", "Vidros eléctricos dianteiros", "Vidros eléctricos traseiros"],
    [1115024, "Estofos em tecido", "Apoio de braço dianteiro", "Volante em pele", "Comandos do rádio no volante", "Volante multifunções", "Fecho central sem chave", "Sensor de chuva", "Vidros eléctricos dianteiros", "Vidros eléctricos traseiros"],
    [218943, "Estofos em tecido", "Apoio de braço dianteiro", "Volante em pele", "Comandos do rádio no volante", "Volante multifunções", "Fecho central sem chave", "Sensor de chuva", "Vidros eléctricos dianteiros", "Vidros eléctricos traseiros"],
    [392117, "Estofos em tecido", "Apoio de braço dianteiro", "Volante em pele", "Comandos do rádio no volante", "Volante multifunções", "Fecho central sem chave", "Sensor de chuva", "Vidros eléctricos dianteiros", "Vidros eléctricos traseiros"],
    [3163746, "Estofos em tecido", "Apoio de braço dianteiro", "Volante em pele", "Comandos do rádio no volante", "Volante multifunções", "Fecho central sem chave", "Sensor de chuva", "Vidros eléctricos dianteiros", "Vidros eléctricos traseiros"],
    [25221242, "Estofos em tecido", "Apoio de braço dianteiro", "Volante em pele", "Comandos do rádio no volante", "Volante multifunções", "Fecho central sem chave", "Sensor de chuva", "Vidros eléctricos dianteiros", "Vidros eléctricos traseiros"]
];

const BdAudio = [
    [17744677, "Apple CarPlay", "Android Auto", "Bluetooth,	Sistema mãos livres", "Porta USB", "Ecrã táctil", "Controlo de funções do veículo por voz"],
    [1115024, "Apple CarPlay", "Android Auto", "Bluetooth,	Sistema mãos livres", "Porta USB", "Ecrã táctil", "Controlo de funções do veículo por voz"],
    [218943, "Apple CarPlay", "Android Auto", "Bluetooth,	Sistema mãos livres", "Porta USB", "Ecrã táctil", "Controlo de funções do veículo por voz"],
    [392117, "Apple CarPlay", "Android Auto", "Bluetooth,	Sistema mãos livres", "Porta USB", "Ecrã táctil", "Controlo de funções do veículo por voz"],
    [3163746, "Apple CarPlay", "Android Auto", "Bluetooth,	Sistema mãos livres", "Porta USB", "Ecrã táctil", "Controlo de funções do veículo por voz"],
    [25221242, "Apple CarPlay", "Android Auto", "Bluetooth,	Sistema mãos livres", "Porta USB", "Ecrã táctil", "Controlo de funções do veículo por voz"],

];