/*Variables*/
const defaultFoodsList = [
    "Phở",
    "Bún chả",
    "Gà rán",
    "Cơm tấm",
    "Bánh xèo",
    "Bún đậu",
    "Bún bò",
    "Bún riêu",
    "Bún thái",
    "Bún nắm",
    "Mì cay",
    "Các món xào",
    "Bò áp chảo",
    "Cơm xèo",
    "Bò né",
    "Bò lá lốt",
    "Mì Quảng",
    "Cao lầu",
    "Bánh canh cá lóc",
    "Bùn mắm nêm",
    "Bún cá",
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
    "Cháo gỏi vịt",
    "Bánh ướt lòng gà"
];

let buttonPressed = false;
let foodsList = [];
let historyList = [];

/*Function*/
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

// Xử lý button chọn món
function chooseFoodButtonClick() {
    const result = document.querySelector("#food-result");

    //Không cho nhấn button trong khi đang xử lý 
    if (buttonPressed) {
        return;
    }
    
    //Kiểm tra list rỗng
    if(foodsList.length === 0) {
        result.textContent = `Vui lòng thêm danh sách món ăn`;
        return;
    }

    //Hiển thị kết quả ngẫu nhiên liên tục
    let food = "";
    let interval = 0;
    buttonPressed = true;

    let intervalId = setInterval(function () {
        food = randomDish(foodsList);
        result.textContent = `Món ăn được chọn: ${food}`;

        interval+=2;
        clearInterval(intervalId);
        intervalId = setInterval(arguments.callee, interval);
    }, interval);

    //Sau 5s sẽ dừng hiển thị liên tục, kết quả cuối cùng được hiển thị
    setTimeout(function() {
        clearInterval(intervalId);

        //Hiển thị lịch sử
        if (!food) return;
        document.getElementById("history-label").style.display = "block";
        addHistory(food);
        updateHistory();
        buttonPressed = false;
    }, 5000);
    
}

// Tạo danh sách món ăn tự động
function addDefaultFoodButtonClick() {
    addDefaultFoods();
    updateFoodList();
}

// Thêm món ăn mới
function addNewFoodButtonClick() {
    const newFoodInput = document.getElementById("new-food-input");

    const newFood = newFoodInput.value;
    if (!newFood) return;
    addFood(newFood);
    updateFoodList();
}

//Xoá danh sách
function clearFoodListButtonClick() {
    const newFoodInput = document.getElementById("new-food-input");
    const result = document.getElementById("food-result");

    //Không cho nhấn button trong khi đang xử lý 
    if (buttonPressed) {
        return;
    }
    
    //Xoá kết quả
    result.textContent = "";
    newFoodInput.value = ""
    clearFoodList();
    updateFoodList();
}