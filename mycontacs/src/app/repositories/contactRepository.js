const { uuid } = require('uuidv4');

const contacts = [
    {
        id: uuid(),
        name: 'gabriel',
        email: 'gabriel.goncalo@gmail.com',
        phone: '96059712',
        category_id: uuid(),
    },
];

class contactRepository {
    findAll() {
        return contacts;

    }

}

module.exports = new contactRepository();
