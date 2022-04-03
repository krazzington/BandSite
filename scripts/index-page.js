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


//FORM SECTION JS - CAN BE HTML


//must have a function called displayComment() that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.



//BUTTON CLICK
//event.preventDefault()

//
// const commentSection = document.createElement( 'ul' );
// commentSection.classList.add = ( 'conversation__commentSection' );
// commentSection.setAttribute( '#comments-list' );
// commentSection.appendChild( drawComments );
const formsSection = document.getElementById( 'formsSection' );

const printComments = [
    {
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: 'his is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: 'I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough. I sure hope 2021 is an improvement on 2020.'
    }
];

const displayComment = ( commentObject ) => {
    let listItem = document.createElement( 'li' );
        
    let nameNode = document.createElement( 'span' );
    let dateNode = document.createElement( 'span' );
    let commentNode = document.createElement( 'span' );

    nameNode.innerText = commentObject.name;
    dateNode.innerText = commentObject.date;
    commentNode.innerText = commentObject.comment;

    listItem.appendChild( nameNode );
    listItem.appendChild( dateNode );
    listItem.appendChild( commentNode );

    return listItem;
}

//Main renderer
let commentRender = ( comments ) => {

    //Comment list
    let unorderedList = document.querySelector( '#comments-list' ); 

    for (let i = 0; i < comments.length; i++) {
        
        let commentObject = comments[i];
        unorderedList.appendChild( displayComment( commentObject ) );
    }
}

const addComment = ( event ) => {
    event.preventDefault();

    let nameForm = document.getElementById( 'name-input' );
    let commentForm = document.getElementById( 'comment-input' );
    let todaysDate = new Date();

    let name = nameForm.value;
    nameForm.value = '';

    let comment = commentForm.value;
    commentForm.value = '';

    const commentObject = {
        name: name,
        date: todaysDate,
        comment: comment,
    }

    printComments.unshift( commentObject );
    commentRender ( printComments );
    
}

commentRender( printComments );

formsSection.addEventListener( 'submit', addComment );