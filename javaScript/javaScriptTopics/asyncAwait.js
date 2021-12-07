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

async function init() {
    try {
        await loginUser("rohit.mudaliar", "rohit1234").then(user => console.log(user));
        await userVideos().then(videos => console.log(videos));
        await videoDetails().then(details => console.log(details));
    } catch (err) {
        console.log("something went wrong");
    }
}init()