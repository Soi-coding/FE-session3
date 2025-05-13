// Get form elements
const checkboxes = document.querySelectorAll(
  "input[type='checkbox'][name='check_group']"
);
const radios = document.querySelectorAll(
  "input[type='radio'][name='radio_group']"
);
const select = document.querySelector("select");

// Get display elements
const foodDisplay = document.getElementById("food");
foodDisplay.textContent = "좋아하는 음식: 제출 버튼을 눌러주세요";

const genderDisplay = document.getElementById("gender");
genderDisplay.textContent = "성별: 제출 버튼을 눌러주세요";

const dayDisplay = document.getElementById("day");
dayDisplay.textContent = "요일: 제출 버튼을 눌러주세요";

const submitButton = document.querySelector("button");

// Submit button event listener - 제출 버튼을 클릭했을 때만 내용 업데이트
submitButton.addEventListener("click", () => {
  // 음식 선택 업데이트
  updateFoodDisplay();

  // 성별 선택 업데이트
  updateGenderDisplay();

  // 요일 선택 업데이트
  updateDayDisplay();

  // 제출 알림
  alert("선택한 내용이 제출되었습니다!");
});

// Update function food display
function updateFoodDisplay() {
  const selectedFood = document.querySelector(
    "input[type='radio'][name='food']:checked"
  );

  if (selectedFood) {
    foodDisplay.textContent = `좋아하는 음식: ${selectedFood.value}`;
  } else {
    foodDisplay.textContent = "좋아하는 음식: 선택 없음";
  }
}

// Update function gender display
function updateGenderDisplay() {
  const selectedGender = document.querySelector(
    "input[type='radio'][name='gender']:checked"
  );

  if (selectedGender) {
    genderDisplay.textContent = `성별: ${selectedGender.value}`;
  } else {
    genderDisplay.textContent = "성별: 선택 없음";
  }
}

// Update function day display
function updateDayDisplay() {
  const selectedOption = select.options[select.selectedIndex];
  dayDisplay.textContent = `요일: ${selectedOption.text} (${selectedOption.value})`;
}
