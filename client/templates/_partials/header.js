Template.header.events({
  "click .logout" : function(ev){
    Accounts.logout();
    console.log("signed out");
    Router.go('/');
  }
});