import React, { Component } from 'react';

import { Button } from 'react-bulma-components';
import { Columns } from 'react-bulma-components';

import UseAnimations from 'react-useanimations';

import twitter from 'react-useanimations/lib/twitter';
import linkedin from 'react-useanimations/lib/linkedin';

class AbakkusPeoplePanel extends Component {

    getTwitterButton() {
        if (this.props.twitter !== "") {
            return (
                <Columns.Column>
                        <Button renderAs='a' href={this.props.twitter} target="_blank"><strong>Follow {this.props.name}&nbsp;&nbsp;</strong>
                            <UseAnimations animation={twitter} autoplay={true} loop={true}/>
                        </Button>
                    </Columns.Column>
            );
        }
        return;
    }

    getLinkedinButton() {
        if (this.props.linkedin !== "") {
            return (
                <Columns.Column>
                        <Button renderAs='a' href={this.props.linkedin} target="_blank"><strong>Follow {this.props.name}&nbsp;&nbsp;</strong>
                            <UseAnimations animation={linkedin} autoplay={true} loop={true}/>
                        </Button>
                    </Columns.Column>
            );
        }
        return;
    }

    render() {
        return (
            <div>
                <b><p style={{ fontSize: '200%' }} >{this.props.name}</p></b>
                <p style={{ fontSize: '140%' }}>{this.props.position}</p><br />
                <p style={{ fontSize: '110%' }}>{this.props.description}</p><br />
                <Columns>
                    { this.getTwitterButton() }
                    { this.getLinkedinButton() }
                    <Columns.Column />
                </Columns>
            </div>
        )
    }
}

export default AbakkusPeoplePanel;