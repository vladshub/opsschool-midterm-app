// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Xmas",
  url: '/xmas/:name/:from',
  fields: [
    { name: 'Name', field: 'name'},
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/xmas/:name/:from', function(req, res) {
      const message = `Merry Fucking Christmas, ${req.params.name}.`;
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};