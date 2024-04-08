/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/
// "public/data/contacts.json"
const apiURL = "https://660ded886ddfa2943b3573c8.mockapi.io/api/v1/tasks";
async function getContacts() {
  const res = await fetch(apiURL);
  const payload = await res.json();
  renderContacts(payload);
}

getContacts();

function renderContacts(contacts) {
  const contactsElement = document.getElementById("contacts");
  contactsElement.innerHTML = "";
  contacts.forEach(({ name, email }) => {
    const template = `<div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${name}</h5>
      </div>
      <small>${email}</small>
      </div>
    `;
    contactsElement.innerHTML += template;
  });
}
