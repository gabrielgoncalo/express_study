const contactRepository = require('../repositories/contactRepository');

class contactController {
    index(request, response) {
        // Lista todos os registros
        const contacts = contactRepository.findAll();
        response.json(contacts);
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
