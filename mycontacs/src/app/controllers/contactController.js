class contactController {
    index(request, response) {
        // Lista todos os registros

        response.send('send from contact controller');
    }

    show() {
        // Obter um registro
    }

    store() {
        // Criar novo registro

    }

    update() {
        // Editar um registro

    }

    delete(){
        // Deletar um registro

    }
}
//metodo Singleton
module.exports = new contactController();
