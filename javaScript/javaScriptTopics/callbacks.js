//Function1
function loginuser(email, password, callback) {
    setTimeout(() => {
        callback({ userEmail: email });
    }, 2000)
}
//Function2
function userVideos(email, callback) {
    setTimeout(() => {
        callback(["video1,video2, video3"]);
    }, 2000)
}
//Function3
function videoDetails(callback) {
    setTimeout(() => {
        callback("The detail for first video is xyz");
    }, 2000);
}
//Callbacks
loginuser("rohit.mudaliar@ril.com", "rohit1234", (user) => {
    setTimeout(() => {
        console.log("start");
    }, 1000);
    setTimeout(() => {
        console.log(user);
    }, 2000);

    userVideos(user.userEmail, (videos) => {
        setTimeout(() => {
            console.log(videos);
        }, 3000);
    })

    videoDetails((details) => {
        setTimeout(() => {
            console.log(details);
        }, 4000);
        setTimeout(() => {
            console.log("End");
        }, 5000);
    })
});


