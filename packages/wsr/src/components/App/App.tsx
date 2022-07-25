// @ts-nocheck

import React, { useState } from 'react';
import {
  Page,
  Layout,
  Cell,
  Card,
  Box,
  Input,
  Dropdown,
  Button,
  FormField,
  Text,
  Breadcrumbs,
  Heading,
  AddItem,
  IconButton,
  WixStyleReactProvider,
  DropdownLayoutValueOption,
} from 'wix-style-react';

import { DeleteSmall } from 'wix-ui-icons-common';

const App = () => {
  const options = [
    { id: 0, value: 'Red' },
    { id: 1, value: 'Blue' },
    { id: 2, value: 'Green' },
    { id: 4, value: 'Yellow' },
    { id: 5, value: 'Pink' },
  ];

  const [firstName, setFisrtName] = useState('');
  const [lastName, setLastName] = useState('');
  const [color, setColor] = useState<DropdownLayoutValueOption | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    color: '',
  });
  const isSubmitDisabled = !(firstName && lastName);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({ firstName, lastName, color: color?.value });
  };

  return (
    <WixStyleReactProvider>
      <Button size="medium">clear </Button>
      <Button
        disabled={isSubmitDisabled}
        onClick={onSubmit}
        dataHook="submit"
        type="submit"
        size="medium"
      >
        Submit
      </Button>
      <Layout>
        <Cell span={8}>
          <Card.Header title="first card" subtitle="nice" />
          <Card.Divider />
          <Card.Content>
            <Layout>
              <Cell span={6}>
                <FormField label="An input field" required>
                  <Input
                    dataHook="first-name-change-input"
                    onChange={(e) => {
                      setFisrtName(e.target.value);
                    }}
                  />
                </FormField>
              </Cell>
              <Cell span={6}>
                <FormField label="An input field" required>
                  <Input
                    dataHook="last-name-change-input"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </FormField>
              </Cell>
              <Cell span={11}>
                <FormField label="An input field" required>
                  <Dropdown
                    placeholder="Choose color"
                    dataHook="select-color"
                    options={options}
                    selectedId={color?.id}
                    onSelect={(option) => setColor(option)}
                  />
                </FormField>
              </Cell>
              <Cell span={1}>
                <IconButton>
                  <DeleteSmall />
                </IconButton>
              </Cell>
            </Layout>
          </Card.Content>
        </Cell>
        <Cell span={4}>
          <Card.Header title="first card" subtitle="nice" />
          <Card.Divider />
          <Card.Content>
            <Text dataHook="first-name-text">{formData.firstName}</Text>
            <br />
            <Text dataHook="last-name-text">{formData.lastName}</Text>
            <br />
            <Text dataHook="color-text">{formData.color}</Text>
          </Card.Content>
        </Cell>
      </Layout>
    </WixStyleReactProvider>
  );
};

export default App;
