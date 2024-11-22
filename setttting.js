
function togglePrivacy() {
    const privacyOptions = document.getElementById("privacyOptions");
    privacyOptions.style.display = privacyOptions.style.display === "none" ? "block" : "none";
}
function toggleLanguage() {
    const languageOptions = document.getElementById("languageOptions");
    languageOptions.style.display = languageOptions.style.display === "none" ? "block" : "none";
}
function toggleAccountTypes() {
    const accountTypeOptions = document.getElementById("accountTypeOptions");
    accountTypeOptions.style.display = accountTypeOptions.style.display === "none" ? "block" : "none";
}
function togglePrivacyCenter() {
    const privacyCenterOptions = document.getElementById("privacyCenterOptions");
    privacyCenterOptions.style.display = privacyCenterOptions.style.display === "none" ? "block" : "none";
}
function toggleAccountStatus() {
    const accountStatusOptions = document.getElementById("accountStatusOptions");
    accountStatusOptions.style.display = accountStatusOptions.style.display === "none" ? "block" : "none";
}
function toggleAbout() {
    const aboutOptions = document.getElementById("aboutOptions");
    aboutOptions.style.display = aboutOptions.style.display === "none" ? "block" : "none";
}
function toggleHelp() {
    const helpOptions = document.getElementById("helpOptions");
    helpOptions.style.display = helpOptions.style.display === "none" ? "block" : "none";
}
function addAccount() {
    alert("Redirecting to Add Account page...");
}
function logout() {
    alert("You have been logged out.");
}
