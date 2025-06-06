let html = "";
for (let i = 1; i <= 42; i++) {
  html += `
    <li>
        <a href="./pics/img (${i}).webp" target="_blank">
          <img src="./pics/img (${i}).webp" alt="image" />
        </a>
    </li>`;
}

html += "<li></li>";

document.getElementById("galerija").innerHTML = html;
