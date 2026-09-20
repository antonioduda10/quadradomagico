// Reutiliza a ação do botão e mantém apenas uma atualização agendada por página.
function configurarGeracaoAutomatica(ids, gerar, preparar = () => {}) {
    const campos = ids.map(id => document.getElementById(id));
    let temporizador;
    let ultimosValores;
    const valoresAtuais = () => JSON.stringify(campos.map(campo => campo.value));

    function executar() {
        clearTimeout(temporizador);
        // Ao apagar um campo ou digitar um sinal, preserve o desafio atual.
        if (campos.some(campo => campo.value.trim() === '' ||
            !Number.isSafeInteger(Number(campo.value)))) return;

        preparar();
        if (campos.some(campo => !campo.checkValidity())) return;

        gerar();
        ultimosValores = valoresAtuais();
    }

    function atualizar() {
        clearTimeout(temporizador);
        // O evento change não deve sortear novamente após o evento input.
        if (valoresAtuais() !== ultimosValores) executar();
    }

    function agendar() {
        clearTimeout(temporizador);
        temporizador = setTimeout(atualizar, 250);
    }

    campos.forEach(campo => {
        campo.addEventListener('input', agendar);
        // Nos campos numéricos, sair do campo para clicar no botão não deve
        // gerar um desafio extra antes da ação manual.
        campo.addEventListener('change', campo.tagName === 'SELECT' ? atualizar : agendar);
    });

    // O botão continua gerando, inclusive sem alterações nos campos.
    return executar;
}
