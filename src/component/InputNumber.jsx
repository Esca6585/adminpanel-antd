import React, { useState  } from 'react';
import  { CountryPhoneInput, ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import './InputNumber.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { Form, Input, message } from 'antd';

const InputNumber = () => {
  const [value, setValue] = useState()
  const [form] = Form.useForm();

  return (
    <div className="phone">
      <ConfigProvider locale={en}>
        <CountryPhoneInput 
          defaultCountry="IT"
          dropdownClassName="bottom-dropdown"
          placeholder='000 0000000'
          type="number"
        />
        
      </ConfigProvider>
      
      <br/>

      <Form>
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Support text',
              type: 'number',
            },
            { whitespace: true },
            {
              pattern: new RegExp(/^[0-9@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
              message: "field does not accept numbers"
            }
          ]}
        >
          <PhoneInput
            defaultCountry="IT"
            placeholder="000 0000000"
            flags={flags}/>
            
        </Form.Item>
      </Form>

    </div>
  );
};

export default InputNumber;