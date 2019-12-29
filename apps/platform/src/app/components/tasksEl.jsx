import React from 'react';
import './tasksEl.css';

export class TasksEl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            members: 'Денис',
            marks: 'Срочно',
            isModalVisible: false,
            isMarker1Visible: false,
            isMarker2Visible: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.titleColor = {
            backgroundColor: this.props.bgcolor,
        };
    }

    render() {
        return (
            <div className="tasksEl_wrapper">
                {this.state.isModalVisible && (
                    <div className="tasksEl_modal_wrapper"
                        onClick={(e) => {
                            if (e.target === document.querySelector('.tasksEl_modal_wrapper')) {
                                this.setState(() => {
                                    return {
                                        isModalVisible: false
                                    }
                                })
                            }
                        }}>
                        <form className="tasksEl_modal" onSubmit={this.handleSubmit}>
                            <div className="tasksEl_modal_close"
                                onClick={() => {
                                    this.setState(() => {
                                        return {
                                            isModalVisible: false
                                        }
                                    })
                                }}>
                                <img src={'../../assets/plus_cross.png'} alt="image!!!" />
                            </div>
                            <input type="text" className="tasksEl_modal_name"
                                placeholder='Заголовок задачи' />
                            <div className="tasksEl_modal_marks">
                                <div>
                                    <p>Участники</p>
                                    <p>{this.state.members}</p>
                                    <div className="tasksEl_modal_marks_add"
                                        onClick={() => {
                                            this.setState(() => {
                                                return {
                                                    isMarker1Visible: true
                                                }
                                            })
                                        }}>
                                        <img src={'../../assets/plus.png'} alt="Add marks" />
                                    </div>
                                    {this.state.isMarker1Visible && <input />}
                                </div>
                                <div>
                                    <p>Метки</p>
                                    <p>{this.state.marks}</p>
                                    <div className="tasksEl_modal_marks_add"
                                        onClick={() => {
                                            this.setState(() => {
                                                return {
                                                    isMarker2Visible: true
                                                }
                                            })
                                        }}>
                                        <img src={'../../assets/plus.png'} alt="Add marks" />
                                    </div>
                                    {this.state.isMarker2Visible && <input />}
                                </div>
                            </div>

                            <label htmlFor="tasksEl_modal_desc_1">
                                <p>Описание</p>
                                <textarea id="tasksEl_modal_desc_1"></textarea>
                            </label>
                            <label htmlFor="tasksEl_modal_desc_2">
                                <p>Действия</p>
                                <textarea id="tasksEl_modal_desc_2"></textarea>
                            </label>
                            <div className="tasksEl_modal_btn">Сохранить</div>
                        </form>
                    </div>
                )}
                <h3 className="tasksEl_title"
                    style={this.titleColor}
                >{this.props.title}</h3>
                {this.state.items.length > 0 && <TodoList items={this.state.items} />}
                <button onClick={() => {
                    this.setState(() => {
                        return {
                            isModalVisible: true
                        }
                    })
                }}>
                    Добавить задачу
                </button>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}