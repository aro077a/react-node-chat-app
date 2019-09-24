import React, { Component } from 'react'
import { Form, Input, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Button, Block } from 'components'


class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        return (
            <div>
                <div className='auth_top'>
                    <h2>Login</h2>
                    <p>Please Log in to your account</p>
                </div>

                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
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
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log In
                           </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/register'>Register</Link>
                    </Form>
                </Block>
            </div>
        )
    }
}

export default LoginForm

