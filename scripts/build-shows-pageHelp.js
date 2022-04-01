let gigDetails = [
    { Date : 'Mon Sept 06 2021', Venue : 'Ronald Lane', Location : 'San Francisco, CA', TicketText : 'tickets button' },
    { Date : 'Tue Sept 21 2021', Venue : 'Pier 3 East', Location : 'San Francisco, CA', TicketText : 'tickets button' },
    { Date : 'Fri Oct 15 2021', Venue : 'View Lounge', Location : 'San Francisco, CA', TicketText : 'tickets button' },
    { Date : 'Sat Nov 06 2021', Venue : 'Hyatt Agency', Location : 'San Francisco, CA', TicketText : 'tickets button' },
    { Date : 'Fri Nov 26 2021', Venue : 'Moscow Center', Location : 'San Francisco, CA', TicketText : 'tickets button' },
    { Date : 'Wed Dec 15 2021', Venue : 'Press Club', Location : 'San Francisco, CA', TicketText : 'tickets button' }
];



let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);


// Adding the entire table to the body tag
document.getElementById('showTable').appendChild(table);
//Start of Table header section
let row1 = document.createElement('tr');
let heading1 = document.createElement('th');
heading1.innerText = "Date";
let heading2 = document.createElement('th');
heading2.innerText = "Venue";
let heading3 = document.createElement('th');
heading3.innerText = "Location";
let heading4 = document.createElement('th');
heading4.innerText = "TicketText";

row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
row1.appendChild(heading4);
thead.appendChild(row1);

//End of table header section

//Start of table body

gigDetails.forEach(gigDetail=>{
    
let bRow1 = document.createElement('tr');
    let body1 = document.createElement('td');
    let body2 = document.createElement('td');
    let body3 = document.createElement('td');
    let body4 = document.createElement('td');
    body1.innerText = gigDetail.Date;
    body2.innerText = gigDetail.Venue;
    body3.innerText = gigDetail.Location;
    body4.innerText = gigDetail.TicketText;
    bRow1.appendChild(body1);
    bRow1.appendChild(body2);
    bRow1.appendChild(body3);
    bRow1.appendChild(body4);
    tbody.append(bRow1);
});







// const generateGigRow = ( showsArray ) => {

//     // <div class="shows__showsTable" id="showsTable">
//     //             <div class="shows__tableHeader">Date</div> //can be html
//     //             <p class="shows__showRow">Mon Sept 06 2021</p>
//     //             <div class="shows__tableHeader--header">Venue</div>
//     //             <p class="shows__showRow">Ronald Lane</p>
//     //             <div class="shows__tableHeader">Location</div>
//     //             <p class="shows__showRow">San Francisco, CA</p>
//     //         </div>
//     //

//     //CREATES FIRST ROW OF TABLE
//     const showRow = document.createElement( 'div' );//creates div for the row
//     showRow.classList.add( 'shows__showRow' );//adds row class

//     const showRowDate = document.createElement( 'span' );//creates cell for date
//     showRowDate.innerText = "Test";//adds the text from 'showsArray' named argument 
//     showRowDate.classList.add( 'shows__showRow--showRowDate' );
//     showRow.appendChild( showRowDate );

//     const showRowVenue = document.createElement( 'span' );
//     showRowVenue.innerText = showsArray.Venue;
//     showRowVenue.classList.add( 'shows__showRow--showRowVenue' );
//     showRow.appendChild( showRowVenue );
//     console.log(showRowVenue.parentNode);

//     const showRowLocation = document.createElement( 'span' );
//     showRowLocation.innerText = showsArray.Location;
//     showRowLocation.classList.add( 'shows__showRow--showRowLocation' );
//     showRow.appendChild( showRowLocation );

//     const ticketsButton = document.createElement('div');
//     ticketsButton.innerText = showsArray.TicketText;
//     ticketsButton.classList.add( 'shows__showRow--ticketsButton' );
//     showRow.appendChild( ticketsButton );   
 
//     //border bottom dividing shows
//     showRow.style.borderBottom = 'solid 1px blue';
       
// return generateGigRow;
// };
    
// const createTable = ( gigArray ) => {

//     //TARGET
//     const tableDivDestination = document.querySelector( '#showsTable' );

//     const tableDiv = document.createElement( 'div' );
//     //tableDiv.classList.add( 'shows__showRow' );

//     gigArray.forEach( ( gig ) => {
//         generateGigRow( gig ) ;
//     } );

//     tableDivDestination.appendChild( tableDiv );
// };

// createTable( gigDetails );



// gigDetails.forEach(gigDetail=> {
//     console.table(gigDetail)
// })



