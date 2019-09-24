import React, { Component } from 'react'
import { Form, Input, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Button, Block } from 'components'
import 'antd/dist/antd.css'


class RegisterForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { success } = false
        return (
            <div>
                <div className='auth_top'>
                    <h2>Sign Up</h2>
                    <p>To enter the chat you need to register</p>
                </div>

                <Block>
                    {success ?
                        (<Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item validateStatus="success" hasFeedback>
                                <Input
                                    prefix={
                                        <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    placeholder="E-Mail"
                                    size='large'
                                />

                            </Form.Item>
                            <Form.Item validateStatus="success" hasFeedback>
                                <Input
                                    prefix={
                                        <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    placeholder="Username"
                                    size='large'
                                />

                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item validateStatus="success" hasFeedback>
                                <Input
                                    prefix={
                                        <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    placeholder="Confirm Password"
                                    size='large'
                                />

                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Sign Up
                           </Button>
                            </Form.Item>
                            <Link className='auth__register-link' to='/login'>Login to account</Link>
                        </Form>
                        ) : (
                            <div className='auth__success-block'>
                                <div className='auth__icon'>
                                <Icon type="info-circle" style={{ fontSize: '46px', color: '#08c' }} />                                </div>
                                <h3>Verify your account</h3>
                                <p>Log in to your email to confirm your account</p>
                            </div>

                        )}
                </Block>
            </div>
        );
    }
}

export default RegisterForm

