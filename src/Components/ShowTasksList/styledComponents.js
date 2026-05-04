import styled from 'styled-components'

export const ShowTasksListContainer = styled.li`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color : #1a171d;
  background-size : cover;

  height : 60px;
  width : 52vw;
  margin: 10px;
  padding : 20px;
  box-sizing : border-box;
`

export const UserInput = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`

export const TagCategory = styled.button`
    font-family: 'Roboto';
  font-size: 13px;
  color: #323f4b;
  font-weight: bold;

  background-color: #f3aa4e;
  background-size: cover;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 10px;
  margin-left : 10px;
  cursor: pointer;
`
