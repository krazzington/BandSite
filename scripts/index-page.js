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

const commentsAPI = 'https://project-1-api.herokuapp.com/comments?api_key=55b535b7-04a6-4cf7-bc79-32506c08e2cf';



// let axiosGet = axios.get(commentsAPI).then(response => {
//   console.log(response.data);
// });

//creates the div for the comments section - commentObject is a placeholder
const displayComment = ( commentObject ) => {
    //creates the div for the above function and gives it a class
    let listItem = document.createElement( 'div' );
    listItem.classList.add( 'postedCommentSection' );
    
    //creates an image div section to place the image and gives it a class
    let imageDiv = document.createElement( 'div' );
    imageDiv.classList.add( 'postedCommentSection__imageDiv' );
    //creates an comment div section to place the image and gives it a class
    let mainDiv = document.createElement( 'div' );
    mainDiv.classList.add( 'postedCommentSection__mainDiv' );

    //creates image for the posted comments and gives it a class
    let imageNode = document.createElement( 'div' );
    imageNode.classList.add( 'postedCommentSection__imageDiv--imageNode' )
    //creates name section for the posted comments and gives it a class
    let nameNode = document.createElement( 'div' );
    nameNode.classList.add( 'postedCommentSection__mainDiv--nameNode' )
    //creates date section for the posted comments and gives it a class
    let dateNode = document.createElement( 'div' );
    dateNode.classList.add( 'postedCommentSection__dateNode' )
    //creates comment section for the posted comments and gives it a class
    let commentNode = document.createElement( 'div' );
    commentNode.classList.add( 'postedCommentSection__mainDiv--commentNode' )

    //plugs the text into the name node from the called function
    nameNode.innerText = commentObject.name;
    //plugs the text into the date nodes from the called function

    dateNode.innerText = commentObject.timestamp;
    //plugs the comment into the comment nodes from the called function
    commentNode.innerText = commentObject.comment;

    //plugs the image for the posted comments into the imageDiv
    imageDiv.appendChild( imageNode );

    //plugs the nodes into the main div with class .postedCommentSection__mainDiv
    mainDiv.appendChild( nameNode );
    mainDiv.appendChild( commentNode );

    //plugs imageDiv and mainDiv into the first div called in the function
    listItem.appendChild( mainDiv );
    listItem.appendChild( dateNode );
    listItem.appendChild( imageDiv );

    return listItem;
    
}

//Main renderer to send the comments to the page
let commentRender = ( comments ) => {

    //Comment list is on html page
    let unorderedList = document.querySelector( '#comments-list' ); 
    //retreiving comments from axios as commentAPI
    const axiosGet = axios.get(commentsAPI).then(response => {
    console.log(response);
    const array = response.data;

array.sort((a, b) => b.timestamp - a.timestamp)

for (let i = 0; 1 < array.length; i++) {
	let commentObject = array[i];
	unorderedList.appendChild( displayComment ( commentObject ));
}

    //loops through response.data retreived from commentAPI
    // for (let i = 0; i < response.data.length; i++) {
        
    //     //commentObject refers to the first function (displayComment) and
    //     let commentObject = response.data[i];
    //     unorderedList.appendChild( displayComment( commentObject ) );
    //     }
    });
}

const addComment = ( event ) => {
    event.preventDefault();

    let unorderedList = document.querySelector( '#comments-list' );
    let nameForm = document.getElementById( 'name-input' );
    let commentForm = document.getElementById( 'comment-input' );
    let todaysDate = new Date();

    let name = nameForm.value;
    nameForm.value = '';

    let comment = commentForm.value;
    commentForm.value = '';

    const commentObject = {
        name: name,
        //date: todaysDate,
        comment: comment,
    }

    
    axios.post(commentsAPI, commentObject )
.then((res) => console.log('res', res))
.catch((err) => console.log('error', err));


    //commentObject.classList.add('postedCommentSection__mainDiv--commentNode');
    // const axiosPost = axios.post(commentsAPI);
    // axiosPost( commentObject ).then((response) => {
    //     console.log(response);
    // }).catch((error) => console.log(error));//----------------------------------needs to post to API, then call the next two functions
    // ;
    // console.log(axiosPost);
    unorderedList.innerHTML = ''; 
    commentRender ( axiosPost );

}

commentRender( commentsAPI );

formsSection.addEventListener( 'submit', addComment );