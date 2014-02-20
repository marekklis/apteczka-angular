apteczka.service('UserModel', function ($log) {
    this.signIn = function (email, password) {
        localStorage.email = email;
        localStorage.password = password;
    }
    this.isSignedIn = function () {
        return localStorage.email !== '';
    }
    this.signOut = function () {
        localStorage.email = '';
        localStorage.password = '';
    }

});
