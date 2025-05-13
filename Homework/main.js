//main.js
//초기값은 다 비워둠
const customTag = {
  tagName: "", //value: 태그 이름
  textContent: "", //value: 태그에 들어갈 텍스트
  styles: {
    color: "", //글자의 색
    fontSize: "", //글자 크기
  },
  id: "", //태그의 id
  class: [], //태그의 클래스들

  // 태그 이름 변경
  changeTagName(newTagName) {
    this.tagName = newTagName;
  },

  // 텍스트 내용 변경
  changeTextContent(newText) {
    this.textContent = newText;
  },

  // 스타일 변경 ([]는 변수를 나타냄)
  changeStyles(styleName, value) {
    this.styles[styleName] = value;
  },

  // ID 설정
  setId(newId) {
    this.id = newId;
  },

  // 클래스 추가 (push는 배열에 항목 추가)
  addClassName(className) {
    this.class.push(className);
  },

  // 클래스 제거 (일치하지 않는 요소들만 새로운 배열로)
  removeClassName(className) {
    this.class = this.class.filter((cls) => cls !== className);
  },

  // 여기 아래 부분은 수정하지 마시오.
  toHTML() {
    // 클래스 문자열 생성
    const classString =
      this.class.length > 0 ? ` class="${this.class.join(" ")}"` : "";

    // ID 문자열 생성
    const idString = this.id ? ` id="${this.id}"` : "";

    // 스타일 문자열 생성
    let styleString = "";
    for (const property in this.styles) {
      styleString += `${property == "fontSize" ? "font-size" : property}: ${
        this.styles[property]
      }; `;
    }
    styleString = styleString ? ` style="${styleString.trim()}"` : "";

    // 완성된 HTML 태그 반환
    return `<${this.tagName}${idString}${classString}${styleString}>${this.textContent}</${this.tagName}>`;
  },
  // DOM에 렌더링
  render(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      // 기존 내용을 지우고 새로 렌더링
      container.innerHTML = "";
      // 새 HTML 태그 추가
      container.innerHTML += this.toHTML();
    } else {
      console.error(`Container with ID "${containerId}" not found.`);
    }
  },
};
window.addEventListener("DOMContentLoaded", () => {
  customTag.render("container");
});
