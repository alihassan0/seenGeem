Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    questions: function () {
      return Questions.find({});
    },
    answers: function () {
      return Answers.find({});
    }
  });

  Template.body.events({
    "submit .new-question": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 	  console.log("sad");
      // Get value from form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Questions.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });





}