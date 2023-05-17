// Отримання посилань на елементи DOM
var filterNameInput = document.getElementById('filter-name');
var filterCategorySelect = document.getElementById('filter-category');
var cardList = document.getElementById('card-list');
var cards = cardList.getElementsByClassName('card');

// Слухач події для фільтрації за назвою
filterNameInput.addEventListener('input', filterCards);

// Слухач події для фільтрації за категорією
filterCategorySelect.addEventListener('change', filterCards);

function filterCards() {
  var filterNameValue = filterNameInput.value.toLowerCase(); // Отримання значення фільтру за назвою в нижньому регістрі
  var filterCategoryValue = filterCategorySelect.value; // Отримання значення фільтру за категорією

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var cardTitle = card.querySelector('h3').innerText.toLowerCase(); // Отримання заголовка картки
    var cardCategory = card.getAttribute('data-category'); // Отримання категорії картки

    // Перевірка відповідності фільтру за назвою і категорією
    var isNameMatched = cardTitle.includes(filterNameValue);
    var isCategoryMatched = filterCategoryValue === '' || filterCategoryValue === cardCategory;

    // Відображення або приховування картки в залежності від результатів фільтрації
    if (isNameMatched && isCategoryMatched) {
      card.style.display = 'block'; // Відображення картки
    } else {
      card.style.display = 'none'; // Приховування картки
    }
  }
}