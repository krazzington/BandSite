//must have a function called displayComment() that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.

//No template literals should be used. All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML

// You must use an HTML Form with the following functionality:
// That submits using the addEventListener
// Prevents the page from reloading when submitting a new comment
// Constructs a new comment object
// Pushes a new comment object to an array of comments
// Clears all comments from the page
// Re-renders to the page all comments from the comment array
// Clears the input fields after submitting a new comment

const commentSection = document.createElement( 'div' );
commentSection.classList.add( 'conversation__formsSection' );

const displayPic = document.createElement( 'div' ); //This appends to commentSection
displayPic.classList.add = ( 'conversation__formsSection--displayPic');

const nameDiv = document.createElement( 'div' ); //This appends to commentSection
nameDiv.classList.add = ( 'conversation__nameDiv' );
const nameDivHeader = document.createElement( 'div' );//This appends to nameDiv
// *************FORM goes here

const commentDiv = document.createElement( 'div' ); //This appends to commentSection
commentDiv.classList.add = ( 'conversation__commentDiv' );
const commentDivHeader = document.createElement( 'div' );
// *************FORM goes here

const commentButton = document.creatElement( 'div' ); //This appends to commentSection
commentButton.innerText = document.createElement( 'div' );

