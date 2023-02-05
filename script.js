const defaultFoodsList = [
    "Phở",
    "Bún chả",
    "Gà rán",
    "Bánh mì",
    "Cơm tấm",
    "Bánh xèo",
    "Bún đậu",
    "Bún bò",
    "Bún riêu",
    "Bún thái",
    "Lẩu nấm",
    "Mì cay",
    "Các món xào",
    "Bò áp chảo",
    "Cơm xèo",
    "Bò né",
    "Bò lá lốt",
    "Mì Quảng",
    "Bánh canh cá lóc",
    "Bùn mắm nêm",
    "Bún cá",
    "Bún mắm",
    "Bún thịt nướng",
    "Chợ đêm Hồ Thị kỷ",
    "Bún đậu cô Tống",
    "Gỏi cá trích",
    "Xiêng nướng làng đại học",
    "Buffet lang thang",
    "Ramen",
    "Phá lấu Kha vạn cân",
    "Hủ tiếu mực",
    "Hủ tiếu xương/giò/khô",
    "Bánh canh cua",
    "Cơm gà",
    "Bún măng vịt",
    "Cháo lòng",
    "Cháo gỏi vịt"
];

let foodsList = [];
let historyList = [];

function randomDish(foodsList) {
    const index = Math.floor(Math.random() * foodsList.length);
    return foodsList[index];
}

function addDefaultFoods() {
    for (let i = 0; i < defaultFoodsList.length; i++) {
        foodsList.push(defaultFoodsList[i])
    }
}

function addFood(newFood) {
    foodsList.push(newFood);
}

function clearFoodList() {
    foodsList.splice(0, foodsList.length);
}

function updateFoodList() {
    let list = document.getElementById("food-list");
    let count = document.getElementById("total-foods-count"); 

    list.innerHTML = "";
    count.innerHTML = foodsList.length;

    foodsList.sort();
    foodsList.forEach(function (food) {
        list.innerHTML += "<li>" + food + "</li>";
    });
}

function updateHistory() {
    let list = document.getElementById("history");
    list.innerHTML = "";
    
    historyList.forEach(function (food) {
        list.innerHTML = "<li>" + food + "</li>" + list.innerHTML;
    });
}

function addHistory(food) {
    historyList.push(food);
    historyList = historyList.slice(-3);
}