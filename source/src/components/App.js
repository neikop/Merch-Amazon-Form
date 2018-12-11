import React, {Component} from 'react';
import {Row, Col, Form, Select, Checkbox, Input, Button, notification} from 'antd';
import axios from 'axios';
import './App.css';

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const InputTextArea = Input.TextArea;

notification.config({
  placement: 'topRight',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      productType: '1',
      marketplace: 'Amazon.com',

      backgrounds: [{index: -1, value: '#f8f8f8'}],
      front: '',
      frontName: '',
      back: '',
      backName: '',

      fitType: ['Men', 'Women'],

      checkedColors: [],
      pricePrefix: '$',
      listPrice: '19.99',
      description: '',

      validTypes: true,
      validColor: true,
      validPrice: true,
      isSubmit: false,

      find: '',
      replace: '',
    };

    this.inputFront = React.createRef();
    this.inputBack = React.createRef();
  }

  componentDidMount() {
    const jsonText = localStorage.getItem('data');
    if (jsonText) {
      const data = JSON.parse(jsonText);
      this.setState({...data});
    }
    localStorage.removeItem('data');
  }

  allColors = [
    {name: 'Dark Heather', background: 'url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/DH-swatch._V533395604_.png)'},
    {name: 'Heather Grey', background: 'url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/HG-swatch._V533395604_.png)'},
    {name: 'Heather Blue', background: 'url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/HB-swatch._V533395604_.png)'},
    {name: 'Black', background: '#000'},
    {name: 'Navy', background: '#15232b'},
    {name: 'Silver', background: '#cfd1d1'},
    {name: 'Royal', background: '#1c4086'},
    {name: 'Brown', background: '#31261d'},
    {name: 'Slate', background: '#818189'},
    {name: 'Red', background: '#b71111'},
    {name: 'Asphalt', background: '#3f3e3c'},
    {name: 'Grass', background: '#5e9444'},
    {name: 'Olive', background: '#4a4f26'},
    {name: 'Kelly Green', background: '#006136'},
    {name: 'Baby Blue', background: '#8fb8db'},
    {name: 'White', background: '#f5f5f5'},
    {name: 'Lemon', background: '#f0e87b'},
    {name: 'Cranberry', background: '#6e0a25'},
    {name: 'Pink', background: '#f8a3bc'},
    {name: 'Orange', background: '#ff5c39'},
    {name: 'Purple', background: '#514689'},
  ];

  fiveColors = [
    {name: 'Heather Grey', background: 'url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/HG-swatch._V533395604_.png)'},
    {name: 'Dark Heather', background: 'url(https://m.media-amazon.com/images/G/01/gear/portal/potter/swatches/DH-swatch._V533395604_.png)'},
    {name: 'Black', background: '#000'},
    {name: 'Navy', background: '#15232b'},
    {name: 'Royal', background: '#1c4086'},
  ];

  dimsFront = [
    {width: 4500, height: 5400},
    {width: 4500, height: 5400},
    {width: 4500, height: 5400},
    {width: 4500, height: 5400},
    {width: 4500, height: 4050},
    {width: 485, height: 485},
  ];

  dimsBack = [{width: 4500, height: 5400}, {width: 4500, height: 5400}, {width: 4500, height: 5400}, {width: 4500, height: 5400}, {width: 4500, height: 5400}];

  availValues = [
    [12.87, 14.99, 18.16, 19.99],
    [14.87, 19.99, 20.14, 24.99],
    [18.99, 24.99, 25.39, 32.99],
    [28.46, 35.99, 34.04, 39.99],
    [32.48, 39.99, 38.49, 46.99],
    [11.72, 14.99, 11.72, 14.99],
  ];

  getValidate = () => {
    let validTypes = 1;
    let validColor = 1;
    let validPrice = 1;
    const {fitType, checkedColors, listPrice} = this.state;

    if (fitType.length === 0) validTypes = false;

    if (checkedColors.length === 0 || checkedColors.length > 5) validColor = false;

    const {productType, front, back} = this.state;
    const price = parseFloat(listPrice);
    const max = 80;
    const min = front && back ? this.availValues[productType - '1'][2] : this.availValues[productType - '1'][0];
    if (!price || price < min || price > max) validPrice = false;

    this.setState({validTypes, validColor, validPrice});
    return !validTypes || !validColor || !validPrice;
  };

  getError = (message) => notification.error({message}) || true;

  saveData = (data, fileName) => {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    const json = JSON.stringify(data);
    const blob = new Blob([json], {type: 'octet/stream'});
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  handleClickSave = () => {
    this.setState({isSubmit: true});
    if (this.getValidate()) return;

    const {front, back, description} = this.state;
    if (!front && !back) if (this.getError('Please upload at least 1 artwork.')) return;

    const desc = description.split('\n');
    if (!desc[0] || desc[0].length > 50) if (this.getError("Please write your product's brand (50 chracters maximum)")) return;
    if (!desc[1] || desc[1].length > 60) if (this.getError("Please write your product's title (60 chracters maximum)")) return;
    if (desc[2] && desc[2].length > 256) if (this.getError("Feature key 1's maximum characters is 256! (current is " + desc[2].length + ')')) return;
    if (desc[3] && desc[3].length > 256) if (this.getError("Feature key 2's maximum characters is 256! (current is " + desc[3].length + ')')) return;
    if (desc[4] && (desc[4].length < 75 || desc[4].length > 2000))
      if (this.getError("Product description's characters must be between 75 and 2000 (current is " + desc[4].length + ')')) return;

    const state = {...this.state};
    let fileName = state.frontName || state.backName;
    fileName = fileName.replace('.png', '');
    let productType = '';
    if (state.productType === '1') productType = 'Standard-T-Shirt';
    if (state.productType === '2') productType = 'Premium-T-Shirt';
    if (state.productType === '3') productType = 'Long-sleeve-T-Shirt';
    if (state.productType === '4') productType = 'Sweatshirt';
    if (state.productType === '5') productType = 'Pullover-Hoodie';
    if (state.productType === '6') productType = 'Pop-Sockets';
    fileName = `${productType}-${fileName}.json`;
    const data = {
      productType: state.productType,
      marketplace: state.marketplace,
      front: state.frontName,
      back: state.backName,
      fitType: state.fitType,
      checkedColors: state.checkedColors,
      listPrice: state.listPrice,
      description: state.description,
    };
    this.saveData(data, fileName);
  };

  handleClickCopy = () => {
    const state = {...this.state};
    const data = {
      productType: state.productType,
      marketplace: state.marketplace,
      backgrounds: state.backgrounds,
      fitType: state.fitType,
      checkedColors: state.checkedColors,
      listPrice: state.listPrice,
      description: state.description,
    };
    localStorage.setItem('data', JSON.stringify(data));
    window.open('./');
  };

  handleClickLoadTemplate = () => {
    axios.get('/template').then((response) => {
      notification.success({message: 'Template has been loaded!'});
      const template = response.data;
      this.setState({...template});
    });
  };

  handleClickSaveTemplate = () => {
    const state = {...this.state};
    const body = {
      productType: state.productType,
      marketplace: state.marketplace,
      backgrounds: state.backgrounds,
      fitType: state.fitType,
      checkedColors: state.checkedColors,
      listPrice: state.listPrice,
      description: state.description,
    };
    axios.post('/template', body).then((response) => {
      notification.success({message: 'Template has been saved!'});
    });
  };

  handleChangeProductType = (productType) => {
    const resetColors = () => this.setState({backgrounds: [{index: -1, value: '#f8f8f8'}], checkedColors: []});
    const resetFront = () => this.setState({front: '', frontName: ''});
    const resetBack = () => this.setState({back: '', backName: ''});
    const resetFitType = () => this.setState({fitType: ['Men', 'Women']});

    const oldType = this.state.productType;

    if (productType === '1') this.setState({listPrice: '19.99'});
    else if (productType === '2') this.setState({listPrice: '21.99'});
    else if (productType === '3') this.setState({listPrice: '27.99'});
    else if (productType === '4') this.setState({listPrice: '35.99'});
    else if (productType === '5') this.setState({listPrice: '40.99'});
    else if (productType === '6') this.setState({listPrice: '14.99'});

    if (oldType === '1' || oldType === '2') {
      if (productType === '3' || productType === '4') {
        resetColors();
      }
      if (productType === '5') {
        resetColors();
        resetFront();
      }
      if (productType === '6') {
        resetColors();
        resetFront();
      }
    }
    if (oldType === '3' || oldType === '4') {
      if (productType === '1' || productType === '2') {
        resetFitType();
      }
      if (productType === '5') {
        resetFront();
      }
      if (productType === '6') {
        resetColors();
        resetFront();
      }
    }
    if (oldType === '5') {
      if (productType === '1' || productType === '2') {
        resetFront();
        resetFitType();
      }
      if (productType === '3' || productType === '4') {
        resetFront();
      }
      if (productType === '6') {
        resetColors();
        resetFront();
      }
    }
    if (oldType === '6') {
      if (productType === '1' || productType === '2') {
        resetFront();
        resetBack();
        resetFitType();
      }
      if (productType === '3' || productType === '4') {
        resetFront();
        resetBack();
      }
      if (productType === '5') {
        resetFront();
        resetBack();
      }
    }

    this.setState({
      productType,
      marketplace: 'Amazon.com',
      pricePrefix: '$',

      validTypes: true,
      validColor: true,
      validPrice: true,
      isSubmit: false,
    });
  };

  handleChangeMarketplace = (marketplace) => {
    this.setState({marketplace});
    if (marketplace === 'Amazon.com') {
      this.setState({listPrice: '19.99'});
      this.setState({pricePrefix: '$'});
    } else if (marketplace === 'Amazon.co.uk') {
      this.setState({listPrice: '17.99'});
      this.setState({pricePrefix: '£'});
    } else if (marketplace === 'Amazon.de') {
      this.setState({listPrice: '18.99'});
      this.setState({pricePrefix: '€'});
    }
  };

  handleChangeFitType = (fitType) => {
    this.setState({fitType}, () => this.getValidate());
  };

  handleChangeColor = (checkedValues) => {
    if (checkedValues.length <= 5) {
      this.setState({checkedColors: checkedValues}, () => this.getValidate());
    }
  };

  handleChangeColorChecked = (checked, index) => {
    const {productType, checkedColors, backgrounds} = this.state;
    const items = productType === '1' || productType === '2' ? this.allColors : this.fiveColors;

    if (checked) {
      if (checkedColors.length < 5) {
        backgrounds.push({index, value: items[index].background});
      }
    } else {
      const remove = backgrounds.findIndex((color) => color.index === index);
      backgrounds.splice(remove, 1);
    }
    this.setState({backgrounds});
  };

  handleChangeListPrice = (event) => {
    const value = event.target.value;
    if (/^[0-9]{1,}\.?[0-9]{0,2}$/.test(value) || value === '') {
      this.setState({listPrice: value}, () => this.getValidate());
    }
  };

  handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      this.handleChangeListPriceUp();
    } else if (event.key === 'ArrowDown') {
      this.handleChangeListPriceDown();
    }
  };

  handleChangeListPriceUp = () => {
    const listPrice = (parseFloat(this.state.listPrice) + 1).toFixed(2);
    this.setState({listPrice}, () => this.getValidate());
  };

  handleChangeListPriceDown = () => {
    const listPrice = (parseFloat(this.state.listPrice) - 1).toFixed(2);
    this.setState({listPrice}, () => this.getValidate());
  };

  handleChangeDescription = (event) => {
    const value = event.target.value;
    this.setState({description: value});
  };

  onFindChanged = (event) => {
    const value = event.target.value;
    this.setState({find: value});
  };

  onReplaceChanged = (event) => {
    const value = event.target.value;
    this.setState({replace: value});
  };

  handleFindAndReplace = () => {
    let {description, find, replace} = this.state;
    description = description.replace(new RegExp(find, 'gi'), replace);
    this.setState({description});
  };

  checkFileType = (file) => {
    if (file.type.indexOf('/png') === -1) {
      notification.error({message: 'Your file has incorrect extension. Please upload PNG files only.'});
    }
  };

  checkFileDimesion = (image, dimension) => {
    const valid = image.width === dimension.width && image.height === dimension.height;
    if (!valid) notification.error({message: 'Please upload a file matching the artwork dimensions.'});
    return valid;
  };

  handleChangeFront = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.checkFileType(file);
      const setFront = (front, frontName) => this.setState({front, frontName});
      const checkFileDimesion = this.checkFileDimesion;
      const dimFront = this.dimsFront[this.state.productType - '1'];

      const image = new Image();
      image.onload = function() {
        if (checkFileDimesion(this, dimFront)) setFront(image.src, file.name);
      };
      image.src = URL.createObjectURL(file);
      event.target.value = null;
    } else {
      this.setState({front: ''});
    }
  };

  handleChangeBack = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.checkFileType(file);
      const setBack = (back, backName) => this.setState({back, backName});
      const checkFileDimesion = this.checkFileDimesion;
      const dimBack = this.dimsBack[this.state.productType - '1'];

      const image = new Image();
      image.onload = function() {
        if (checkFileDimesion(this, dimBack)) setBack(image.src, file.name);
      };
      image.src = URL.createObjectURL(file);
      event.target.value = null;
    } else {
      this.setState({back: ''});
    }
  };

  render() {
    const {backgrounds, front, frontName, back, backName} = this.state;

    const {checkedColors, pricePrefix, listPrice, description} = this.state;
    const {productType, marketplace, fitType} = this.state;
    const {find, replace} = this.state;

    const items = productType === '1' || productType === '2' ? this.allColors : this.fiveColors;
    const background = backgrounds.slice().pop().value;

    let avail = '';
    if (front && back) {
      avail = `${this.availValues[productType - '1'][2]} - 80.00`;
    } else if (front || back) {
      avail = `${this.availValues[productType - '1'][0]} - 80.00`;
    } else {
      avail = `${this.availValues[productType - '1'][0]} - 80.00`;
    }

    let {validTypes, validColor, validPrice, isSubmit} = this.state;
    if (!validTypes && isSubmit) validTypes = 'invalid';
    if (!validColor && isSubmit) validColor = 'invalid';
    if (!validPrice && isSubmit) validPrice = 'invalid';

    return (
      <Row className='merch-form'>
        <Col xl={16} md={20} sm={24}>
          <Form>
            <Row gutter={16}>
              <Col sm={12}>
                <FormItem label='CHOOSE PRODUCT TYPE'>
                  <Select value={productType} onChange={this.handleChangeProductType}>
                    <Option value='1'>Standard T-Shirt</Option>
                    <Option value='2'>Premium T-Shirt</Option>
                    <Option value='3'>Long Sleeve T-Shirt</Option>
                    <Option value='4'>Sweatshirt</Option>
                    <Option value='5'>Pullover Hoodie</Option>
                    <Option value='6'>PopSockets</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col sm={12}>
                {productType === '1' ? (
                  <FormItem label='CHOOSE MARKETPLACE'>
                    <Select value={marketplace} onChange={this.handleChangeMarketplace}>
                      <Option value='Amazon.com'>Amazon.com</Option>
                      <Option value='Amazon.co.uk'>Amazon.co.uk</Option>
                      <Option value='Amazon.de'>Amazon.de</Option>
                    </Select>
                  </FormItem>
                ) : (
                  <FormItem label='CHOOSE MARKETPLACE' className='input-readonly'>
                    <Input addonBefore='Amazon.com' />
                  </FormItem>
                )}
              </Col>
            </Row>

            <Row gutter={16}>
              <Col md={12}>
                <FormItem label={`Front: ${frontName}`} extra={`${this.dimsFront[productType - '1'].width} x ${this.dimsFront[productType - '1'].height}`} />
                <Button onClick={() => this.inputFront.current.click()} type='primary'>
                  Choose
                </Button>
                <Button onClick={() => this.setState({front: '', frontName: ''})} style={{marginLeft: 16}}>
                  Clear
                </Button>
                <input ref={this.inputFront} type='file' accept='image/png' onChange={this.handleChangeFront} style={{display: 'none'}} />
                <div className='front-background' style={{background}}>
                  <img alt='' height='250' src={front} />
                </div>
              </Col>
              {productType < '6' && (
                <Col md={12}>
                  <FormItem label={`Back: ${backName}`} extra={`${this.dimsBack[productType - '1'].width} x ${this.dimsBack[productType - '1'].height}`} />
                  <Button onClick={() => this.inputBack.current.click()} type='primary'>
                    Choose
                  </Button>
                  <Button onClick={() => this.setState({back: '', backName: ''})} style={{marginLeft: 16}}>
                    Clear
                  </Button>
                  <input ref={this.inputBack} type='file' accept='image/png' onChange={this.handleChangeBack} style={{display: 'none'}} />
                  <div className='front-background' style={{background}}>
                    <img alt='' height='250' src={back} />
                  </div>
                </Col>
              )}
            </Row>

            {(productType === '1' || productType === '2') && (
              <FormItem label='CHOOSE FIT TYPE' extra='Check at least 1 type you want to publish' className={`checkbox-type ${validTypes}`}>
                <CheckboxGroup value={fitType} onChange={this.handleChangeFitType}>
                  <Checkbox value='Men'>Men</Checkbox>
                  <Checkbox value='Women'>Women</Checkbox>
                  <Checkbox value='Youth'>Youth</Checkbox>
                </CheckboxGroup>
              </FormItem>
            )}

            {productType !== '6' && (
              <FormItem label='PICK UP TO 5 COLORS' extra='Check between 1 and 5 colors' className={`checkbox-color ${validColor}`}>
                <CheckboxGroup className='color-menu' value={checkedColors} onChange={this.handleChangeColor}>
                  {items.map((item, index) => (
                    <Checkbox key={index} value={item.name} onChange={(e) => this.handleChangeColorChecked(e.target.checked, index)}>
                      <span
                        className='color-item'
                        title={item.name}
                        style={{
                          background: item.background,
                          border: checkedColors.includes(item.name) ? '3px solid orange' : '1px solid silver',
                        }}
                      />
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </FormItem>
            )}

            <Row>
              <Col style={{width: 120}}>
                <FormItem label='LIST PRICE' extra={avail} className={`input-number ${validPrice}`}>
                  <Input
                    prefix={pricePrefix}
                    value={listPrice}
                    onChange={this.handleChangeListPrice}
                    onKeyDown={this.handleKeyDown}
                    addonAfter={
                      <div className='input-number-buttons'>
                        <span onClick={this.handleChangeListPriceUp}>˄</span>
                        <div />
                        <span onClick={this.handleChangeListPriceDown}>˅</span>
                      </div>
                    }
                  />
                </FormItem>
              </Col>
            </Row>

            <FormItem label="PRODUCT'S DESCRIPTION" className='input-label'>
              <Row>
                <Col span='3'>
                  <Row>
                    <Col className='col-label'>Brand</Col>
                    <Col className='col-label'>Title</Col>
                    <Col className='col-label'>Feature 1</Col>
                    <Col className='col-label'>Feature 2</Col>
                    <Col className='col-label'>Description</Col>
                  </Row>
                </Col>
                <Col span='21'>
                  {/* eslint-disable-next-line*/}
                  <InputTextArea accessKey='q' value={description} autosize={{minRows: 6, maxRows: 10}} onChange={this.handleChangeDescription} />
                  <Row gutter={16} className='row-replace'>
                    <Col sm={10}>
                      <Input placeholder='Find' value={find} onChange={this.onFindChanged} />
                    </Col>
                    <Col sm={10}>
                      <Input placeholder='Replace' value={replace} onChange={this.onReplaceChanged} />
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                      <Button type='primary' onClick={this.handleFindAndReplace}>
                        Replace
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </FormItem>

            <div style={{textAlign: 'right'}}>
              <Button onClick={this.handleClickSaveTemplate} style={{marginRight: 16}}>
                Save
              </Button>
              <Button type='danger' onClick={this.handleClickLoadTemplate} style={{marginRight: 48}}>
                Load
              </Button>

              <Button onClick={this.handleClickCopy} style={{marginRight: 16}}>
                Copy
              </Button>
              <Button type='danger' onClick={this.handleClickSave}>
                Save
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create()(App);
