import React, {Component} from 'react';
import Header from "../Header/Header";
import {Container, Modal, ModalBody, Spinner} from "reactstrap";
import {connect} from "react-redux";
import {addNewPublication, getPublications} from "../../Store/actionOrders";
import FormPublication from "../FormPublication/FormPublication";
import PublicationImage from "../PublicationImage/PublicationImage";
import './Content.css';

class Content extends Component {
    state={
        modal: false,
        form: {
            author: '',
            description: '',
            image : '',
        }

    };
    componentDidMount() {
        this.props.getPublications()
    }

    onChangeHandler = event => {
        this.setState({form : {
            ...this.state.form,
            [event.target.name] : event.target.value
        }})
    };
    fileChangeHandler = event => {
        this.setState({form: {
            ...this.state.form,
            image: event.target.files[0]
            }})
    };

    onClickModal=(boolean)=>{
      this.setState({modal: boolean})
    };

    submitFormHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();

        Object.keys(this.state.form).forEach(key =>
        formData.append(key, this.state.form[key]));

        await this.props.addNewPost(formData);
        await this.setState({modal : false , form: {author: "", image: "", description: ""}})
    };

    render() {
        return (
            <div className="block">
                <Header
                    onClickModal={()=>this.onClickModal(true)}
                />
                {this.props.loading ?
                    <Container>
                        <Modal isOpen={this.state.modal}>
                            <ModalBody>
                                <FormPublication
                                    submitFormHandler={this.submitFormHandler}
                                    onChangeHandler={this.onChangeHandler}
                                    fileChangeHandler={this.fileChangeHandler}
                                    onClickModal={this.onClickModal}
                                />
                            </ModalBody>
                        </Modal>
                        {this.props.publications && this.props.publications.map(publication=>
                            <div key={publication.id} className="cardBlock">
                                <PublicationImage
                                    image={publication.image}
                                    author={publication.author}
                                />
                                <div className="cardText">
                                    <h4>{publication.author} <span className="date">{publication.date}</span></h4>
                                    <div>
                                        <p>{publication.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Container> : <Spinner/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    publications : state.publications,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    addNewPost: (publication)=> dispatch(addNewPublication(publication)),
    getPublications: () => dispatch(getPublications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);