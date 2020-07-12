import React from "react";
import Enzyme, {shallow, mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {NavBar} from "./navBar";


Enzyme.configure({ adapter: new Adapter() })

describe("Create NavBar Component", ()=>{

    const mockedToggleData = "menu-list-show"
    const wrapper = shallow(<NavBar/>);

    it('should be defined', () => expect(NavBar).toBeDefined());
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
    it("should render h3 correctly", ()=>{
        expect(wrapper.find(".menu-title")).toHaveLength(1) 
    })

    it('should NavMenu recive props', () => {
     shallow(<NavMenu openMenu={mockedToggleData}/>);
     expect(wrapper.find("props.carts")).toBeDefined()

    })
    it("Should render 0 is carts is not present ", ()=>{
        const mokCart = []
        const wrapper = shallow(<NavBar carts = {mokCart}/>)
        expect(wrapper.find("span").text()).toEqual("0")

    })
    // it("Should render items quantity is cart props is present ", ()=>{
    //     const mokCart = [{
    //         product: {id: 1, name: "Cuadro Medio", precio: 1000, stock: 1, img: "5.jpg"},
    //         quantity: 3,
    //         totalPrice: 3000
    //     }]
        
    //     const wrapper = mount(<NavBar carts = {mokCart}/>)
    //     expect(wrapper.find("span").text()).toEqual(1)

    // })

})