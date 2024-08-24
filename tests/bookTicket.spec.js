const { test, expect } = require('@playwright/test');
const bookingIn_Usd = require('../pages/bookIn_Usd')
const dataset = require('../utils/Testdata.json')



dataset.forEach(({departure_first_2_Letters, departure_City, arrival_first_2_Letters, arrival_City, currency})=>{
test.setTimeout(150000)
test(`booking with currency: ${currency}`, {tag: '@smoke'}, async ({page})=>{
  const today = new Date();
  console.log(today)
 const currentDate = today.getDate(); // Day of the month (1-31)
 console.log(currentDate)
 const Book_in_USD = bookingIn_Usd(page)
  await Book_in_USD.gotoLoginPage()
  await Book_in_USD.select_Departure_and_Arrival(departure_first_2_Letters, departure_City, arrival_first_2_Letters, arrival_City )
  await Book_in_USD.choose_Departure_Date(currentDate)
  await Book_in_USD.choose_Arrival_Date(currentDate)
  await Book_in_USD.numberOf_passengers()
  await Book_in_USD.currencyCode(currency)
  await Book_in_USD.submitSearch()
})


})


//  test('book flight', async ({ page }) => {
//   test.setTimeout(150000);
//   const today = new Date();
//   console.log(today)
//  const currentDate = today.getDate(); // Day of the month (1-31)
//  console.log(currentDate)
//  const currencycode = 'USD'

//   const Book_in_USD = bookingIn_Usd(page)
//   await Book_in_USD.gotoLoginPage()
//   await Book_in_USD.selectDeparture_City('Gu',' Guwahati (GAU)', 'De', ' Delhi (DEL)' )
//   await Book_in_USD.choose_Departure_Date(currentDate)
//   await Book_in_USD.choose_Arrival_Date(currentDate)
//   await Book_in_USD.numberOf_passengers()
//   await Book_in_USD.currencyCode(currencycode)
//   await Book_in_USD.submitSearch()

// });


// test('book flight', async ({ page }) => {
//   test.setTimeout(150000);
//   const today = new Date();
//   console.log(today)
//  const currentDate = today.getDate(); // Day of the month (1-31)
//  console.log(currentDate)
//  const currencycode = 'USD'

//   const Book_in_USD = bookingIn_Usd(page)
//   await Book_in_USD.gotoLoginPage()
//   await Book_in_USD.selectDeparture_City('Gu',' Guwahati (GAU)', 'De', ' Delhi (DEL)' )
//   await Book_in_USD.choose_Departure_Date(currentDate)
//   await Book_in_USD.choose_Arrival_Date(currentDate)
//   await Book_in_USD.numberOf_passengers()
//   await Book_in_USD.currencyCode(currencycode)
//   await Book_in_USD.submitSearch()

// });

//
/*test('book flight', async ({ page }) => {

  test.setTimeout(150000);
  const Book_in_USD = bookingIn_Usd(page)
  await Book_in_USD.gotoLoginPage()
  // await page.goto('https://rahulshettyacademy.com/dropdownsPractise/#');
  // expect(await page.locator('[id="travelOptions"]')).toBeTruthy()

  const currencycode = 'USD'

const selectTravel =  page.locator('[id="ctl00_mainContent_rbtnl_Trip"]')
const roundTrip = selectTravel.locator('[id="ctl00_mainContent_rbtnl_Trip_1"]')
await roundTrip.check()
const departureDropdown = page.locator('[id="ctl00_mainContent_ddl_originStation1_CTXTaction"]')
await departureDropdown.click()
const inputCity = page.locator('[id="ctl00_mainContent_ddl_originStation1_CTXT"]')
await inputCity.click()
await inputCity.pressSequentially('Gu')
const citiesDeparture = page.locator('[id="dropdownGroup1"]')
const pickCity = citiesDeparture.locator('[class="dropdownDiv"]')
const selectCity = pickCity.locator('ul')
await selectCity.filter({hasText: ' Guwahati (GAU)'}).dblclick() //select departure city
const Arrivalcity = page.locator('[class="right1"]')
await Arrivalcity.locator('[id="ctl00_mainContent_ddl_destinationStation1_CTXT"]').click()
 await Arrivalcity.locator('[id="ctl00_mainContent_ddl_destinationStation1_CTXT"]').pressSequentially('De')
const selectArrival = Arrivalcity.locator('[id="dropdownGroup1"]')
const pick = selectArrival.locator('[class="livecl"]')
await pick.filter({hasText: ' Delhi (DEL)'}).dblclick()

  const today = new Date();
  console.log(today)
 const currentDate = today.getDate(); // Day of the month (1-31)
 console.log(currentDate)

// const currentMonth = today.getMonth() + 1; // Month (0-11, adding 1 to normalize)
//  const currentYear = today.getFullYear(); 

//const formattedDate = `${currentYear}-${currentMonth < 10 ? '0' + currentMonth : currentMonth}-${currentDate < 10 ? '0' + currentDate : currentDate}`;

// departure date
const firstCalendar = page.locator('[class="ui-datepicker-group ui-datepicker-group-first"]')
const selectCalendar = firstCalendar.locator('[class="ui-datepicker-calendar"]')
const bodyCalendar = selectCalendar.locator('tbody')
const calendarRow = bodyCalendar.locator('tr').filter({hasText: `${currentDate}`})
const calenarDate = calendarRow.locator('td').getByText(`${currentDate}`)
await calenarDate.click()

//return date
await page.locator('[id="ctl00_mainContent_view_date2"]').click()
const secondCalendar = page.locator('[class="ui-datepicker-group ui-datepicker-group-last"]')
const second_selectCalendar = secondCalendar.locator('[class="ui-datepicker-calendar"]')
const second_bodyCalendar = second_selectCalendar.locator('tbody')
if (currentDate < 31){
  const arrivalDate = (30 - currentDate) + 15
  console.log(arrivalDate)
  const second_calendarRow = second_bodyCalendar.locator('tr').filter({hasText: `${arrivalDate}`})
const second_calenarDate = second_calendarRow.locator('td').getByText(`${arrivalDate}`)
await second_calenarDate.click()
}
else{
  const change_arrivalDate = 15
  console.log(change_arrivalDate)
  const second_calendarRow = second_bodyCalendar.locator('tr').filter({hasText: `${change_arrivalDate}`})
const second_calenarDate = second_calendarRow.locator('td').getByText(`${change_arrivalDate}`)
await second_calenarDate.click()
}

//number of passengers
await page.locator('[id="divpaxinfo"]').click()
const adultSelect = await page.locator('[id="divAdult"]')
await adultSelect.locator('[class="ad-row-right"]')
await adultSelect.locator('[id="hrefIncAdt"]').click()
await page.locator('[id="btnclosepaxoption"]').click()

//currency
await page.locator('[id="ctl00_mainContent_DropDownListCurrency"]').selectOption(currencycode)

//submit
await page.locator('[id="ctl00_mainContent_btn_FindFlights"]').click()

});
*/






