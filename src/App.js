import './App.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import React, { useState } from 'react';
import { Form, Input, Row, Col, Card, Typography, Button } from 'antd';
const { Title } = Typography;

function App() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const [clicked, setClicked] = useState(false);

  const [form] = Form.useForm();

  const onFinish = () => {
    alert('Details submitted successfully');
      // window.location.reload();
    setClicked(true);
    setTimeout(() => {
          window.location.reload();
        }, 5000);
  };
  
    const onFinishFailed = () => {
      alert('Sorry, try again later');
      // window.location.reload();
    };
  
  return (
     <>
    <div className="App">
      <Card title="" bordered={true}>
        <Title style={{fontFamily:"fantasy", fontSize:25, border:"1rem"}} level={3} className="heading">
            CREDIT CARD FORM - NAVEEN R H
          </Title>
          <div style={{marginBottom: "-4.5rem" }}>
             <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
            focused={focus}
            
      /> 
        </div>
    
          <Card style={{ backgroundColor: "white",marginBottom: "-rem", width: "30rem", display: "flex", alignItems: 'center', marginLeft: "10rem", borderRadius: "1rem", paddingTop:"5rem" }}>
          <Form
          onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
        
          <Row>
            <Col xs={12} sm={12} md={12} ml={12} lg={12} xl={8} xxl={6}>
                <Form.Item
                  className="formfiled"
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Card Number",
                    },
                    {
                      min: 16,
                      message: "Min 16 digits are allowed",
                    },
                    {
                      max: 17,
                      message: "Max 16 digits are allowed",
                    },
                  ]}
                  label={
                    <label style={{ fontWeight: 500, fontSize: 12 }}>Card Number</label>
                  }
                  style={{ textAlign: "left", marginLeft:"2rem" }}
                >
                  <Input
                    type="number"
                    className="formfiled"
                    style={{ width: "80%",  }}
                  placeholder="Number"
                  onChange={e => setNumber(e.target.value)}
                  onFocus={e=>setFocus(e.target.name)}
                  />
                </Form.Item>
              </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                <Form.Item
                  className="formfiled"
                  label={<label style={{ fontWeight: 500, fontSize: 12 }}>Card Name</label>}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Card Holder Name",
                    },

                    {
                      pattern: /^[A-Za-z ]+$/,
                      message: "Only Alphabets are allowed",
                    },
                    {
                      min: 3,
                      message: "Min 3 letters required",
                    },
                    {
                      max: 17,
                      message: "Max 16 letters are allowed",
                    },
                  ]}
                  style={{ textAlign: "left", marginLeft:"2rem" }}
                >
                  <Input
                    type="text"
                    placeholder="Name"
                    style={{ width: "80%", textAlign: "left" }}
                  className="formfiled"
                  onChange={e => setName(e.target.value)}
                    onfocus={e=>setFocus(e.target.name)}
                  />
                </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                <Form.Item
                  className="formfiled"
                  name="expiry"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Expiry",
                    },
                    {
                      min: 2,
                      message: "Min 4 numbers required",
                    },
                    {
                      max: 4,
                      message: "Max 4 numbers are allowed",
                    },
                  ]}
                  label={
                    <label style={{ fontWeight: 500, fontSize: 12 }}>Expiry</label>
                  }
                 style={{ textAlign: "left", marginLeft:"2rem" }}
                >
                  <Input
                    type="number"
                    className="formfiled"
                    style={{ width: "80%", textAlign: "left" }}
                  placeholder="Expiry"
                  onChange={e => setExpiry(e.target.value)}
                  onFocus={e=>setFocus(e.target.name)}
                  />
                </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                <Form.Item
                  className="formfiled"
                  name="cvc"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter CSV Number",
                    },
                    {
                      min: 3,
                      message: "Min 3 numbers required",
                    },
                    {
                      max: 5,
                      message: "Max 5 numbers are allowed",
                    },
                  ]}
                  label={
                    <label style={{ fontWeight: 500, fontSize: 12 }}>Expiry</label>
                  }
                  style={{ textAlign: "left", marginLeft:"2rem" }}
                >
                  <Input
                    type="number"
                    className="formfiled"
                    style={{ width: "80%", textAlign: "left" }}
                  placeholder="CVC"
                  onChange={e => setCvc(e.target.value)}
                  onFocus={e=>setFocus(e.target.name)}
                  />
                </Form.Item>
              </Col>
             
                
        
                
              </Row>
              </Form>
              
              <div style={{marginLeft: "1rem"}}>
               <Button
                type="primary"
                htmlType="submit"
                className="button button1"
              >
                Submit
                </Button>
              </div>
      
      </Card>
      </Card>
      </div>
      <br></br>
      { clicked ? <Card>
          <Title>SAVED DATA</Title>
          <div><h4>Card Number : {number}</h4></div>
          <div><h4>Card Holder Name : {name}</h4></div>
          <div><h4>Expiry : {expiry}</h4></div>
          <div><h4>CVC : {cvc}</h4></div>
        </Card> : null}
      
     </>
  );
}

export default App;