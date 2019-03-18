import React, { Component, Fragment } from 'react';

import Toggle from './js/Toggle';
import ToggleItemWrapper from './js/ToggleItemWrapper';

import Row from '../Row';
import Column from '../Column';

Toggle.Item = ToggleItemWrapper;

export default class TestToggle extends Component {
  state = {
    active: false,
    activeMultiple: 'option2',
  };

  constructor(props) {
    super(props);
    this.toggleMultipleOnChange = this.toggleMultipleOnChange.bind(this);
    this.toggleOnChange = this.toggleOnChange.bind(this);
  }

  toggleOnChange(value) {
    this.setState({
      active: value,
    });
  }

  toggleMultipleOnChange(value) {
    this.setState({
      activeMultiple: value,
    });
  }

  render() {
    const { active, activeMultiple } = this.state;

    return (
      <Fragment>
        <Row>
          <Column size="md-12 lg-12">
            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="primary"
              size="lg"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>

            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="success"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>

            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="danger"
              size="sm"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>

            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="warning"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>
          </Column>
        </Row>

        <br />
        <br />
        <Row>
          <Column size="md-12 lg-12">
            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="primary-gradient"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>

            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="success-gradient"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>

            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="danger-gradient"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>

            <Toggle
              value={active}
              onChange={this.toggleOnChange}
              theme="warning-gradient"
            >
              <Toggle.Item
                label="Option"
                name="option"
              />
            </Toggle>
          </Column>
        </Row>

        <br />
        <br />
        <Row>
          <Column size="md-12 lg-12">
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="success-gradient"
              type="multiple"
              separated
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="primary"
              type="multiple"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="success"
              type="multiple"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="danger"
              type="multiple"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="warning"
              type="multiple"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="primary-gradient"
              type="multiple"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="success-gradient"
              type="multiple"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="danger-gradient"
              type="multiple"
              size="sm"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
            <br />
            <br />
            <Toggle
              value={activeMultiple}
              onChange={this.toggleMultipleOnChange}
              theme="warning-gradient"
              type="multiple"
              size="lg"
            >
              <Toggle.Item
                label="short"
                name="option"
                value="option1"
              />
              <Toggle.Item
                label="medium name"
                name="option"
                value="option2"
              />
              <Toggle.Item
                label="very long long name"
                name="option"
                value="option3"
              />
            </Toggle>
          </Column>
        </Row>
      </Fragment>
    );
  }
}

export { Toggle };
export { default as FieldToggle } from './js/FieldToggle';
