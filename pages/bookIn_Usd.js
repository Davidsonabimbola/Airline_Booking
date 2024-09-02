const { expect } = require("@playwright/test")
const buyTicket = (page)=>({
    async gotoLoginPage(){
        await page.goto('https://rahulshettyacademy.com/dropdownsPractise/#');
  expect(await page.locator('[id="travelOptions"]')).toBeTruthy()
    },

    async select_Departure_and_Arrival(firstTwo_Departure_letters, Departure_city_With_Code,firstTwo_Arrival_letters, Arrival_city_With_Code){
        const selectTravel =  page.locator('[id="ctl00_mainContent_rbtnl_Trip"]')
        const roundTrip = selectTravel.locator('[id="ctl00_mainContent_rbtnl_Trip_1"]')
        await roundTrip.check()
        const departureDropdown = page.locator('[id="ctl00_mainContent_ddl_originStation1_CTXTaction"]')
        await departureDropdown.click()
        const inputCity = page.locator('[id="ctl00_mainContent_ddl_originStation1_CTXT"]')
        await inputCity.click()
        await inputCity.pressSequentially(firstTwo_Departure_letters)
        const citiesDeparture = page.locator('[id="dropdownGroup1"]')
        const pickCity = citiesDeparture.locator('[class="dropdownDiv"]')
        const selectCity = pickCity.locator('ul')
        await selectCity.filter({hasText: Departure_city_With_Code}).dblclick() //select departure city
const Arrivalcity = page.locator('[class="right1"]')
await Arrivalcity.locator('[id="ctl00_mainContent_ddl_destinationStation1_CTXT"]').click()
 await Arrivalcity.locator('[id="ctl00_mainContent_ddl_destinationStation1_CTXT"]').pressSequentially(firstTwo_Arrival_letters)
const selectArrival = Arrivalcity.locator('[id="dropdownGroup1"]')
const pick = selectArrival.locator('[class="livecl"]')
await pick.filter({hasText: Arrival_city_With_Code}).dblclick()
    },

    async choose_Departure_Date(currentDate){
        const firstCalendar = await page.locator('[class="ui-datepicker-group ui-datepicker-group-first"]')
const selectCalendar = await firstCalendar.locator('[class="ui-datepicker-calendar"]')
const bodyCalendar = await selectCalendar.locator('tbody')
const calendarRow = await bodyCalendar.locator('tr').nth(0).filter({hasText: currentDate})
const calenarDate = await calendarRow.locator('td').getByText(currentDate)
await calenarDate.click()
//getByRole('link', { name: '2', exact: true }).first()
    },

    async choose_Arrival_Date(currentDate){
        await page.locator('[id="ctl00_mainContent_view_date2"]').click()
        const secondCalendar = page.locator('[class="ui-datepicker-group ui-datepicker-group-last"]')
        const second_selectCalendar = secondCalendar.locator('[class="ui-datepicker-calendar"]')
        const second_bodyCalendar = second_selectCalendar.locator('tbody')
        if (currentDate < 31){
          const arrivalDate = (15 - currentDate) + 15
          console.log(arrivalDate)
          const second_calendarRow = second_bodyCalendar.locator('tr').nth(0).filter({hasText: `${arrivalDate}`})
        const second_calenarDate = second_calendarRow.locator('td').getByText(`${arrivalDate}`)
        await second_calenarDate.click()
        }
        else{
          const change_arrivalDate = 15
          console.log(change_arrivalDate)
          const second_calendarRow = second_bodyCalendar.locator('tr').filter({hasText: `${change_arrivalDate}`})
        const second_calenarDate = second_calendarRow.locator('td').getByText(`${change_arrivalDate}`)
        await second_calenarDate.click({force:true})
        }
    },

    async numberOf_passengers(){
        await page.locator('[id="divpaxinfo"]').click()
const adultSelect = await page.locator('[id="divAdult"]')
await adultSelect.locator('[class="ad-row-right"]')
await adultSelect.locator('[id="hrefIncAdt"]').click()
await page.locator('[id="btnclosepaxoption"]').click()
    },

    async currencyCode(Code){
        await page.locator('[id="ctl00_mainContent_DropDownListCurrency"]').selectOption(Code)
    },

    async submitSearch(){
        await page.locator('[id="ctl00_mainContent_btn_FindFlights"]').click()
    }
})
module.exports = buyTicket