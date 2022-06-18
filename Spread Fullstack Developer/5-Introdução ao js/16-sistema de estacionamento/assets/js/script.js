(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function validarPlaca(placa) {
        let resposta = false;
        const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
        const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
        const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
        if (regexPlaca.test(placa)) {
            resposta = true;
        }
        if (regexPlacaMercosulCarro.test(placa)) {
            resposta = true;
        }
        if (regexPlacaMercosulMoto.test(placa)) {
            resposta = true;
        }
        return resposta;
    }
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculos) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }
        function adcionar(veiculo, salva) {
            var _a, _b;
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">X</button>
            </td>
            `;
            (_a = row.querySelector('.delete')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                remover(this.dataset.placa);
            });
            (_b = $('#patio')) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const { entrada, nome } = ler().find((veiculo) => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function render() {
            $('#patio').innerHTML = '';
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adcionar(veiculo));
            }
        }
        return { ler, adcionar, remover, salvar, render };
    }
    patio().render();
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value.trim().replace(/-/g, "").toUpperCase;
        if (!nome || !placa) {
            alert('Os campos nome e placa são obrigatórios');
            return;
        }
        if (!validarPlaca(placa)) {
            alert('Placa inválida');
            return;
        }
        patio().adcionar({
            nome,
            placa,
            entrada: new Date().toLocaleTimeString('pt-br') + ' (Brasília)',
        }, true);
    });
})();
