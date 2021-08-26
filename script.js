// Next lines deal with time.
//This line creates a new object that reads the time.
const d = new Date();
//Converts the time into text and inserts it into the current day element.
$("#currentDay").text(d.toLocaleDateString());
//Finds the row with the id currentDay and dynamically adds the class current.
//This also triggers the css to add the coloring.
$("#_"+d.getHours()).addClass("Current");

//Next lines deal with the save button.
//This means that when any button in the html is clicked the saveAppointment function will run.
$("button").on("click",saveAppointment);
function saveAppointment(){
    const text= $(this).prev().val();
    
    // "this" is the button just clicked and val is reading the value of
    //the text area.
    //this.parent is the div of the row which is the parent of this.
    const id= $(this).parent().attr("id");
    //localStorage.setItem stores the text inside the row into local storage.
    //localStorage only saves strings
    localStorage.setItem(id,text);
}
//This next section is about retrieving data from local storage.
//$(".row") selects every row in the html, .each is like a loop that loops
//through every row and runs the getAppointment function.
$(".row").each(getAppointment);
function getAppointment(){
    const id= $(this).attr("id");
    const text= localStorage.getItem(id);
    //If there is text to work with, the text will be inserted into the ext area
    //If there is no text, it will be ignored.
    if (text){
        //$(this) refers to the row and .find refers to the elements within the row.
        //.val(text) will assign the value as the text.
      $(this).find("textarea").val(text);  
    }
}
