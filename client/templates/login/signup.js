var debug = function(ev, text) {
    ev.preventDefault();
    console.log(text);

}
Template.signUp.events({
    "submit form": function(ev) {
        debug(ev, "submit2");
        var firstName = ev.target.fname.value;
        var lastName = ev.target.lname.value;
        var email = ev.target.email.value;
        var password = ev.target.pass.value;
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                firstName: firstName,
                lastName: lastName
            }
        }, function(err) {
            if (err) {
                console.log(password + " " + email + " " + err);
            }
        })
    },
});