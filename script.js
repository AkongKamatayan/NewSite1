var online = localStorage.getItem('bool');
var user = localStorage.getItem('username');


//user = variable name to get username from the client side

//Week 20 sleep

function processEvent(){
    console.log("Processing log in.");
    setTimeout(function(){
        timerDown();},1000          //delay the log in time to make resources generate.
    )
}

function timerDown(){
    var login = document.querySelector('.loginElement');
    var register = document.querySelector('.registerElement');
    var pfp = document.querySelector('.profilePic');
    var user = localStorage.getItem('username');
    var usermenu = document.querySelector('.dropdownContainer')

    pfp.style.display = 'block';
    register.style.display = 'none';
    login.style.display = 'none';
    usermenu.style.display = 'block';
    document.querySelector('.user').innerHTML = "Hello, " + user + "!";
    console.log("Successfull");
    
    try{
        alert("You have successfully logged in");
    }catch(error){
        console.error("An error occured", error.message);
    }finally{
        console.log("Finally block executed");
    }
}



if(online==='true'){
    processEvent();
}

    //Add new Video
    // Define a variable for the video things
    function uploadNewVideo() {
        var fileInput = document.getElementById('Video');
        var title = document.getElementById('VideoTitle').value;
        const file = fileInput.files[0];
        const videoURL = URL.createObjectURL(file);
        var VidDisc = document.getElementById('Video')

        // Get the reference to NewVideoContainer
        var NewVideoContainer = document.getElementById('newVideos');
    
        // Create a new div element with a video using template literals
        var dynamicContent = `
            <div class="VidContainer">
                <video src="${videoURL}"></video>
                <span>${title}</span>
            </div>
        `;
        
        // Append the HTML content to the end of NewVideoContainer
        NewVideoContainer.insertAdjacentHTML('beforeend', dynamicContent);
    
        // Add an event listener to the newly created video element
        var newVideoElement = NewVideoContainer.lastElementChild.querySelector('video');
        newVideoElement.addEventListener('click', function() {
            document.querySelectorAll('.VidContainer').forEach(Container => {
                Container.onclick = async () => {
                    const vid = Container.querySelector('video');
                    const source = vid.getAttribute('src');
    
                    document.querySelector('.VidOverlay').style.display = 'block';
                    document.querySelector('.CommentSection').style.display = 'block';
                    document.querySelector('.VidOverlay video').src = source;
                };
            });
        });
    
        document.querySelector('.UploadContainer').style.display = 'none';
        document.querySelector('.uploadCard').style.display = 'none';
        fileInput.value = '';
        title = '';
    }
    


    //Pop up video

        document.querySelectorAll('.VidContainer').forEach(Container => {
            Container.onclick = async () => {
                const vid = Container.querySelector('video');
                const source = vid.getAttribute('src');

                document.querySelector('.VidOverlay').style.display = 'block';
                document.querySelector('.CommentSection').style.display = 'block';
                document.querySelector('.VidOverlay video').src = source;
                
            };
        });
        console.log("Made by Max and sheji ur dads");

        document.querySelector('.VidOverlay div').onclick = () => {
            document.querySelector('.VidOverlay').style.display = 'none';
            document.querySelector('.CommentSection').style.display = 'none';
            document.querySelector('.VidOverlay video').pause();
        };

        //Upload

        document.querySelector('.dropdownEl1').onclick = () => {
            document.querySelector('.UploadContainer').style.display = 'block';
            document.querySelector('.uploadCard').style.display = 'block';
            
        }


        function closeUploadContainer(){
            document.querySelector('.UploadContainer').style.display = 'none';
            document.querySelector('.uploadCard').style.display = 'none';        
        }


        //Profile


        function logout(){
            localStorage.clear();
            location.reload();
        }


        //week 12 insure that user is logged in
        var user = {
            name: user,
            status: 'User',

            greet: function(){
                console.log("Hello " + this.name);
            }
        }


        //Week 13

        String.prototype.reverseText = function(){
            return this.split('').reverse().join('');
        };

        var discriptionReverse = "This is a discription";

        document.getElementById('discriptionLower').innerHTML = discriptionReverse.reverseText();



        //Week 14
        //Locale storage

        //Week 15
        //The use of var, const. global and local vars


        //Week 16

        var welcome = {
            greet:function(username){
                console.log("Welcome" + username);
            }
        };

        var greetUser = welcome.greet(user);
        console.log(greetUser);


        //Week 19 Risky codes



        //Week 1 doesn't work requires internet for the API to work.

/*
        $('#signOut').click(function(){
            localStorage.clear();
            location.reload();
        });
*/



        //Week 9

/*
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.responseText(xhr.responseText);
    }
};

xhr.open("GET", "https://api.example.com/data", true);
xhr.send();

*/

/* 
$.ajax({
    url:"https://youtube.com/",
    method: "GET",
    dataType: "json",
    success: function(data){
        console.log(data);
    },
    error:function(error){
        console.log(error);
    }
})
*/