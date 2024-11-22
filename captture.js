
function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = ''; 
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}


function submitCapture() {
    const description = document.getElementById('taskDescription').value;
    const fileInput = document.getElementById('photoUpload');
    const file = fileInput.files[0];

    if (!file || !description) {
        alert("Please add a photo and description before submitting.");
        return;
    }

   
    console.log("Photo:", file);
    console.log("Description:", description);

    alert("Your capture has been submitted!");
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('taskDescription').value = '';
    fileInput.value = '';
}
