import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Label,
  FormText,
} from "reactstrap";

function Create(props) {
  return (
    <>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-1 mb-3">
          <h3>Create Action</h3>
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
          <FormGroup check>
            <Row>
              <Col className="pb-3" md={{ size: 9, offset: 2 }}>
                  <Input type="checkbox" />Notify Members
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button className="btn-sm btn-outline-primary">Create</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
        <hr />
        <h3 className="pb-1 mb-3">Import Action</h3>
        <Form>
          <FormGroup>
            <Row>
              <Label className="col-2 col-form-label">Action List File</Label>
              <div className="col-7">
                <Input type="file" />
                <FormText color="muted">Accepted extensions: .csv.</FormText>
              </div>
            </Row>
          </FormGroup>
          <FormGroup check>
            <Row>
              <Col className="pb-3" md={{ size: 9, offset: 2 }}>
                  <Input type="checkbox" />Notify Members
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md={{ size: 10, offset: 2 }}>
                <button class="btn btn-sm btn-outline-primary">
                  Import Actions
                </button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </main>
    </>
  );
}

export default Create;
