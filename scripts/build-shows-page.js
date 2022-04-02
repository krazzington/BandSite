

// const ticketbutton = document.createElement( 'div' );
// ticketbutton.classList.add('show__showRow--ticketbutton')



// let gigDetails = [
//     { Date : 'Mon Sept 06 2021', Venue : 'Ronald Lane', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Tue Sept 21 2021', Venue : 'Pier 3 East', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Fri Oct 15 2021', Venue : 'View Lounge', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Sat Nov 06 2021', Venue : 'Hyatt Agency', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Fri Nov 26 2021', Venue : 'Moscow Center', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Wed Dec 15 2021', Venue : 'Press Club', Location : 'San Francisco, CA', TicketText : ticketbutton },
// ];



// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);


// // Adding the entire table to the body tag
// document.getElementById('showTable').appendChild(table);
// //Start of Table header section
// let row1 = document.createElement('tr');
// let heading1 = document.createElement('th');
// heading1.innerText = "Date";
// let heading2 = document.createElement('th');
// heading2.innerText = "Venue";
// let heading3 = document.createElement('th');
// heading3.innerText = "Location";
// let heading4 = document.createElement('th');
// heading4.innerText = "";

// row1.appendChild(heading1);
// row1.appendChild(heading2);
// row1.appendChild(heading3);
// row1.appendChild(heading4);
// thead.appendChild(row1);

// //End of table header section

// //Start of table body

// gigDetails.forEach(gigDetail=>{
    
// let bRow1 = document.createElement('tr');
//     let body1 = document.createElement('td');
//     let body2 = document.createElement('td');
//     let body3 = document.createElement('td');
//     let body4 = document.createElement('td');
//     body1.innerText = gigDetail.Date;
//     body2.innerText = gigDetail.Venue;
//     body3.innerText = gigDetail.Location;
//     body4.innerText = gigDetail.TicketText;
//     bRow1.appendChild(body1);
//     bRow1.appendChild(body2);
//     bRow1.appendChild(body3);
//     bRow1.appendChild(body4);
//     tbody.append(bRow1);
// });









// const ticketbutton = document.createElement( 'div' );
// ticketbutton.innerText = "Buy Tickets"
// ticketbutton.classList.add('show__showRow--ticketbutton')



// let gigDetails = [
//     { Date : 'Mon Sept 06 2021', Venue : 'Ronald Lane', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Tue Sept 21 2021', Venue : 'Pier 3 East', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Fri Oct 15 2021', Venue : 'View Lounge', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Sat Nov 06 2021', Venue : 'Hyatt Agency', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Fri Nov 26 2021', Venue : 'Moscow Center', Location : 'San Francisco, CA', TicketText : ticketbutton },
//     { Date : 'Wed Dec 15 2021', Venue : 'Press Club', Location : 'San Francisco, CA', TicketText : ticketbutton },
// ];



// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);


// // Adding the entire table to the body tag
// document.getElementById('showTable').appendChild(table);
// //Start of Table header section
// let gigHeading = document.createElement('tr');
// let heading1 = document.createElement('th');
// heading1.innerText = "Date";
// let heading2 = document.createElement('th');
// heading2.innerText = "Venue";
// let heading3 = document.createElement('th');
// heading3.innerText = "Location";
// let heading4 = document.createElement('th');
// heading4.innerText = "";

// row1.appendChild(heading1);
// row1.appendChild(heading2);
// row1.appendChild(heading3);
// row1.appendChild(heading4);
// thead.appendChild(row1);

// //End of table header section

// //Start of table body

// gigDetails.forEach(gigDetail=>{


// let bRow1 = document.createElement('tr');

//     let body1 = document.createElement('td');
//     let body2 = document.createElement('td');
//     let body3 = document.createElement('td');
//     let body4 = document.createElement('td');
    
//     body1.innerText = gigDetail.Date;
//     body2.innerText = gigDetail.Venue;
//     body3.innerText = gigDetail.Location;
//     body4.innerText = gigDetail.TicketText;
//     bRow1.appendChild(body1);
//     bRow1.appendChild(body2);
//     bRow1.appendChild(body3);
//     bRow1.appendChild(body4);
//     tbody.append(bRow1);
// });







// let gigHeader = document.createElement( 'div' );
// gigHeader.classList.add( 'show__showTable--gigHeader' );

// table.appendChild( gigHeader );

// let headingDate = document.createElement('div');
// headingDate.classList.add( 'show__showTable--gigHeader' );
// headingDate.innerText = "Date";
// let headingVenue = document.createElement('div');
// headingVenue.classList.add( 'show__showTable--gigHeader' );
// headingVenue.innerText = "Venue";
// let headingLocation = document.createElement('div');
// headingLocation.classList.add( 'show__showTable--gigHeader' );
// headingLocation.innerText = "Location";
// let headingButton = document.createElement('div');
// headingButton.classList.add( 'show__showTable--gigHeader' );
// headingButton.innerText = "";

