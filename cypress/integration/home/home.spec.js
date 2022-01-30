
import homePage from '../../pages/google/homePage'

describe('The home page must be available', () =>{

    it('Check if search button exists', ()=>
    {
        homePage.go()

        const searchButtonText = 'Pesquisa Google'

        homePage.validateSearchButtonText(searchButtonText)        
    })
})
