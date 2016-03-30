if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.startup(function() {
    AutoForm.setDefaultTemplate("semanticUI");
  });
  
  Template.home.helpers({
    questions: function() {
      return Questions.find({});
    },
    answers: function() {
      return Answers.find({});
    }
  });


  Template.home.events({
    "submit .new-question": function(event) {
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

  Template.question.created = function() {
    // counter starts at 0
    this.hide = new ReactiveVar(false);
    this.hide.set(false);
  };

  Template.question.helpers({
    answers: function() {
      return Answers.find({
        question_id: this._id
      });
    },
    hide: function() {
      return Template.instance().hide.get();
    }
  });

  Template.question.events({
    "click .toggle-checked": function() {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {
          checked: !this.checked
        }
      });
    },
    "click .show-more": function(e) {
      Template.instance().hide.set(!Template.instance().hide.get());
      if (Template.instance().hide.get())
        $(e.target).text("show less");
      else
        $(e.target).text("show More");


    },
    "click .deleteQ": function() {
      Questions.remove(this._id);
    },
    "click .deleteA": function() {
      Answers.remove(this._id);
    },
    "submit .answer": function() {
      // Prevent default browser form submit
      event.preventDefault();

      console.log("btngan");

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Answers.insert({
        text: text,
        question_id: this._id,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
    },
    "submit .answerbtn": function() {
      // Prevent default browser form submit
      event.preventDefault();



      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Answers.insert({
        text: text,
        question_id: this._id,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
    }
  });

}