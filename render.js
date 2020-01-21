var fs = require("fs");

function mergeValues(values, content) {
    //Cycle over the keys
      //Replace all {{key}} with the value from the values object.
    for(var key in values) {
        content = content.replace("{{" + key + "}}", values[key]);
    }
    //return merge content
    return content;
}

function view(templateName, values, response) {
    //read from the template file

 
    var fileContents = fs.readFileSync("./views/" + templateName + ".html", {encoding: "utf8"}).toString();
    fileContents = mergeValues(values, fileContents);
    response.write(fileContents);
};
  
module.exports.view = view;
//How to read from files in node. 
