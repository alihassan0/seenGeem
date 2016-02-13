var debug = function(ev,text){
  ev.preventDefault();
  console.log(text);
}
Template.signIn.events({
  "submit .form" : function(ev){
    debug(ev,"submit2");
    var email = ev.target.email.value;
    var password = ev.target.password.value;
    Meteor.loginWithPassword({email:email},password,function(err){
        if(err)
          console.log(email +" " + password + " " +err);
        else
        {
          console.log("welcome " + email);
          console.log( Meteor.userId() && Meteor.user() && Meteor.user().profile.image );
        }
    })
  }
});

Template.signIn.rendered = function() {
    $(document)
        .ready(function() {
            $('.ui.form')
                .form({
                    fields: {
                        email: {
                            identifier: 'email',
                            rules: [{
                                type: 'empty',
                                prompt: 'Please enter your e-mail'
                            }, {
                                type: 'email',
                                prompt: 'Please enter a valid e-mail'
                            }]
                        },
                        password: {
                            identifier: 'password',
                            rules: [{
                                type: 'empty',
                                prompt: 'Please enter your password'
                            }, {
                                type: 'length[6]',
                                prompt: 'Your password must be at least 6 characters'
                            }]
                        }
                    }
                });
        });
};