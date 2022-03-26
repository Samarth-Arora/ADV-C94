

var firebaseConfig = {
      apiKey: "AIzaSyCNbzrp81beOwh9CEBfA1m5doVXjhaDALY",
      authDomain: "chat-project-e10c9.firebaseapp.com",
      databaseURL: "https://chat-project-e10c9-default-rtdb.firebaseio.com",
      projectId: "chat-project-e10c9",
      storageBucket: "chat-project-e10c9.appspot.com",
      messagingSenderId: "744395161689",
      appId: "1:744395161689:web:e635baf88eb3338125b148",
      measurementId: "G-RVS2ZZ2WVN"
    };
    

    firebase.initializeApp(firebaseConfig);
  
    function addUser()
    {
  
      user_name = localStorage.getItem("user_name").value;
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
    }
    
    function addRoom()
    {
  
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
      
    }
  
    function getData()
    {
  
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names=childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
          });
          });
  
          }
  
  getData();
   function redirectToRoomName(name)
  
   {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
  
   }
  
   function logout()
   {
  
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
   }
  