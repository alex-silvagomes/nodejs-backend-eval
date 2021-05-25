var rdm_status = [
    "EM EXECUCAO", 
    "EM AVALIACAO", 
    "SOLICITADA", 
    "EM APROVACAO", 
    "RESOLVIDA", 
    "EM AUTORIZACAO"
]
//Demais status (ABERTA, EM ELABORAÇÃO, CANCELADA e REJEITADA) não se aplicam para os gates de testes.

var rdm_categoria = [
    "MINIMA", 
    "ALTA",
    "MAXIMA"
]

//Catagoria Normal e RDH não se aplicam para os gates de testes.
var rdm_prioridade = [
    "ALTA", 
    "BAIXA", 
    "MEDIA",
    "D+2"
]
//As demais prioridades (CORRECAO DE IMPLANTACAO, CORRECAO DURANTE IMPLANTACAO, CORRECAO EMERGENCIAL DE INTERRUPCAO, EMERGENCIAL CORRETIVA, EMERGENCIAL INTERESSE COMERCIAL, EMERGENCIAL REGULATORIA, NAO PLANEJADA) não se aplicam para os gates de testes.

var rdm_departamento = [ "DS" ]
//DEPARTAMENTO RESPONSAVEL RDM: somente DS

var rdm_tipo = [
    "MELHORIA", 
    "PROJETO",
    "REGULATORIA"
]
//tipos encontrados
//MUDANCAS TECNICAS
//CORRECAO
//Para todas as demais não se aplicam para os gates de testes.

module.exports = {
    status : rdm_status,
    categoria : rdm_categoria,
    prioridade : rdm_prioridade,
    departamento : rdm_departamento,
    tipo : rdm_tipo
}