// gigDetails.forEach(gigDetail=>{

// let headingDate = document.createElement('div');
// headingDate.classList.add( 'show__showTable--gigHeader' );
// headingDate.innerText = "Date";

// let headingVenue = document.createElement('div');
// headingVenue.classList.add( 'show__showTable--gigHeader' );
// headingVenue.innerText = "Venue";

// let headingLocation = document.createElement('div');
// headingLocation.classList.add( 'show__showTable--gigHeader' );
// headingLocation.innerText = "Location";

// let headingButton = document.createElement('div');
// headingButton.classList.add( 'show__showTable--gigHeader' );
// headingButton.innerText = "";

// let tableColumnDiv = document.createElement( 'div' );
// tableColumnDiv.classList.add( 'show__showDiv' );


//     let div1 = document.createElement('span');
//     let div2 = document.createElement('span');
//     let div3 = document.createElement('span');
//     let div4 = document.createElement('span');
    

//     div1.innerText = gigDetail.Date;
//     div2.innerText = gigDetail.Venue;
//     div3.innerText = gigDetail.Location;
//     div4.innerText = gigDetail.TicketText;
//     tableColumnDiv.appendChild(div1);
//     tableColumnDiv.appendChild(div2);
//     tableColumnDiv.appendChild(div3);
//     tableColumnDiv.appendChild(div4);
//     table.append( tableColumnDiv );
// });




























// // const body = document.querySelector('body');
// //const tableElement = document.getElementById('showTable');


// let gigDetails = [
//     { Date : 'Mon Sept 06 2021', Venue : 'Ronald Lane', Location : 'San Francisco, CA', TicketText : 'tickets button' },
//     { Date : 'Tue Sept 21 2021', Venue : 'Pier 3 East', Location : 'San Francisco, CA', TicketText : 'tickets button' },
//     { Date : 'Fri Oct 15 2021', Venue : 'View Lounge', Location : 'San Francisco, CA', TicketText : 'tickets button' },
//     { Date : 'Sat Nov 06 2021', Venue : 'Hyatt Agency', Location : 'San Francisco, CA', TicketText : 'tickets button' },
//     { Date : 'Fri Nov 26 2021', Venue : 'Moscow Center', Location : 'San Francisco, CA', TicketText : 'tickets button' },
//     { Date : 'Wed Dec 15 2021', Venue : 'Press Club', Location : 'San Francisco, CA', TicketText : 'tickets button' }
// ];

// const headers = ['Date', 'Venue', 'Location', ''];

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


//     var table = $('#showsTable');
//     // append a jQuery <tr> element inside the <table> and store it in a different variable
//     var tr = table.append($('<tr>'));
//     // append a jQuery <td> element inside the <tr> and store in in a different variable
//     var td = tr.append($('<td>'));
//     // insert some text inside the table data
    

// $('table').append($('<tr>')).append($('<td>')).text(showsArray[0]);
// $('table').append($('<tr>')).append($('<td>')).text(showsArray[1]);
// $('table').append($('<tr>')).append($('<td>')).text(showsArray[2]);
// $('table').append($('<tr>')).append($('<td>')).text(showsArray[3]);

// return generateGigRow;
// };
// //     //CREATES FIRST ROW OF TABLE
// //     const showRow = document.createElement( 'div' );//creates div for the row
// //     showRow.classList.add( 'shows__showRow' );//adds row class

// //     const showRowDate = document.createElement( 'span' );//creates cell for date
// //     showRowDate.innerText = showsArray[0];//adds the text from 'showsArray' named argument     showRowDate.innerText = showsArray.Date;
// //     showRowDate.classList.add( 'shows__showRow--showRowDate' );
// //     showRow.appendChild( showRowDate );

// //     const showRowVenue = document.createElement( 'span' );
// //     showRowVenue.innerText = showsArray[1]; //adds the text from 'showsArray' named argument     showRowDate.innerText = showsArray.Venue;
// //     showRowVenue.classList.add( 'shows__showRow--showRowVenue' );
// //     showRow.appendChild( showRowVenue );

// //     const showRowLocation = document.createElement( 'span' );
// //     showRowLocation.innerText = showsArray[2]; //adds the text from 'showsArray' named argument     showRowDate.innerText = showsArray.Location;
// //     showRowLocation.classList.add( 'shows__showRow--showRowLocation' );
// //     showRow.appendChild( showRowLocation );

// //     const ticketsButton = document.createElement('div');
// //     ticketsButton.innerText = showsArray[3]; //adds the text from 'showsArray' named argument     showRowDate.innerText = showsArray.TicketText;
// //     ticketsButton.classList.add( 'shows__showRow--ticketsButton' );
// //     showRow.appendChild( ticketsButton );   
 
