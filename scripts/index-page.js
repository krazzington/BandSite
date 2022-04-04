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


const formsSection = document.getElementById( 'formsSection' );

const printComments = [
    {
        pic: '',//This is part of the test
        name: 'Connor Walton',
        date: '02/17/2021',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        pic: '',//This is part of the test
        name: 'Emilie Beach',
        date: '01/09/2021',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        pic: '',//This is part of the test
        name: 'Miles Acosta',
        date: '12/20/2020',
        comment: 'I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough. I sure hope 2021 is an improvement on 2020.'
    }
];

const displayComment = ( commentObject ) => {
    let listItem = document.createElement( 'div' );
    listItem.classList.add( 'postedCommentSection' );
    
    let imageNode = document.createElement( 'span' ); //This is a test    -------   must be img tag
    imageNode.classList.add( 'postedCommentSection__imageNodeSpan' )
    let nameNode = document.createElement( 'div' );
    nameNode.classList.add( 'postedCommentSection__mainNode--nameNode' )
    let dateNode = document.createElement( 'div' );
    dateNode.classList.add( 'postedCommentSection__mainNode--dateNode' )
    let commentNode = document.createElement( 'div' );
    commentNode.classList.add( 'postedCommentSection__mainNode--commentNode' )

    imageNode.innerText = commentObject.pic; //This is part of the test 
    nameNode.innerText = commentObject.name;
    dateNode.innerText = commentObject.date;
    commentNode.innerText = commentObject.comment;

    listItem.appendChild( imageNode ); //This is part of the test
    listItem.appendChild( nameNode );
    listItem.appendChild( dateNode );
    listItem.appendChild( commentNode );

    return listItem;
}

//Main renderer
let commentRender = ( comments ) => {

    //Comment list
    let unorderedList = document.querySelector( '#comments-list' ); 
                                // let divs = unorderedList.getElementsByTagName("div");
                                //     if(divs != null)
                                //     {
       //Left in for sprint 3   //         for(let v = divs.length - 1; v >= 0; v--)
                                //         {
                                //             parent.removeChild(divs[0]);
                                //         }
                                //     }​
    for (let i = 0; i < comments.length; i++) {
        
        let commentObject = comments[i];
        unorderedList.appendChild( displayComment( commentObject ) );
    }
}

const addComment = ( event ) => {
    event.preventDefault();

    let picForm = document.getElementById( 'pic-input' ); //This is part of the test
    let nameForm = document.getElementById( 'name-input' );
    let commentForm = document.getElementById( 'comment-input' );
    let todaysDate = new Date();

    let pic = picForm.value; //This is part of the test
    picForm.value = '';

    let name = nameForm.value;
    nameForm.value = '';

    let comment = commentForm.value;
    commentForm.value = '';

    const commentObject = {
        pic: pic,
        name: name,
        date: todaysDate,
        comment: comment,
    }

    commentObject.classList.add();

    printComments.unshift( commentObject );
    commentRender ( printComments );
    
}

commentRender( printComments );

formsSection.addEventListener( 'submit', addComment );