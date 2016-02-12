var debug = function(ev,text){
  ev.preventDefault();
  console.log(text);

}
Template.signIn.events({
  "submit .form" : function(ev){
    debug(ev,"submit2");
    var userName = ev.target.email.value;
    var password = ev.target.password.value;
    Meteor.loginWithPassword(userName,password,function(err){
        if(err)
        {
          console.log(userName +" " + password + " " +err);
        }
    })
  },
  
});