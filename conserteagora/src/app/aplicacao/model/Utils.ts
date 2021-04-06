export class Utils {

    public static cnpjValido(cnpj: any): boolean {

        if (!cnpj) {
            return true;
        }

        if (cnpj.length === 0) {
            return true;
        }

        cnpj = !cnpj || cnpj.replace(/\D/g, '');
        const cnpjsInvsRegex = /1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14}|0{14}/;
        if (!cnpj || cnpj.length !== 14 || cnpjsInvsRegex.test(cnpj)) {
            return false;
        }
        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        const digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== parseInt(digitos.charAt(0), 10)) {
            return false;
        }
        tamanho += 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        return (resultado === parseInt(digitos.charAt(1), 10));
    }

    public static cpfValido(cpf: any): boolean {
        if (!cpf) {
            return true;
        }
        if (cpf.length === 0) {
            return true;
        }

        cpf = !cpf || cpf.replace(/\D/g, '');
        const cpfsInvsRegex = /1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}/;

        if (!cpf || cpf.length !== 11 || cpfsInvsRegex.test(cpf)) {
            return false;
        }

        let x = cpf.length - 1;
        let digitosTemp = 0;
        let e = 0;
        let h = '';

        for (let i = 0; i <= cpf.length - 3; i++) {
            digitosTemp = cpf.substring(i, i + 1);
            e = e + (digitosTemp * x);
            x -= 1;
            h = h + digitosTemp;
        }

        let digitos = 11 - (e % 11);
        if (digitos === 10 || digitos === 11) {
            digitos = 0;
        }

        const cpfSemDigVer = cpf.substring(0, cpf.length - 2) + digitos;
        x = 11;
        e = 0;
        for (let j = 0; j <= (cpf.length - 2); j++) {
            e += (cpfSemDigVer.substring(j, j + 1) * x);
            x -= 1;
        }

        let digVerificador = 11 - (e % 11);
        if (digVerificador === 10 || digVerificador === 11) {
            digVerificador = 0;
        }
        return ((digitos + '' + digVerificador) === cpf.substring(cpf.length, cpf.length - 2));
    }

}