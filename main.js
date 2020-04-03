const namesList = document.getElementById('namesList');
const newNameButton = document.getElementById('newName');

var names = [
    {
        id: 0,
        name: 'Steven'
    },
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Meedaxa'
    },
    {
        id: 3,
        name: 'Hash'
    }
];

updateUi();
function updateUi() {
    namesList.textContent = '';
    for (var i = 0; i < names.length; i++) {
        const nameLi = document.createElement('li');
        nameLi.textContent = names[i].name;
        nameLi.dataset.id = names[i].id;
        const editButton = document.createElement('button');
        editButton.textContent = 'edit';
        nameLi.appendChild(editButton);
        namesList.appendChild(nameLi);
    }
}


namesList.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        var id = Number(event.target.parentElement.dataset.id);
        for (var i = 0; i < names.length; i++) {
            if (names[i].id === id) {
                const updatedName = prompt('Edit name currnt name (' + names[i].name + ')');
                names[i].name = updatedName;
            }
        }
        updateUi();
    }
})


newNameButton.addEventListener('click', function() {
    addName();
});

function addName() {
    var lastItemIndex = names.length - 1;
    var lastItem = names[lastItemIndex];
    var id = lastItem.id++;
    var newName = prompt('Enter name');
    names.push({
        id: id,
        name: newName
    });
    updateUi();
}


