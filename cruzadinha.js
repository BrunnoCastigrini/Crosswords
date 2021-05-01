var respostas_certas = 0;

function verificar() {
    var resposta = (resposta_atual.value).toUpperCase();


    if (resposta == '') {
        alert('Insira alguma resposta!')

    } else {

        if (resposta == 'CPU' && respostas_certas == 0) {
            respostas_certas++
            change_.innerHTML = `Um circuíto digital que realiza operações lógicas e aritiméticas. Qual a sigla desse componente?`;
            cpu1.innerHTML = 'C';
            cpu2.innerHTML = 'P';
            cpu3.innerHTML = 'U';

        } else if (resposta == 'ULA' && respostas_certas == 1) {
            respostas_certas++
            change_.innerHTML = `Tipo de memória que se encontra no topo da hierarquia de memória.`;
            ula1.innerHTML = 'U';
            ula2.innerHTML = 'L';
            ula3.innerHTML = 'A';

        } else if (resposta == 'REGISTRADORES' && respostas_certas == 2) {
            respostas_certas++
            change_.innerHTML = `Tipo de memória volátil que tem como nome Random acess memory. Qual a sigla
            deste componente?`
            registrador1.innerHTML = 'R';
            registrador2.innerHTML = 'E';
            registrador3.innerHTML = 'G';
            registrador4.innerHTML = 'I';
            registrador5.innerHTML = 'S';
            registrador6.innerHTML = 'T';
            registrador7.innerHTML = 'R';
            registrador8.innerHTML = 'A';
            registrador9.innerHTML = 'D';
            registrador10.innerHTML = 'O';
            registrador11.innerHTML = 'R';
            registrador12.innerHTML = 'E';
            registrador13.innerHTML = 'S';

        } else if (resposta == 'RAM' && respostas_certas == 3) {
            respostas_certas++
            change_.innerHTML = `Tipo de memória não volátil que oferece dados apenas para leitura.`
            ram1.innerHTML = 'R';
            ram2.innerHTML = 'A';
            ram3.innerHTML = 'M';

        } else if (resposta == 'ROM' && respostas_certas == 4) {
            respostas_certas++
            change_.innerHTML = `Tipo de memória não volátil que precisa ter seu chip exposto a 
            luz ultravioleta para apagar seu conteúdo.`
            rom1.innerHTML = 'R';
            rom2.innerHTML = 'O';
            rom3.innerHTML = 'M';

        } else if (resposta == 'EPROM' && respostas_certas == 5) {
            respostas_certas++
            change_.innerHTML = `Tipo particular de EPROM que mantém as informações armazenadas sem
            a necessidade de uma fonte de energia elétrica.`
            eprom1.innerHTML = 'E';
            eprom2.innerHTML = 'P';
            eprom3.innerHTML = 'O';
            eprom4.innerHTML = 'M';

        } else if (resposta == 'FLASH' && respostas_certas == 6) {
            respostas_certas++
            change_.innerHTML = `Tipo de memória que precisa ter seu conteúdo copiado na RAM
            para poder ser executado pela CPU`
            flash1.innerHTML = 'F';
            flash2.innerHTML = 'L';
            flash3.innerHTML = 'A';
            flash4.innerHTML = 'S';
            flash5.innerHTML = 'H';

        } else if ((resposta == 'MEMORIA DE MASSA' || resposta == 'MEMÓRIA DE MASSA' || resposta == 'MEMORIADEMASSA') && respostas_certas == 7) {
            respostas_certas++
            change_.innerHTML = `Permite que periféricos acessem diretamente a RAM sem ocupar processamento`
            memoria1.innerHTML = 'M';
            memoria2.innerHTML = 'E';
            memoria3.innerHTML = 'M';
            memoria4.innerHTML = 'Ó';
            memoria5.innerHTML = 'R';
            memoria6.innerHTML = 'I';
            memoria7.innerHTML = 'A';
            memoria8.innerHTML = '-';
            memoria9.innerHTML = 'D';
            memoria10.innerHTML = 'E';
            memoria11.innerHTML = '-';
            memoria12.innerHTML = 'M';
            memoria13.innerHTML = 'A';
            memoria14.innerHTML = 'S';
            memoria15.innerHTML = 'S';
            memoria16.innerHTML = 'A';

        } else if (resposta == 'DMA' && respostas_certas == 8) {
            respostas_certas++
            change_.innerHTML = `Também conhecido como Slave Select(SS). Usado para selecionar um ou um 
            conjunto de circuitos que estão conectados no computador.`
            dram1.innerHTML = 'D';
            dram2.innerHTML = 'M';

        } else if ((resposta == 'CS' || resposta == 'CHIP SELECTOR' || resposta == 'chipselector') && respostas_certas == 9) {
            respostas_certas++
            change_.innerHTML = `Grupo de linhas ou trilhas usadas para se referir a um endereço
            fisico na memória. O número de trilhas determina a quantidade de endereços na
            memória física.`
            cs1.innerHTML = 'C';
            cs2.innerHTML = 'S'

        } else if ((resposta == 'ADDRESS BUS' || resposta == 'ADDRESSBUS' || resposta == 'ADDRESS-BUS') && respostas_certas == 10) {
            respostas_certas++
            change_.innerHTML = `Também chamado de Memory Bus. É responsável por carregar os dados.`
            address_1.innerHTML = 'A'
            address_2.innerHTML = 'D'
            address_3.innerHTML = 'E'
            address_4.innerHTML = 'S'
            address_5.innerHTML = 'B'

        } else if ((resposta == 'DATA BUS' || resposta == 'DATABUS' || resposta == 'DATA-BUS') && respostas_certas == 11) {
            respostas_certas++
            change_.innerHTML = `Modelo de processador desenvolvido pela Intel que teve sua primeira
            versão lançada em setembro de 2009.`
            data_b1.innerHTML = 'D';
            data_b2.innerHTML = 'T';
            data_b3.innerHTML = 'A';
            data_b4.innerHTML = '-';
            data_b5.innerHTML = 'B';
            data_b6.innerHTML = 'U';
            data_b7.innerHTML = 'S';

        } else if (resposta == 'I5' && respostas_certas == 12) {
            respostas_certas++
            change_.innerHTML = `Modelo de processador desenvolvido pela Intel que teve sua primeira versão
            lançada em novembro de 2008.`
            i5.innerHTML = '5';

        } else if (resposta == 'I7' && respostas_certas == 13) {
            respostas_certas++
            change_.innerHTML = `Tipo de processador que possui dois processadores ou melhor dizendo 
           'Dois centros, núcleos ou cores de execução' no mesmo circuito integrado.
            Cada core tem sua própria memória cash e controlador que o permite que funcione
            mais efetivamente do que um processador single.
        `
            i7.innerHTML = '7';

        } else if ((resposta == 'DUAL-CORE' || resposta == 'DUAL CORE' || resposta == 'DUALCORE') && respostas_certas == 14) {
            respostas_certas++
            change_.innerHTML = `Segue o mesmo principio que um dual-core, mas agora em teoria tem
            o dobro de capacidade de processamento.`

            dual1.innerHTML = 'D';
            dual2.innerHTML = 'U';
            dual3.innerHTML = 'L';
            dual4.innerHTML = '-';
            dual5.innerHTML = 'C';
            dual6.innerHTML = 'R';
            dual7.innerHTML = 'E';
        } else if ((resposta == 'QUAD-CORE' || resposta == 'QUADCORE' || resposta == 'QUAD CORE') && respostas_certas == 15) {
            respostas_certas++
            quad1.innerHTML = 'Q';
            quad2.innerHTML = 'U';
            quad3.innerHTML = 'A';
            quad4.innerHTML = '-';
            quad5.innerHTML = 'C';
            quad6.innerHTML = 'O';
            quad7.innerHTML = 'R';

            change_.innerHTML = 'Você venceu o jogo =)'
            pergunta.innerHTML = 'Parabéns!'
            botao_verificar.style.display = 'none'
            resposta_atual.style.display = 'none'
        }
    }
    right_.innerHTML = `${respostas_certas}`;
}
