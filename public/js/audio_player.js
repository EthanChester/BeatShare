const playSong = (title, filename, filetype, id) => {
    const current = document.getElementById("currentTrack");
    current.src = "./uploads/" + filename;
    current.play()
    current.type = filetype;
    document.getElementById("audioPlayer_songTitle").textContent = title;
    fetch('/get-image-for-song/' + id)
    .then(response => response.text())
    .then(image => {
        const img = document.getElementById("currentImage")
        img.src = '../uploads/' + image;
        img.alt = title;
    })
}
