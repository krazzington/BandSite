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


//FORM SECTION
const createConversationSection = (() => {

const commentFormSection = document.createElement( 'div' );
commentFormSection.classList.add( 'conversation__formsSection' );

const displayPic = document.createElement( 'div' ); //This appends to commentFormSection
displayPic.classList.add = ( 'conversation__formsSection--displayPic');

const nameDiv = document.createElement( 'div' ); //This appends to commentFormSection
nameDiv.classList.add = ( 'conversation__nameDiv' );

const nameDivHeader = document.createElement( 'div' );//This appends to nameDiv
nameDivHeader.classList.add = ( 'conversation__commentDiv--header' );
const nameDivForm = document.createElement( 'form' );//This appends to nameDiv
nameDivForm.classList.add = ( 'conversation__commentDiv--nameForm' );

nameDiv.appendChild( nameDivHeader );
nameDiv.appendChild( nameDivForm );

const commentDiv = document.createElement( 'div' ); //This appends to commentFormSection
commentDiv.classList.add = ( 'conversation__commentDiv' );

const commentDivHeader = document.createElement( 'div' );//This appends to the commentDiv
commentDivHeader.classList.add = ( 'conversation__commentDiv--header' );
const commentDivForm = document.createElement( 'form' );//This appends to the commentDiv
commentDivForm.classList.add = ( 'conversation__commentDiv--commentForm' );

commentDiv.appendChild( commentDivHeader );
commentDiv.appendChild( commentDivForm );

commentFormSection.appendChild( displayPic );
commentFormSection.appendChild( nameDiv );
commentFormSection.appendChild( commentDiv );

const commentButton = document.creatElement( 'div' ); //This appends to commentFormSection
commentButton.classList.add = ( 'conversation__commentButton' );
commentButton.innerText = 'comment';

commentFormSection.appendChild( commentButton );
})


const commentSection = document.createElement( 'div' );
commentSection.classList.add = ( 'conversation__commentSection' );
commentSection.setAttribute( '#comments-list' );
commentSection.appendChild( drawComments );


let comments = [
    {
        name: 'Joe',
        comment: 'Love this band, moar music!'
    },
    {
        name: 'Trolly McBad',
        comment: 'I hate this band!'
    },
    {
        name: 'Bubba',
        comment: 'lorem ipsum'
    }
];

//Main renderer
let drawComments = () => {

    //Comment list
    let unorderedList = document.querySelector('#comments-list'); 

    for (let i = 0; i < comments.length; i++) {
        let commentObject = comments[i];
        let listItem = document.createElement('li');
        
        let nameNode = document.createElement('span');
        let commentNode = document.createElement('span');

        nameNode.innerText = commentObject.name;
        commentNode.innerText = commentObject.comment;

        listItem.appendChild(nameNode);
        listItem.appendChild(commentNode);

        unorderedList.appendChild(listItem);
        console.log(unorderedList);
    }
}

drawComments();
