import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import Footer from "../FooterContainer/";
import { fetchProductsCategories } from "../../redux/productsCategories/actions/product-categories-actions";

const CategoriesContainer = styled.div`
  width: 100%;
  margin-top:5%;
  margin-bottom:3%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardCategory = styled.div`
  height:60vh;
  width:15%;
  margin:0.5%;
  background: ${props =>  `url("${process.env.PUBLIC_URL}/images/img-products/${props.category}/${props.img}") center;`};
  object-fit:contain;
  -webkit-background-size: cover;
    transition-duration: 2s;
     &:hover {
      transform: scale(1.1, 1.1);
  } 
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  color: black;
  opacity: 0;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
  opacity: 0.5;
  text-decoration: none !important;
  }
`;
const MenuCart = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  
`;
const StyledLink = styled(Link)`
  text-decoration: none !important;
  display: block;
  width: 100%;
  font-size: 35px;
  text-transform:capitalize;
  font-family: var(--fontVar);
  display: flex;
    align-items: center;
    justify-content: center;
    height:100%;

  }
`;
const StyledCategoryTittle = styled.span`
  text-decoration: none !important;
  transition: all 0.5s;
  :hover {
    color: "var(--mainColorFont)";
    transition: all 0.4s ease 0s;
  }
`;

export function ProductCategories(props) {
  const [selectedCategory, setSelectedCategory] = useState("Paints");

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  useEffect(() => {
    props.fetchProductsCategories()

  }, []);

  const handleChange = selectedCategory => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <>
    
     <CategoriesContainer>
          {props.productsCategories && props.productsCategories.map((category)=>{
            return(
              <StyledCardCategory key = {category.id}img={category.img} category ={category.name}>
                <StyledLink to= {`/gallery/${category.name.toLowerCase()}`}>
                <Overlay>
                <StyledCategoryTittle>{category.name}</StyledCategoryTittle>
               </Overlay>
                </StyledLink>
              </StyledCardCategory>
          )
          })}
      </CategoriesContainer>
      <Footer back = "/home"/>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    productsCategories: { data: productsCategories },
    products: { data: products, status: status }
  } = state;
  return {
    productsCategories,
    products,
    status
  };
};

export default connect(mapStateToProps, {
  fetchProductsCategories,
})(ProductCategories);
