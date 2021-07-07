import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.section`
  /* display: grid; */
  /* overflow: scroll; */
  width: 100%;
  background-color: black;
  margin: 0;
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 350px));
  /* width: 100%; */
  grid-gap: 30px;
  justify-content: space-between;
  overflow: hidden;
`;

const StyledCard = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  background-color: grey;

  border-radius: 20px;
  /* width: 300px;*/
  height: 200px;
  border: 1px solid red;
`;

const Category = ({ categoryList }) => {
  return (
    <StyledCategory>
      <StyledCardContainer>
        {categoryList &&
          categoryList.slice(0, 4).map((list) => (
            <StyledCard key={list.id}>
              <h4>{list.name}</h4>
              <p>52 Titles</p>
            </StyledCard>
          ))}
      </StyledCardContainer>
    </StyledCategory>
  );
};

export default Category;
