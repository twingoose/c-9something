function logout()
{
    localStorage.removeItem("username"); 
    localStorage.removeItem("roomname"); 
    window.location ="kwitter_room.html"; 
}

function addroom() {
     room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({  purpose : "adding room name"    });
   localStorage.setitem("room_name", room_name);
     window_location = "kwitter_room.html"; 
    }