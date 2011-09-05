/**
 * Show functions to be exported from the design doc.
 */

exports.blogposts_by_created = {
    map: function (doc) {
        if (doc.type === 'blogpost') {
            emit(doc.created, doc.title);
        }
    }
};

exports.example_view = {
    map: function (doc) {
        // this must be placed *inside* the map function
        var example = require('views/lib/example');
        if (doc.type === 'blogpost') {
            emit(doc._id, example.fn());
        }
    }
};

