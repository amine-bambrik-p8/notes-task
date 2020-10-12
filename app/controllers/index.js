const notesRouter = require("./notes"); 
const historyRouter = require('./history');
function setup(app){
    app.use("/notes",notesRouter);
    app.use("/history",historyRouter);
}
module.exports = setup;