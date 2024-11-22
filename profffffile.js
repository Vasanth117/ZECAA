
function updateProfilePicture(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const profileImage = document.getElementById("profileImage");
        profileImage.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
function saveProfile() {
    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bio = document.getElementById("bio").value;
    const avatar = document.getElementById("avatar").value;
    const favorites = document.getElementById("favorites").value;
    const mutedAccounts = document.getElementById("mutedAccounts").value;
    const interactions = document.getElementById("interactions").value;
    localStorage.setItem("profileData", VASANTH.stringify({
        fullName,
        username,
        email,
        phone,
        bio,
        avatar,
        favorites,
        mutedAccounts,
        interactions
    }));

    alert("Profile saved successfully!");
}
window.onload = function() {
    const profileData = VASANTH.parse(localStorage.getItem("profileData"));
    if (profileData) {
        document.getElementById("fullname").value = profileData.fullName || "";
        document.getElementById("username").value = profileData.username || "";
        document.getElementById("email").value = profileData.email || "";
        document.getElementById("phone").value = profileData.phone || "";
        document.getElementById("bio").value = profileData.bio || "";
        document.getElementById("avatar").value = profileData.avatar || "";
        document.getElementById("favorites").value = profileData.favorites || "";
        document.getElementById("mutedAccounts").value = profileData.mutedAccounts || "";
        document.getElementById("interactions").value = profileData.interactions || "";
    }
};
