// The individual rows of the Shows table need to have a hover state applied to them when a cursor is hovering over the table 
// row, as per style guide. This can be done by utilizing a pseudo class within your Sass.
// Additionally, clicking on an individual row should make that row "selected" or "active", applying a modifier
// CSS class via JavaScript. Utilize your knowledge of both JavaScript and Sass to accomplish this.




const ticketbutton = document.createElement( 'div' );
ticketbutton.classList.add('shows__showRow--ticketbutton')

const gigDetailsAPI = 'https://project-1-api.herokuapp.com/showdates?api_key=b286c6ec-3de5-4598-9517-5a9617d60bd9';

// let axiosGet = axios.get(gigDetailsAPI).then(response => {
//     console.log(response.data);
//   });

  const showDivGenerator = ( showRows ) => {
    

    //Create the base element
    const newShow = document.createElement( 'div' ); //show div
    newShow.classList.add( 'shows__showDiv' );

    //DATE DIVS
    const dateDiv = document.createElement( 'div' ); // date div in the show div --- this should own the header and date info
    dateDiv.classList.add( 'shows__dateDiv' ); // this adds the class to the date info
    const dateHeaderDiv = document.createElement( 'div' );
    dateHeaderDiv.classList.add( 'shows__divHeaders', 'divHeaders' );
    dateHeaderDiv.innerText = 'date';
    const dateInfoDiv = document.createElement( 'div' );
    dateInfoDiv.innerText = showRows.Date;
    dateInfoDiv.classList.add( 'shows__dateDiv--dateInfo' );
    dateDiv.appendChild( dateHeaderDiv );
    dateDiv.appendChild( dateInfoDiv );
    
    //VENUE DIVS
    const venueDiv = document.createElement( 'div' ); // date div in the show div --- this should own the header and date info
    venueDiv.classList.add( 'shows__dateDiv' ); // this adds the class to the date info
    const venueHeaderDiv = document.createElement( 'div' );
    venueHeaderDiv.classList.add( 'shows__divHeaders' );
    venueHeaderDiv.innerText = 'venue';
    const venueInfoDiv = document.createElement( 'div' );
    venueInfoDiv.innerText = showRows.Venue;
    venueInfoDiv.classList.add( 'shows__venueDiv--venueInfo' );
    venueDiv.appendChild( venueHeaderDiv );
    venueDiv.appendChild( venueInfoDiv );

    //LOCATION DIVS
    const locationDiv = document.createElement( 'div' ); // date div in the show div --- this should own the header and date info
    locationDiv.classList.add( 'shows__locationDiv' ); // this adds the class to the date info
    const locationHeaderDiv = document.createElement( 'div' );
    locationHeaderDiv.classList.add( 'shows__divHeaders' );
    locationHeaderDiv.innerText = 'location';
    const locationInfoDiv = document.createElement( 'div' );
    locationInfoDiv.innerText = showRows.Location;
    locationInfoDiv.classList.add( 'shows__locationDiv--locationInfo' );
    locationDiv.appendChild( locationHeaderDiv );
    locationDiv.appendChild( locationInfoDiv );

    //TICKET BUTTON
    const ticketButtonDiv = document.createElement( 'div' );
    ticketButtonDiv.classList.add( 'shows__ticketButtonDiv' );
    const ticketButtonHeaderDiv = document.createElement( 'div' );
    ticketButtonHeaderDiv.classList.add( 'shows__divHeaders' );
    ticketButtonHeaderDiv.innerText = '';
    const ticketButtonInfoDiv = document.createElement( 'div' );
    ticketButtonInfoDiv.innerText = 'buy tickets';
    ticketButtonInfoDiv.classList.add( 'shows__ticketButtonDiv--ticketButtonInfo' );
    ticketButtonDiv.appendChild( ticketButtonHeaderDiv );
    ticketButtonDiv.appendChild( ticketButtonInfoDiv );

    //appends to the newShow Div
    newShow.appendChild( dateDiv ); 
    newShow.appendChild( venueDiv );
    newShow.appendChild( locationDiv );
    newShow.appendChild( ticketButtonDiv );
    
    return newShow;
};

//Main renderer
const showIntoTheRow = ( gigArray ) => {

    //Target node
    const showDestination = document.querySelector( '#showTable' );
    
    const axiosGet = axios.get(gigDetailsAPI).then((gig) => {

    gigArray.forEach( ( gig ) => {
        const createShowDiv = document.createElement( 'div' );
        
        createShowDiv.appendChild( showDivGenerator( gig ) );
        showDestination.appendChild( createShowDiv );
        } );
    }).catch(document.write("An error has occurred"));
};

//Invoking my renderer

showIntoTheRow( gigDetailsAPI );

// querySelector(row);
// addEventListener(click ,function)
// onclick, add class
// if()

// the function needs to add a class

//Active Class

const activeClass = document.querySelectorAll( ".shows__showDiv" );

const rowActivated = (show) => {
    show.classList.add( "shows__showDiv--activeRow")
};


for(let i = 0; i < activeClass.length; i++){
    activeClass[i].addEventListener( 'click', function() { rowActivated(activeClass[i])})

}
// console.log(activeClass);

// let showsSectionLog = document.getElementById( 'showTable' );
// console.log(showsSectionLog);