
async function getSong() {
    let songApi = await fetch('http://127.0.0.1:5500/songs/');
    let response = await songApi.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    ats = div.getElementsByTagName("a")

    let songs = [];
    for (let i = 0; i < ats.length; i++) {
        song = ats[i];
        if (song.href.endsWith(".mp3")) {
            songs.push(song);
        }
    }

    return songs
}
async function main() {
    songs = await getSong();
    console.log(songs);
    let playing = false; 
    const plays = document.getElementById("play");
    plays.addEventListener("click", () => {
        if (playing === false) {
            aud = new Audio(songs[0]);
            aud.play();
            playing = true;
            plays.innerHTML = '<img class="invert"  src="pause.svg" alt="">'

        } else {
            aud.pause();
            playing = false;
            plays.innerHTML = '<img class="invert"  src="play.svg" alt="">'
        }
    });
    

}
main()

