import React from 'react';
import { shallow } from "enzyme";
import Component from "../Component";

describe("Component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Component />);
  });

  it("should be null", () => {
      const data = wrapper.find('Show').prop('data');
      expect(data).toBe(null);
  });

  describe('clicking on the button', () => {
    beforeAll(() => {
      wrapper.find('button').simulate('click');
    })

    it('should be between 0 and 1', () => {
      const data = wrapper.find('Show').prop('data');
      expect(data).toBeGreaterThanOrEqual(0);
      expect(data).toBeLessThanOrEqual(1);
    })
  })
});
