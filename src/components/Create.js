import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  InputGroupButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

function Create(props) {
  return (
    <>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1 mb-3">
          <h1 class="h2">Create Action</h1>
          <div>
            <button class="btn btn-primary">Import Actions</button>
          </div>
        </div>
        <Form>
          <FormGroup>
            <Row>
              <label class="col-2 col-form-label">Action</label>
              <div class="col-7">
                <Input type="text" />
              </div>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <label class="col-2 col-form-label">Priority</label>
              <div class="col-7">
                <Input type="select" name="select">
                  <option>--</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </div>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <label class="col-2 col-form-label">Assign To</label>
              <div class="col-7">
                <Input
                  type="text"
                  class="form-control"
                  placeholder="Member / Department / All"
                ></Input>
              </div>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <label class="col-2 col-form-label">Additional Notes</label>
              <div class="col-7">
                <Input type="text" />
              </div>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button color="primary">Create</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </main>
    </>
  );
}

export default Create;
