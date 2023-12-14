// create a notepad file reader

function loadFile() {
    return new Promise((resolve, reject) => {
        const fileInput = document.getElementById('fileInput');

        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.readAsText(file);

            reader.onload = function (content) {
                document.getElementById('textInput').value = content.target.result;
            };

        } else {
            reject('No file selected');
        }
    })
}

function saveFile() {
    const textToSave = document.getElementById('textInput').value;
    const blob = new Blob([textToSave], {type: 'text/plain'});
    const fileName = prompt('Enter file name: ', 'note.txt');

    if (fileName) {
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = fileName;
        downloadLink.style.display = 'block';
    }
}