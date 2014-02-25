define(['apteczka'],
    function (apteczka) {
        apteczka.service('UserModel', function () {
            this.signIn = function (email, password) {
                localStorage.email = email;
                localStorage.password = password;
            }
            this.isSignedIn = function () {
                if (localStorage.email) {
                    return true;
                }
                return false;
            }
            this.signOut = function () {
                localStorage.email = '';
                localStorage.password = '';
            }

        });
    }
);
