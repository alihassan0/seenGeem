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

Docs = new Mongo.Collection("docs");
Docs.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  fileId: {
    type: String
  }
}));

Files = new FS.Collection("files", {
  stores: [new FS.Store.FileSystem("files", {path: "~/uploads"})]
});

Files.allow({
  download: function () {
    return true;
  },
  fetch: null
});

Docs.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  fileId: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "files"
      }
    }
  }
}));