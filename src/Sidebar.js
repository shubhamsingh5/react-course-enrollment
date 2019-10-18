import React from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import SearchAndFilter from "./SearchAndFilter";
import TagList from "./TagList";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.searchAndFilter = new SearchAndFilter();
        this.subject = React.createRef();
        this.minimumCredits = React.createRef();
        this.maximumCredits = React.createRef();
        this.search = React.createRef();
        this.state = {
            tags: [],
            selectedButton: 0
        };
    }

    setCourses() {
        this.props.setCourses(
            this.searchAndFilter.searchAndFilter(
                this.props.courses,
                this.state.selectedButton,
                this.state.tags,
                this.subject.current.value,
                this.minimumCredits.current.value,
                this.maximumCredits.current.value
            )
        );
    }

    handleCreditsKeyDown(e) {
        if (
            [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "ArrowUp",
                "ArrowDown",
                "Tab"
            ].indexOf(e.key) === -1
        )
            e.preventDefault();
    }

    getSubjectOptions() {
        let subjectOptions = [];

        for (const subject of this.props.subjects) {
            subjectOptions.push(<option key={subject}>{subject}</option>);
        }

        return subjectOptions;
    }

    handleKeyPress = target => {
        if (target.charCode === 13) {
            const newTag = this.search.current.value;
            if (!this.state.tags.includes(newTag)) {
                this.setState(prevState => ({
                    tags: [...prevState.tags, newTag]
                }), this.setCourses);
            }
            this.search.current.value = "";
            // console.log(this.search.current.value);
        }
    };

    searchUnion = (e) => {
        e.preventDefault();
        this.setState({
            selectedButton: 0
        }, this.setCourses);
    }

    searchInter = (e) => {
        e.preventDefault();
        this.setState({
            selectedButton: 1
        }, this.setCourses)
    }

    removeTag = (tag, e) => {
        e.preventDefault();
        let newArray = this.state.tags.filter(item => {
            return item !== tag;
        });
        this.setState({
            tags: newArray
        }, this.setCourses)
    };

    render() {
        return (
            <>
                <Card
                    style={{
                        width: "calc(20vw - 5px)",
                        marginLeft: "5px",
                        height: "calc(100vh - 10px)",
                        position: "fixed"
                    }}
                >
                    <Card.Body>
                        <Card.Title>Search and Filter</Card.Title>

                        <TagList
                            tags={this.state.tags}
                            removeTag={this.removeTag}
                        />
                        <button onClick={e => this.searchUnion(e)}>Union</button>
                        <button onClick={e => this.searchInter(e)}>Intersection</button>
                        <Form>
                            <Form.Group
                                controlId="formKeywords"
                                style={{ width: "100%" }}
                                onKeyPress={this.handleKeyPress}
                            >
                                <Form.Label>Search</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    autoComplete="off"
                                    ref={this.search}
                                />
                            </Form.Group>

                            <Form.Group controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    as="select"
                                    ref={this.subject}
                                    onClick={() => this.setCourses()}
                                >
                                    {this.getSubjectOptions()}
                                </Form.Control>
                            </Form.Group>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row"
                                }}
                            >
                                <Form.Group
                                    controlId="minimumCredits"
                                    onChange={() => this.setCourses()}
                                    onKeyDown={e =>
                                        this.handleCreditsKeyDown(e)
                                    }
                                >
                                    <Form.Label>Credits</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="minimum"
                                        autoComplete="off"
                                        ref={this.minimumCredits}
                                    />
                                </Form.Group>
                                <div
                                    style={{
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                        marginTop: "38px"
                                    }}
                                >
                                    to
                                </div>
                                <Form.Group
                                    controlId="maximumCredits"
                                    style={{ marginTop: "32px" }}
                                    onChange={() => this.setCourses()}
                                    onKeyDown={e =>
                                        this.handleCreditsKeyDown(e)
                                    }
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="maximum"
                                        autoComplete="off"
                                        ref={this.maximumCredits}
                                    />
                                </Form.Group>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default Sidebar;
