var debug = function(ev, text) {
    ev.preventDefault();
    console.log(text);

}
Template.signUp.events({
    "submit form": function(ev) {
        debug(ev, "submit2");
        var firstName = ev.target.firstname.value;
        var lastName = ev.target.lastname.value;
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


Template.signUp.rendered = function() {
    $('.ui.form').form({
        fields: {
            firstname: {
                identifier: 'firstname',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter your full name'
                }]
            },
            lastname: {
                identifier: 'lastname',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter your full name'
                }]
            },
            haltuser: {
                identifier: 'email',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter an email address'
                }, {
                    type: 'email',
                    prompt: 'Please enter your email address'
                }]
            },
            haltpass: {
                identifier: 'pass',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a password'
                }, {
                    type: 'length[6]',
                    prompt: 'Please enter  a password of length greater than 6 characters'
                }]
            },
            haltpassa: {
                identifier: 'repass',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a password'
                }, {
                    type: 'length[6]',
                    prompt: 'Please enter  a password of length greater than 6 characters'
                }, {
                    type: 'match[pass]',
                    prompt: 'The passwords should match'
                }]
            },
            terms: {
                identifier: 'terms',
                rules: [{
                    type: 'checked',
                    prompt: 'You need to agree to our terms'
                }]
            },
        }
    });
    $('.ui.checkbox').checkbox();
};