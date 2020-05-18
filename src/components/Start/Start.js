import React, { Component } from 'react';
import './Start.scss';
import SimpleModal from './SimpleModal/SimpleModal';
import FormikModal from './FormikModal/FormikModal';

class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            simpleModal: {
                showModal: false,
                email: '',
                password: '',
                checkbox: false,
                emailReq: false,
                passwordReq: false,
                checkboxReq: false
            },
            formikModal: {
                showModal: false,
                email: '',
                password: '',
                checkbox: false,
                emailReq: false,
                passwordReq: false,
                checkboxReq: false
            }
        }
        this.openSimpleModal = this.openSimpleModal.bind(this);
        this.openFormikModal = this.openFormikModal.bind(this);
        this.closeSimpleModal = this.closeSimpleModal.bind(this);
        this.closeFormikModal = this.closeFormikModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isRequired = this.isRequired.bind(this);
    }

    async openSimpleModal() {
        await this.setState({
            simpleModal: {
                ...this.state.simpleModal,
                showModal: true,
                email: '',
                password: '',
                checkbox: false,
                emailReq: false,
                passwordReq: false,
                checkboxReq: false
            }

        })

    }
    async openFormikModal() {
        await this.setState({
            formikModal: {
                ...this.state.formikModal,
                showModal: true,
                email: '',
                password: '',
                checkbox: false,
                emailReq: false,
                passwordReq: false,
                checkboxReq: false

            }

        })

    }
    async   closeSimpleModal(e) {
        e.preventDefault();
        const { email, password, checkbox } = this.state.simpleModal;
        if (!email || !password || !checkbox) {
            if (!email) {
                await this.setState({
                    simpleModal: { ...this.state.simpleModal, emailReq: true }
                })
            }
            if (!password) {
                await this.setState({
                    simpleModal: { ...this.state.simpleModal, passwordReq: true }
                })
            }
            if (!checkbox) {
                await this.setState({
                    simpleModal: { ...this.state.simpleModal, checkboxReq: true }
                })
            }

            return;
        } else {
            await this.setState({
                simpleModal: { ...this.state.simpleModal, showModal: false }
            })
        }

    }
    async closeFormikModal(values) {
        // e.preventDefault();
        const { email, password, checkbox } = values;
        await this.setState({

            formikModal: { ...this.state.formikModal, showModal: false, email, password, checkbox }
        })
        console.log(this.state.formikModal);
    }
    handleChange(e) {
        const { checked, name, value, type } = e.target;
        const valueToUpdate = type === "checkbox" ? checked : value;
        this.setState({
            simpleModal: { ...this.state.simpleModal, [name]: valueToUpdate }
        })
        console.log(e.target.value);
    }
    isRequired(e) {
        e.target.className = e.target.value ? `form__${e.target.name}` : `form__${e.target.name} req__border`;
        e.target.placeholder = e.target.value ? null : `${e.target.name} required`;
    }

    render() {
        return (
            <div className="Start">
                <div className="title">React forms</div>
                <button className="button" onClick={this.openSimpleModal}>Registration Simple</button>
                <button className="button" onClick={this.openFormikModal}>Registration Formik</button>
                {this.state.simpleModal.showModal ?
                    <SimpleModal
                        simpleModal={this.state.simpleModal}
                        closeSimpleModal={this.closeSimpleModal}
                        handleChange={this.handleChange}
                        isRequired={this.isRequired}
                    /> : null}
                {this.state.formikModal.showModal ?
                    <FormikModal
                        formikModal={this.state.formikModal}
                        closeFormikModal={this.closeFormikModal}
                        handleChange={this.handleChange}
                        isRequired={this.isRequired}
                    /> : null}


            </div>
        );
    }
}

export default Start;