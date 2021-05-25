//const PPMCProperties = require('./ppmc-properties');

function sequencia_ppmc(PPMCProperties){
    return `O gate não será executado, apenas sequencias com tipo ${PPMCProperties.TIPO_SEQUENCIA} e data de criacao maior que ${PPMCProperties.DATA_MINIMA_CRIACAO}`
} 

function status_rdm_sucesso(status){
    return `O gate não será executado para a RDM com status ${status}`
} 

function categoria_rdm_sucesso(categoria){
    return `O gate não será executado para RDM com categoria ${categoria}`
}  

function prioridade_rdm_sucesso(prioridade){
    return `O gate não será executado para RDM com prioridade ${prioridade}`
} 

function departamento_rdm_sucesso(departamento){
    return `O gate não será executado para RDM com departamento ${departamento}`
} 

function tipo_rdm_sucesso(tipo){
    return `O gate não será executado para RDM com tipo ${tipo}`
} 

function gate_sucesso(){
    return {
        status: 'sucesso',
        mensagem: 'Gates de qualidade executados, nenhum erro encontrado'
    }
} 


module.exports = {
    status_rdm_sucesso : status_rdm_sucesso,
    categoria_rdm_sucesso : categoria_rdm_sucesso,
    prioridade_rdm_sucesso : prioridade_rdm_sucesso,
    gate_sucesso : gate_sucesso,
    departamento_rdm_sucesso : departamento_rdm_sucesso,
    tipo_rdm_sucesso : tipo_rdm_sucesso,
    sequencia_ppmc : sequencia_ppmc
};