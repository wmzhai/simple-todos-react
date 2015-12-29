// App component - represents the whole app
App = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData(){
        return {
            tasks : Tasks.find({}).fetch()
        }
    },

    renderTasks() {
        return this.data.tasks.map((task) => {
            return <Task key={task._id} task={task} />;
        });
    },

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                    <form className="new-task" onsubmit={this.handleSubmit}>
                        <input type="text" ref="textInput" placeholder="Type to add new tasks"/>
                    </form>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
});