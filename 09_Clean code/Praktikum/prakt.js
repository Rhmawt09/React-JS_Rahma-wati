// Tugas Clean Code
//Rahmawati

// Tugas Nomor 1 untuk React

class user {
    var id;
    var username;
    var password;
}

class userservice{
    user[] users = [];
    user[] getallusers () {
        return users ;
    }
    user getuserbyid(userid) {
        return this.users.filter(userid);

    }
}

// Penjelasan code diatas 
// code diatas dibuat tidak menggunakan ketentuan-ketentuan atau kebiasaan-kebiasaan yang disarankan.
//