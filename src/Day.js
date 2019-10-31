import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Day extends React.Component {
    // Day Component
    // Props:
    //  title (string)
    //  blocks, an array of objects with properties:
    //          - name (string)
    //          - start (float)
    //          - end (float))
    //  start (float) start as float
    //  end (float) end as float
    //  height (int) height - Must be numeric!
    //  width (int or string)

    getBlocks() {
        let blockComponents = [];

        this.props.blocks.forEach(blockData => {
            let pxHeight =
                (this.props.height * (blockData.end - blockData.start)) /
                (this.props.end - this.props.start);
            let pxY =
                (this.props.height * (blockData.start - this.props.start)) /
                (this.props.end - this.props.start);

            blockComponents.push(
                <Card
                    key={blockData.name}
                    style={{
                        height: pxHeight,
                        marginTop: pxY,
                        marginLeft: "1px",
                        backgroundColor: "#f0f6ff",
                        width: "calc(" + this.props.width + " - 4px)"
                    }}
                >
                    {blockData.name}
                </Card>
            );
        });

        return blockComponents;
    }

    render() {
        return (
            <Card
                style={{
                    borderRadius: 0,
                    backgroundColor: "blue",
                    width: this.props.width,
                    textAlign: "center",
                    position: "relative"
                }}
            >
                <Card.Header className="square">{this.props.title}</Card.Header>
                <Card.Body style={{ height: this.props.height, padding: 0 }}>
                    {this.getBlocks()}
                </Card.Body>
            </Card>
        );
    }
}

export default Day;
