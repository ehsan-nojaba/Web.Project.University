let title = "";
function showVideo(item){
    title = document.getElementById(`title${item}`).innerText;
    document.getElementById("video__title").innerText = title;
    let videoPlay = document.getElementById("show__video");
    videoPlay.src = `../../Videos/video${item}.mp4`;
    videoPlay.load();
}