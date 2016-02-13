Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
    name: "home"
});

Router.route("/profile", {
    name: "profile",
    waitOn: function() {
        //return Meteor.subscribe(‘images’)
    },
    action: function() {
        if (this.ready())
            this.render('profile');
        else
            this.render('loading');
    },
    data: function() {
        return Meteor.userId() && Meteor.user() && Meteor.user().profile;
    }
});
Router.route("/signIn", {
    name: "signIn"
});
Router.route("/signUp", {
    name: "signUp"
});
Router.route("/question/:id", {
    name: "questionShow",
    data: function() {
        return "x";
    }
});