// //     //border bottom dividing shows
// //     showRow.style.borderBottom = 'solid 1px blue';
       
// // return generateGigRow;
// // };
    
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

// //createTable( gigDetails );

// let targetData = document.getElementById('showsTable')

// gigDetails.forEach(gigDetail=> {
//     console.log(gigDetail)
// })

// targetData.appendChild( gigDetails )



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


//     var table = $('#showsTable');
//     // append a jQuery <tr> element inside the <table> and store it in a different variable
//     var tr = table.append($('<tr>'));
//     // append a jQuery <td> element inside the <tr> and store in in a different variable
//     var td = tr.append($('<td>'));
//     // insert some text inside the table data
    

// $('table').append($('<tr>')).append($('<td>')).text(showsArray[0]);
// $('table').append($('<tr>')).append($('<td>')).text(showsArray[1]);
// $('table').append($('<tr>')).append($('<td>')).text(showsArray[2]);
// $('table').append($('<tr>')).append($('<td>')).text(showsArray[3]);

// return generateGigRow;











// // function difference(x,y) {
// // 	var minus = x - y;
// // 	if (minus < 0) {
// // 		minus = -minus
// // 	};
// // 	return minus;
// // }

// // function bigDifference(x,y) {
// // 	if (difference(x,y) > 100) {
// // 		console.log("Yes the difference is big!");
// // 	} else {
// // 		console.log("No the difference is small");
// // 	}
// // }

// // console.log(bigDifference(1000, 7))


// The individual rows of the Shows table need to have a hover state applied to them when a cursor is hovering over the table 
// row, as per style guide. This can be done by utilizing a pseudo class within your Sass.
// Additionally, clicking on an individual row should make that row "selected" or "active", applying a modifier
// CSS class via JavaScript. Utilize your knowledge of both JavaScript and Sass to accomplish this.


const ticketbutton = document.createElement( 'div' );
ticketbutton.classList.add('shows__showRow--ticketbutton')

const gigDetails = [
    { Date : 'Mon Sept 06 2021', Venue : 'Ronald Lane', Location : 'San Francisco, CA', TicketText : ticketbutton },
    { Date : 'Tue Sept 21 2021', Venue : 'Pier 3 East', Location : 'San Francisco, CA', TicketText : ticketbutton },
    { Date : 'Fri Oct 15 2021', Venue : 'View Lounge', Location : 'San Francisco, CA', TicketText : ticketbutton },
    { Date : 'Sat Nov 06 2021', Venue : 'Hyatt Agency', Location : 'San Francisco, CA', TicketText : ticketbutton },
    { Date : 'Fri Nov 26 2021', Venue : 'Moscow Center', Location : 'San Francisco, CA', TicketText : ticketbutton },
    { Date : 'Wed Dec 15 2021', Venue : 'Press Club', Location : 'San Francisco, CA', TicketText : ticketbutton },
];

const showDivGenerator = ( showRows ) => {
    

    //Create the base element
    const newShow = document.createElement( 'div' ); //show div
    newShow.classList.add( 'shows__showDiv' );

    //DATE DIVS
    const dateDiv = document.createElement( 'div' ); // date div in the show div --- this should own the header and date info
    dateDiv.classList.add( 'shows__dateDiv' ); // this adds the class to the date info
    const dateHeaderDiv = document.createElement( 'div' );
    dateHeaderDiv.classList.add( 'shows__dateDiv--headers' );
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
    venueHeaderDiv.classList.add( 'shows__venueDiv--headers' );
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
    locationHeaderDiv.classList.add( 'shows__locationDiv--headers' );
    locationHeaderDiv.innerText = 'location';
    const locationInfoDiv = document.createElement( 'div' );
    locationInfoDiv.innerText = showRows.Location;
    locationInfoDiv.classList.add( 'shows__locationDiv--locationInfo' );
    locationDiv.appendChild( locationHeaderDiv );
    locationDiv.appendChild( locationInfoDiv );

    const ticketButtonDiv = document.createElement( 'div' );
    ticketButtonDiv.classList.add( 'shows__ticketButtonDiv' );
    locationInfoDiv.innerText = 'buy tickets';

    //appends to the newShow Div
    newShow.appendChild( dateDiv ); 
    newShow.appendChild( venueDiv );
    newShow.appendChild( locationDiv );

    
    return newShow;
    
};

//Main renderer
const showIntoTheRow = ( gigArray ) => {

    //Target node
    const showDestination = document.querySelector( '#showTable' );
    
    
    gigArray.forEach( ( gig ) => {
        const createShowDiv = document.createElement( 'div' );
        createShowDiv.classList.add( 'shows__showDiv' );

        createShowDiv.appendChild( showDivGenerator( gig ) );
        showDestination.appendChild( createShowDiv );
    } );

    // showDestination.appendChild( createShowDiv );
};

//Invoking my renderer
showIntoTheRow( gigDetails );