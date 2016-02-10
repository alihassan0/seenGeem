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

  Template.question.helpers({
    answers: function () {
      return Answers.find({question_id : this._id});
    }
  });

	Template.question.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .deleteQ": function () {
      Questions.remove(this._id);
    },
    "click .deleteA": function () {
      Answers.remove(this._id);
    },
    "submit .answer": function () {
   		// Prevent default browser form submit
      event.preventDefault();

 	 	  console.log("btngan");
 	  	
      // Get value from form element
      var text = event.target.text.value;
 			
      // Insert a task into the collection
      Answers.insert({
        text: text,
        question_id : this._id,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    },
    "submit .answerbtn": function () {
   		// Prevent default browser form submit
      event.preventDefault();


 	  	
      // Get value from form element
      var text = event.target.text.value;
 			
      // Insert a task into the collection
      Answers.insert({
        text: text,
        question_id : this._id,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });

}