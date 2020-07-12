// import React from "react";
// import Enzyme, {shallow, mount} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import {Products, Container} from "./index";

// Enzyme.configure({ adapter: new Adapter() })

// const wrapper = shallow(<Products/>)
// describe("Create ProductsContainer component", ()=>{

// it("Should be defined", ()=>{
//     expect(Products).toBeDefined()
// })
// it("Should render correctly", ()=>{
//     expect(wrapper.find(".main-container")).toHaveLength(1)
// })

// it("Should render products correctly is products list exist", ()=>{
//     const mockProductList = [
//         {
//         id: 1,
//         name: "Cuadro Medio",
//         precio: 1000,
//         stock:1,
//         img: "5.jpg"
//         },
//         {
//             id: 1,
//             name: "Cuadro Medio",
//             precio: 1000,
//             stock:1,
//             img: "5.jpg"
//             },
//             {
//                 id: 1,
//                 name: "Cuadro Medio",
//                 precio: 1000,
//                 stock:1,
//                 img: "5.jpg"
//                 },
//                 {
//                     id: 1,
//                     name: "Cuadro Medio",
//                     precio: 1000,
//                     stock:1,
//                     img: "5.jpg"
//                     },
//     ]

//         const productWrapper = shallow(<Products productList = {mockProductList}/>)
//         expect(productWrapper.find(Container)).toHaveLength(4) 
//     })

//     it("Add products to cart if I click the button", ()=>{
//         const mockProductList = [
//             {
//             id: 1,
//             name: "Cuadro Medio",
//             precio: 1000,
//             stock:1,
//             img: "5.jpg"
//             },
//             {
//                 id: 1,
//                 name: "Cuadro Medio",
//                 precio: 1000,
//                 stock:1,
//                 img: "5.jpg"
//                 },
//                 {
//                     id: 1,
//                     name: "Cuadro Medio",
//                     precio: 1000,
//                     stock:1,
//                     img: "5.jpg"
//                     },
//                     {
//                         id: 1,
//                         name: "Cuadro Medio",
//                         precio: 1000,
//                         stock:1,
//                         img: "5.jpg"
//                         },
//         ]
    
//         const addToCart = jest.fn()
//         const mockProduct =  {
//             id: 1,
//             name: "Cuadro Medio",
//             precio: 1000,
//             stock:1,
//             img: "5.jpg"
//         }
//         const wrapper = shallow(<Products product = {mockProduct}/>)
//         wrapper.find('button').at(0).simulate('click') 
//         //como hay muchos btns renderizandose aclaro que pruebo sobre el primero at(0)
//         expect(addToCart.mock.calls).toBe(1); 
//         // mocks.call retorna un array con la cantidad de llamadas
//     })
// })