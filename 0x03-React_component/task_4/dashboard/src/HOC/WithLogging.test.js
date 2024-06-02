import React from "react";
import { shallow } from 'enzyme';
import './WithLogging';
import '../Login/Login';

describe("test the HOC component", () => {

  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs on mount and unmount for a pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <p />);

    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs on mount and unmount for the Login component', () => {
    const WrappedComponent = WithLogging(Login);

    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
})