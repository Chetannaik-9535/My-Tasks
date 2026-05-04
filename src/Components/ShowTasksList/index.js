import {
  ShowTasksListContainer,
  UserInput,
  TagCategory,
} from './styledComponents'

const ShowTasksList = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails
  return (
    <ShowTasksListContainer>
      <UserInput as="p">{taskName}</UserInput>
      <TagCategory as="p">{taskCategory}</TagCategory>
    </ShowTasksListContainer>
  )
}

export default ShowTasksList
