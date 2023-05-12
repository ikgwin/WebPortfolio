function DarkLightMode() {

    const button = document.getElementById("switch");
    const body = document.getElementById("body");
    const navBar = document.getElementById("navBar");
    const navAbout = document.getElementById("navAbout");
    const navSkills = document.getElementById("navSkills");
    const navContact = document.getElementById("navContact");
    const introText = document.getElementById("introText");
    const switchStatus = document.getElementById("switchStatus");

    if (button.checked == true) {
        body.className = "light_gray_bg";
        navBar.className = "light_gray_bg";
        navAbout.className = "ash_black_txt";
        navSkills.className = "ash_black_txt";
        navEmail.className = "ash_black_txt";
        introText.className = "ash_black_txt";
        switchStatus.innerText = "LIGHT MODE";
        switchStatus.className = "blue";
    }

    else {
        body.className = "ash_black_bg";
        navBar.className = "ash_black_bg";
        navAbout.className = "light_gray_txt";
        navSkills.className = "light_gray_txt";
        navEmail.className = "light_gray_txt";
        introText.className = "light_gray_txt";
        switchStatus.innerText = "DARK MODE";
        switchStatus.className = "gray";
    }
}