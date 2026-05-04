import './App.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import TagsListItems from './Components/TagsListItems'
import ShowTasksList from './Components/ShowTasksList'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    activeTag: tagsList[0].optionId,
    tasksList: [],
    userInput: '',
    activeFilterTag: '',
  }

  onChangeTaskinput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeActiveTag = event => {
    this.setState({activeTag: event.target.value})
  }

  onClickAddTask = event => {
    event.preventDefault()
    const {userInput, activeTag} = this.state

    if (userInput !== '') {
      const newTask = {
        id: uuidv4(),
        taskName: userInput,
        taskCategory: activeTag,
      }
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newTask],
        userInput: '',
        activeTag: tagsList[0].optionId,
      }))
    }
  }

  onClickTagFilter = optionId => {
    this.setState(prevState => ({
      activeFilterTag: prevState.activeFilterTag === optionId ? '' : optionId,
    }))
  }

  render() {
    const {activeTag, tasksList, userInput, activeFilterTag} = this.state

    const filteredTasksList =
      activeFilterTag === ''
        ? tasksList
        : tasksList.filter(
            eachTask => eachTask.taskCategory === activeFilterTag,
          )

    return (
      <div className="AppContainer">
        <div className="LeftInputPannel">
          <h1 className="Heading">Create a task!</h1>
          <form onSubmit={this.onClickAddTask}>
            <div className="inputContainer">
              <label className="label" htmlFor="task">
                Task
              </label>
              <input
                className="userInput"
                id="task"
                type="text"
                placeholder="Enter the task here"
                value={userInput}
                onChange={this.onChangeTaskinput}
              />
            </div>
            <div className="inputContainer">
              <label className="label" htmlFor="tags">
                Tags
              </label>
              <select
                id="tags"
                className="userInput"
                value={activeTag}
                onChange={this.onChangeActiveTag}
              >
                {tagsList.map(eachTag => (
                  <option key={eachTag.optionId} value={eachTag.optionId}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="button" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="RightShowDetailsPannel">
          <div className="TaskContainer">
            <h1 className="Tags">Tags</h1>
            <ul className="listItemsContainer">
              {tagsList.map(eachTag => (
                <TagsListItems
                  key={eachTag.optionId}
                  tagsListItemsDetails={eachTag}
                  onClickTagFilter={this.onClickTagFilter}
                  isActive={activeFilterTag === eachTag.optionId}
                />
              ))}
            </ul>
            <h1 className="Tags">Tasks</h1>
            <ul className="TasksListItems">
              {filteredTasksList.length === 0 ? (
                <p className="Heading">No Tasks Added Yet</p>
              ) : (
                filteredTasksList.map(eachTask => (
                  <ShowTasksList key={eachTask.id} taskDetails={eachTask} />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App

/*import './App.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import TagsListItems from './Components/TagsListItems'
import ShowTasksList from './Components/ShowTasksList'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTag: tagsList[0].optionId,
    tasksList: [],
    userInput: '',
    activeFilterTag: '',
  }

  onChangeTaskinput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeActiveTag = event => {
    this.setState({activeTag: event.target.value})
  }

  onClickAddTask = event => {
    event.preventDefault()
    const {userInput, activeTag} = this.state

    if (userInput !== '') {
      const newTask = {
        id: uuidv4(),
        taskName: userInput,
        taskCategory: activeTag,
      }
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newTask],
        userInput: '',
        activeTag: tagsList[0].optionId,
      }))
    }
  }

  onClickTagFilter = optionId => {
    this.setState(prevState => ({
      // If the clicked tag is already active, turn it off (''). Otherwise, set it to the clicked tag.
      activeFilterTag: prevState.activeFilterTag === optionId ? '' : optionId,
    }))
  }

  render() {
    const {activeTag, tasksList, userInput, activeFilterTag} = this.state

    const filteredTasksList =
      activeFilterTag === ''
        ? tasksList
        : tasksList.filter(
            eachTask => eachTask.taskCategory === activeFilterTag,
          )

    return (
      <div className="AppContainer">
        <div className="LeftInputPannel">
          <h1 className="Heading">Create a task!</h1>
          <form onSubmit={this.onClickAddTask}>
            <div className="inputContainer">
              <label className="label">Task</label>
              <input
                className="userInput"
                type="text"
                placeholder="Enter the task here"
                value={userInput}
                onChange={this.onChangeTaskinput}
              />
            </div>
            <div className="inputContainer">
              <label className="label">Tags</label>
              <select
                className="userInput"
                value={activeTag}
                onChange={this.onChangeActiveTag}
              >
                {tagsList.map(eachTag => (
                  <option key={eachTag.optionId} value={eachTag.optionId}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="button" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="RightShowDetailsPannel">
          <div className="TaskContainer">
            <h1 className="Tags">Tags</h1>
            <ul className="listItemsContainer">
              {tagsList.map(eachTag => (
                <TagsListItems
                  key={eachTag.optionId}
                  tagsListItemsDetails={eachTag}
                  onClickTagFilter={this.onClickTagFilter}
                  isActive={activeFilterTag === eachTag.optionId}
                />
              ))}
            </ul>
            <h1 className="Tags">Tasks</h1>
            <ul className="TasksListItems">
              {filteredTasksList.length === 0 ? (
                <p className="Heading">No Tasks Added Yet</p>
              ) : (
                filteredTasksList.map(eachTask => (
                  <ShowTasksList key={eachTask.id} taskDetails={eachTask} />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
*/
