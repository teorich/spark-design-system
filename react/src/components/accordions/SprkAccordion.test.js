/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAccordion from './SprkAccordion';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkAccordion:', () => {
  it('should display a ul element with the correct base class', () => {
    const wrapper = mount(
      <SprkAccordion>
        <SprkAccordionItem
          heading="This is an accordion heading"
          contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
          idString="accordion-item-1"
          analyticsString="analytics_string_goes_here"
        >
          <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            This is an example of multiple HTML elements used for the content in
            an accordion item.
          </p>

          <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
            <li>List Item One</li>

            <li>List Item Two</li>

            <li>List Item Three</li>
          </ul>
        </SprkAccordionItem>

        <SprkAccordionItem
          heading="This is an accordion heading"
          contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
          idString="accordion-item-1"
          analyticsString="analytics_string_goes_here"
        >
          <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            This is an example of multiple HTML elements used for the content in
            an accordion item.
          </p>

          <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
            <li>List Item One</li>

            <li>List Item Two</li>

            <li>List Item Three</li>
          </ul>
        </SprkAccordionItem>

        <SprkAccordionItem
          heading="This is an accordion heading"
          contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
          idString="accordion-item-1"
          analyticsString="analytics_string_goes_here"
        >
          <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            This is an example of multiple HTML elements used for the content in
            an accordion item.
          </p>

          <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
            <li>List Item One</li>

            <li>List Item Two</li>

            <li>List Item Three</li>
          </ul>
        </SprkAccordionItem>
      </SprkAccordion>,
    );
    expect(wrapper.find('ul.sprk-c-Accordion.sprk-o-VerticalList').length).toBe(
      1,
    );
  });

  it(`should not render out an accordion item for elements that are
  not SprkAccordionItem`, () => {
    const wrapper = mount(
      <SprkAccordion>
        <p>Test text</p>
        <SprkAccordionItem
          heading="This is an accordion heading"
          contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
          idString="accordion-item-1"
          analyticsString="analytics_string_goes_here"
        >
          <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            This is an example of multiple HTML elements used for the content in
            an accordion item.
          </p>

          <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
            <li>List Item One</li>

            <li>List Item Two</li>

            <li>List Item Three</li>
          </ul>
        </SprkAccordionItem>

        <SprkAccordionItem
          heading="This is an accordion heading"
          contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
          idString="accordion-item-1"
          analyticsString="analytics_string_goes_here"
        >
          <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            This is an example of multiple HTML elements used for the content in
            an accordion item.
          </p>

          <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
            <li>List Item One</li>

            <li>List Item Two</li>

            <li>List Item Three</li>
          </ul>
        </SprkAccordionItem>

        <SprkAccordionItem
          heading="This is an accordion heading"
          contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
          idString="accordion-item-1"
          analyticsString="analytics_string_goes_here"
        >
          <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            This is an example of multiple HTML elements used for the content in
            an accordion item.
          </p>

          <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
            <li>List Item One</li>

            <li>List Item Two</li>

            <li>List Item Three</li>
          </ul>
        </SprkAccordionItem>
      </SprkAccordion>,
    );
    expect(wrapper.find(SprkAccordionItem).length).toBe(3);
  });

  it('should use custom open icon when open', () => {
    const wrapper = mount(
      <SprkAccordion>
        <SprkAccordionItem heading="title" iconNameOpen="pinterest" isOpen>
          content
        </SprkAccordionItem>
        <SprkAccordionItem heading="title2">content</SprkAccordionItem>
      </SprkAccordion>,
    );

    expect(
      wrapper.find('use').first().getDOMNode().getAttribute('xlink:href'),
    ).toBe('#pinterest');
  });

  it('should use custom closed icon when closed', () => {
    const wrapper = mount(
      <SprkAccordion>
        <SprkAccordionItem heading="title" iconNameClosed="facebook">
          content
        </SprkAccordionItem>
        <SprkAccordionItem heading="title2">content</SprkAccordionItem>
      </SprkAccordion>,
    );

    expect(
      wrapper.find('use').first().getDOMNode().getAttribute('xlink:href'),
    ).toBe('#facebook');
  });
});
