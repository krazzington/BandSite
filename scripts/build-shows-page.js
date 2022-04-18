const ticketbutton = document.createElement( 'div' );
ticketbutton.classList.add('shows__showRow--ticketbutton')

const gigDetailsAPI = 'https://project-1-api.herokuapp.com/showdates?api_key=b286c6ec-3de5-4598-9517-5a9617d60bd9';

  const showDivGenerator = ( showRows ) => {
    const dateInt = parseInt(showRows.date);
    const d = new Date(dateInt);
    const date = d.toLocaleString("en-US", {weekday: "short", month:"short", day: "numeric", year: "numeric"});
    

    //Create the base element
    const newShow = document.createElement( 'div' ); //show div
    newShow.classList.add( 'shows__showDiv' );

    //DATE DIVS
    const dateDiv = document.createElement( 'div' ); 
    dateDiv.classList.add( 'shows__dateDiv' ); 
    const dateHeaderDiv = document.createElement( 'div' );
    dateHeaderDiv.classList.add( 'shows__divHeaders', 'divHeaders' );
    dateHeaderDiv.innerText = 'date';
    const dateInfoDiv = document.createElement( 'div' );
    dateInfoDiv.innerText = date;
    dateInfoDiv.classList.add( 'shows__dateDiv--dateInfo' );
    dateDiv.appendChild( dateHeaderDiv );
    dateDiv.appendChild( dateInfoDiv );
    
    //VENUE DIVS
    const venueDiv = document.createElement( 'div' ); 
    venueDiv.classList.add( 'shows__venueDiv' );
    const venueHeaderDiv = document.createElement( 'div' );
    venueHeaderDiv.classList.add( 'shows__divHeaders' );
    venueHeaderDiv.innerText = 'venue';
    const venueInfoDiv = document.createElement( 'div' );
    venueInfoDiv.innerText = showRows.place;
    venueInfoDiv.classList.add( 'shows__venueDiv--venueInfo' );
    venueDiv.appendChild( venueHeaderDiv );
    venueDiv.appendChild( venueInfoDiv );

    //LOCATION DIVS
    const locationDiv = document.createElement( 'div' );
    locationDiv.classList.add( 'shows__locationDiv' );
    const locationHeaderDiv = document.createElement( 'div' );
    locationHeaderDiv.classList.add( 'shows__divHeaders' );
    locationHeaderDiv.innerText = 'location';
    const locationInfoDiv = document.createElement( 'div' );
    locationInfoDiv.innerText = showRows.location;
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
    ticketButtonInfoDiv.classList.add( 'shows__ticketButtonDiv--ticketButton' );
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
const showIntoTheRow = (  ) => {
    
    //Target node
    const showDestination = document.querySelector( '#showTable' );
        
    const axiosGet = axios.get(gigDetailsAPI).then(( response ) => {
        const gigArray = response.data;

    gigArray.forEach( ( gig ) => {
        const createShowDiv = document.createElement( 'div' );
        
        createShowDiv.appendChild( showDivGenerator( gig ) );
        showDestination.appendChild( createShowDiv );
        } );
    }).catch(console.log("An error has occurred"));
};

//Invoking my renderer
showIntoTheRow( gigDetailsAPI );


//Active Class
const activeClass = document.querySelectorAll( ".shows__showDiv" );

const rowActivated = (show) => {
    show.classList.add( "shows__showDiv--activeRow")
};


for(let i = 0; i < activeClass.length; i++){
    activeClass[i].addEventListener( 'click', function() { rowActivated(activeClass[i])})

}