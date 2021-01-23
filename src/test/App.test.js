import React from "react"
import {
    Card, 
    CardContent, 
    CardMedia, 
    Typography 
} from '@material-ui/core'
import Enzyme ,{ shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../App'
import { NumberCreditCard } from '../Component'
 
Enzyme.configure({ adapter: new Adapter() })

describe("App", () => { 
    it("Should return five components in App", () => {
        
        const wrapper = shallow(<App/>)
        const card = wrapper.find(Card)
        const cardMedia = card.find(CardMedia)
        const cardContent = card.find(CardContent)
        const typography = cardContent.find(Typography)
        const numberCreditCard = cardContent.find(NumberCreditCard)


        expect(card).toHaveLength(1)
        expect(cardMedia).toHaveLength(1)
        expect(cardContent).toHaveLength(1)
        expect(typography).toHaveLength(1)
        expect(numberCreditCard).toHaveLength(1)
    })

    it("Check props in CardMedia", () => {
        const url = "https://veja.abril.com.br/wp-content/uploads/2019/01/economia-cartao-de-credito-20170929-004.jpg?quality=70&strip=info&resize=680,453"
        const wrapper = shallow(<App/>)
        const card = wrapper.find(Card)
        const cardMedia = card.find(CardMedia)

        expect(cardMedia.props()).toHaveProperty("height","200")
        expect(cardMedia.props()).toHaveProperty("component","img")
        expect(cardMedia.props()).toHaveProperty("alt","Contemplative Reptile")
        expect(cardMedia.props()).toHaveProperty("title","Verify Number Card")
        expect(cardMedia.props()).toHaveProperty("image",url)
    })

    it("Check props in Typography", () => {
        const wrapper = shallow(<App/>)
        const card = wrapper.find(Card)
        const cardContent = card.find(CardContent)
        const typography = cardContent.find(Typography)  

        expect(typography.props()).toHaveProperty("paragraph",true)
        expect(typography.props()).toHaveProperty("gutterBottom",true)
        expect(typography.props()).toHaveProperty("variant","h6")
        expect(typography.props()).toHaveProperty("component","h2")
        expect(typography.props()).toHaveProperty("color","textPrimary")
    })
})
