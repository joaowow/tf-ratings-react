import React from 'react';
import Ratings from './ratingsWrapper';

// Test tools
import chai, { expect } from 'chai'
import { mount } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Component wrapped in HOC - Medium sized: ', function () {
    let component = null;
    beforeEach(function() {
        component = mount( <Ratings size="m" /> );
    })
    it('renders with the specified medium class', function () {
        expect(component).to.have.className('stars_medium');
    });
    it("renders 5 medium sized stars", function() {
        const stars = component.find('input');
        expect(stars.length).to.equal(5);
    });
});

describe('Component wrapped in HOC - Large sized: ', function () {
    let component = null;
    beforeEach(function() {
        component = mount( <Ratings size="large" /> );
    })
    it('renders with the specified large class', function () {
        expect(component).to.have.className('stars_large');
    });
    it("renders 5 large sized stars", function() {
        const stars = component.find('input');
        expect(stars.length).to.equal(5);
    });
});

describe('Component wrapped in HOC - Small sized: ', function () {
    let component = null;
    beforeEach(function() {
        component = mount( <Ratings size="s" /> );
    })
    it('renders with the specified small class', function () {
        expect(component).to.have.className('stars_small');
    });
    it("renders 5 small sized stars", function() {
        const stars = component.find('input');
        expect(stars.length).to.equal(5);
    });
});
