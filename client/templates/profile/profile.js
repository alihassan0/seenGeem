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
                        "profile.image": "" + fileObj._id
                    };
                    console.log(imagesURL);
                    Meteor.users.update(userId, {
                        $set: imagesURL
                    });
                }
            });
        });
    }
});
Template.imageShow.helpers({
    image: function() {
        //console.log(Images.findOne({"_id" : Meteor.user().profile.image}));
        return Images.findOne({
            "_id": Meteor.user().profile.image
        }); // Where Images is an FS.Collection instance
    }
});
