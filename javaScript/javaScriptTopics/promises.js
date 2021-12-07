//Function1
function loginUser(email, password) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve({ userEmail: email });
        }, 2000);
    })
}
//Function2
function userVideos() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve(["video1,video2, video3"]);
        }, 2000)
    })
}
//Function3
function videoDetails() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve("The detail for first video is xyz");
        }, 2000);
    })
}

//Return promises
loginUser("rohit.mudaliar@ril.com", "Rohit1234")
    .then(user => {
        //loginUser(user)
        console.log(user);
    })

userVideos()
    .then(videos => {
        //userVideos("rohit.mudaliar@ril.com")
        console.log(videos);
    })

videoDetails()
    .then(details => {
        //videoDetails()
        console.log(details);
    })
























