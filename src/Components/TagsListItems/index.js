import {
  TagsListItemsContainer,
  TagOptions,
  CustomButton,
} from './styledComponents'

const TagsListItems = props => {
  const {tagsListItemsDetails, onClickTagFilter} = props
  const {displayText, optionId} = tagsListItemsDetails

  const onClickTag = () => {
    onClickTagFilter(optionId)
  }

  return (
    <TagsListItemsContainer>
      <TagOptions>
        <CustomButton type="button" onClick={onClickTag}>
          {displayText}
        </CustomButton>
      </TagOptions>
    </TagsListItemsContainer>
  )
}

export default TagsListItems
