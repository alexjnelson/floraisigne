document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
   
});

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const horseRef = storageRef.child('y.png');

    const file = files.item(0);

    task.then(snapshot => {
        console.log(snapshot)
        const url = snapshot.downloadURL
        document.querySelector('#imgUpload').setAttribute('src', url)
    })


}