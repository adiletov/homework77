import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const FormPublication = (props) => {
    return (
            <Form onSubmit={props.submitFormHandler}>
                <FormGroup row>
                    <Label for="author">Author</Label>
                    <Input
                        type="text"
                        name="author"
                        id="author"
                        onChange={props.onChangeHandler}
                    />
                </FormGroup>
                <FormGroup row>
                    <Label for="description">Description</Label>
                    <Input
                        required
                        type="textarea"
                        name="description"
                        id="description"
                        onChange={props.onChangeHandler}
                    />
                </FormGroup>
                <FormGroup row>
                    <Label for="image">Image</Label>
                    <Input
                        type="file"
                        name="image"
                        id="image"
                        onChange={props.fileChangeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" onClick={()=>{props.onClickModal(false)}}>Cancel</Button>{' '}
                    <Button type="submit" color="secondary">OK</Button>
                </FormGroup>
            </Form>
    );
};

export default FormPublication;