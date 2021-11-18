const listContacts = require("./controllers/contacts/listContacts");
const getContactById = require("./controllers/contacts/getContactById");
const addContact = require("./controllers/contacts/addContact");
const removeContact = require("./controllers/contacts/removeContact");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

// {
//     "id": 3,
//     "name": "Kennedy Lane",
//     "email": "mattis.Cras@nonenimMauris.net",
//     "phone": "(542) 451-7038"
//   },
