Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});
Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});