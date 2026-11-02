
const DEFAULT_TEXT =
    "Di chuột hoặc nhấn Tab vào một hình ảnh bên dưới để xem trước tại đây.";

function upDate(previewPic, eventName) {
    console.log("Sự kiện " + eventName + " đã được kích hoạt.");
    console.log("Alt:", previewPic.alt);
    console.log("Src:", previewPic.src);

    const previewArea = document.getElementById("image");

    if (!previewArea || !previewPic) {
        return;
    }

    previewArea.textContent = previewPic.alt;

    previewArea.style.backgroundImage =
        `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${previewPic.src}")`;

    previewArea.classList.add("has-image");
}

function unDo(eventName) {
    console.log("Sự kiện " + eventName + " đã được kích hoạt.");

    const previewArea = document.getElementById("image");

    if (!previewArea) {
        return;
    }

    previewArea.style.backgroundImage = "none";
    previewArea.textContent = DEFAULT_TEXT;
    previewArea.classList.remove("has-image");
}

function addTabIndex() {
    const images = document.querySelectorAll(".gallery-image");

    console.log("Sự kiện onload đã được kích hoạt.");
    console.log("Tổng số hình ảnh:", images.length);

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");

        console.log("Đã thêm tabindex cho hình ảnh:", i + 1);
    }
}

window.addEventListener("load", addTabIndex);

window.upDate = upDate;
window.unDo = unDo;
