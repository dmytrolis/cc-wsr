import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {
  inputTestkitFactory,
  buttonTestkitFactory,
  textTestkitFactory,
  dropdownTestkitFactory,
} from 'wix-style-react/dist/testkit';

describe('App', () => {
  it('it should display submitted info', async () => {
    const { baseElement } = render(<App />);

    const firstNameInputDriver = inputTestkitFactory({
      wrapper: baseElement,
      dataHook: 'first-name-change-input',
    });
    const firstNameTextDriver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: 'first-name-text',
    });

    const lastNameInputDriver = inputTestkitFactory({
      wrapper: baseElement,
      dataHook: 'last-name-change-input',
    });
    const lastNameTextDriver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: 'last-name-text',
    });

    const selectColorDriver = dropdownTestkitFactory({
      wrapper: baseElement,
      dataHook: 'select-color',
    });
    const colorTextDriver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: 'color-text',
    });

    const buttonDriver = buttonTestkitFactory({
      wrapper: baseElement,
      dataHook: 'submit',
    });

    firstNameInputDriver.enterText('John');
    lastNameInputDriver.enterText('Smith');
    selectColorDriver.driver.selectOptionById(0);
    await buttonDriver.click();

    expect(firstNameTextDriver.getText()).toEqual('John');
    expect(lastNameTextDriver.getText()).toEqual('Smith');
    expect(colorTextDriver.getText()).toBe('Red');
  });

  it('it shouldnt submit info without the required data', async () => {
    const { baseElement } = render(<App />);
    const firstNameInputDriver = inputTestkitFactory({
      wrapper: baseElement,
      dataHook: 'first-name-change-input',
    });
    const firstNameTextDriver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: 'first-name-text',
    });
    const buttonDriver = buttonTestkitFactory({
      wrapper: baseElement,
      dataHook: 'submit',
    });

    firstNameInputDriver.enterText('John');
    await buttonDriver.click();

    expect(firstNameTextDriver.getText()).not.toEqual('John');
  });
});
