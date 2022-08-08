const wrapper = document.querySelector('.wrapper'),
selectBtn = document.querySelector('.select-btn'),
searchInput = document.querySelector('input'),
options = document.querySelector('.options');

let foods = [
    'Mohinga',
    'Kout Swal',
    'Nan Kye Thote',
    'Kor Yay',
    'Nan Pyar Pel Pyote',
    'E Kyar Kway',
    'Hta Min Kyaw',
    'Pout Si',
    'Sa Mu Sar',
    'Shan Kout Swal',
    'Mee Shay'];

function addFood(selectedFood) {
    options.innerHTML = ""
    foods.forEach(food => {
        let isSelected = food === selectedFood ? 'selected' : ""
        let li = `<li onClick="updateName(this)" class="${isSelected}">${food}</li>`;
        options.insertAdjacentHTML('beforeend', li)
    });
}
addFood();

function updateName(selectedLi) {
    searchInput.value = "";
    addFood(selectedLi.innerText);
    wrapper.classList.remove('active')
    selectBtn.firstElementChild.innerText = selectedLi.innerText
}

searchInput.addEventListener("keyup", () => {
    let arr = [];
    let searchValue = searchInput.value.toLowerCase();
    arr = foods.filter(data => {
        return data.toLowerCase().startsWith(searchValue);
    }).map(data => `<li onClick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Oops! Food not found</p>`;
})

selectBtn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
