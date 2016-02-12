Template.profile.events({
    'change.myFileInput': function(event, template) {
        console.log("something happened");
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function(err, fileObj) {
                if (err) {
                    console.log(err);
                    // handle error
                } else {
                    // handle success depending what you need to do
                    var userId = Meteor.userId();
                    var imagesURL = {
                        "profile.image": "public/files/images/x.jpg" //+ fileObj._id
                    };
                    console.log(imagesURL);
                    Meteor.users.update(userId, {
                        $set: imagesURL
                    });
                }
            });
        });
    }
})

Template.imageView.helpers({
  images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  }
});