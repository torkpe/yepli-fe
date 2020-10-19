import React from 'react';
import ProgressBar from '../../components/progress';
import Image from '../../components/image';
import AddImage from '../../assets/svg/add-image.svg';
import { connect } from 'react-redux';
import { getDeal, addImage, updateDeal } from '../../actions/deals/actionCreators';
import { convertDate, convertFirstLetterToUppercase, formatNumber } from '../../utils/helpers';
import EditDealFields from '../../components/deal/EditDealFields';
import Container from '../../components/container/Container';
import Content from '../../components/content/Content';

class Deal extends React.Component {
  state = {
    deal: {},
    selectedField: '',
    selectedSection: '',
    index: '',
    type: '',
    images: [],
    currentImageIndex: 0,
    changingValue: '',
  }

  componentDidMount() {
    this.props.getDeal(this.props.match.params.dealId);
    this.slideImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deal !==this.props.deal) {
      this.setState({
        deal: this.props.deal,
        images: this.props.deal.images
      })
    }
  }


  editField = (key, selectedSection, index, type) => {
    this.setState({
      selectedField: key,
      selectedSection,
      index,
      type
    })
  }

  clearEdit = async () => {
    const { selectedSection, index, type, changingValue, deal } = this.state;
    if (changingValue.length) {
      if (type === 'value' && !deal[selectedSection][index]['key']) {
        this.setState({
          selectedField: '',
          selectedSection: '',
          index: '',
          type: '',
        })
        return
      }
      deal[selectedSection][index][type] = changingValue;
      await updateDeal(deal, deal._id);
    }

    this.setState({
      selectedField: '',
      selectedSection: '',
      index: '',
      type: '',
      changingValue: ''
    })
  }

  onItemChange = (event) => {
    this.setState({
      changingValue: event.target.value
    })
  }

  addItem = (property) => {
    const { deal } = this.state;
    deal[property] = deal[property] ? [...deal[property], {key: '', value: ''}] : [{key: '', value: ''}]
    this.setState({
      deal,
      index: deal[property].length -1,
      type: 'key'
    })
  }

  fileChange = async (event) => {
    const formData = new FormData();
    formData.append('file',event.target.files[0])
    formData.get('file')
    const image = await addImage(formData, this.state.deal._id);
    this.setState({
      images: [...this.state.images, image]
    })
  }

  slideImages =() => {
    this.slideInterval = setInterval(() => {
      const { images, currentImageIndex } = this.state;
      if (currentImageIndex < images.length -1) {
        this.setState({
          currentImageIndex: currentImageIndex+1
        })
      } else {
        this.setState({
          currentImageIndex: 0
        })
      }
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval)
  }

  render() {
    const { deal, selectedField, selectedSection, index, type, images, currentImageIndex } = this.state;
    let indexCounter = 0;
    return (
      <Container customStyle="custom__scrollable-container">
        {Object.keys(deal).length ?
          <Content customStyle="custom__content">
            <div className="deal-header">
              <div className="left-header">
                <div className="left-header-text">
                  <h3 className="deal-title deal-title__overiview">
                    {convertFirstLetterToUppercase(deal.name)}
                  </h3>
                  <div className="created-date">
                    {convertDate(deal.createdAt)}
                  </div>
                </div>
                <div className="deal-progress">
                  <ProgressBar/>
                </div>
              </div>
              <div className="right-header">
                <div className="image-upload">
                  <label htmlFor="file-input">
                    <div className="upload-image">
                      <img src={AddImage} className="add-image" alt="add deal display"/>
                      <span className="plus-image">+</span>
                    </div>
                  </label>
                  <input
                    onChange={this.fileChange}
                    name="file"
                    id="file-input" type="file" multiple/>
                </div>
              </div>
            </div>
            <div className="overview-section">
              {images.length ?
                <div className="overview-image-container">
                  <img className="overview-image" src={this.state.images[currentImageIndex]} alt={'deal description'}/>
                </div>
              : <div className="overview-image-placeholder"/>                
              }
              <div className="overview-description">
                <div className="overview-left">
                  <div>
                    Location: 
                  </div>
                  <div className="right-side-overview">
                    Some Random text content to fill this space
                  </div>
                </div>
                <div className="overview-right">
                  <img src={require('../../assets/svg/location.svg')} alt="location"/>
                </div>
              </div>
              <div className="overview-description">
                <div className="overview-left">
                  <div>
                    Member: 
                  </div>
                  <div className="right-side-overview">
                    {
                      deal.members.map(member => <Image
                        key={indexCounter++}
                        {...member}
                        />)
                    }
                  </div>
                </div>
                <div className="overview-right">
                  <button className="overview-button">Add Members +</button>
                </div>
              </div>
              <div className="items">
                <div className="items-header">
                  <h3 className="header-text">financing</h3>
                </div>
                {
                  deal.finance.map((finance, i) =>
                  <EditDealFields
                    key={indexCounter++}
                    value={finance.key === 'Loan Request' ? `$${formatNumber(finance.value)}` : finance.value}
                    index={i}
                    isKeyEditable={selectedField === finance.key && selectedSection === 'finance' && i === index && type === 'key'}
                    isValueEditable={selectedField === finance.value && selectedSection === 'finance' && i === index && type === 'value'}
                    propertyKey={finance.key}
                    clearEdit={this.clearEdit}
                    onItemChange={this.onItemChange}
                    section={'finance'}
                    editField={this.editField}
                />)
                }
                <button
                  onClick={() => this.addItem('finance')}
                  className="button add-item-button">
                  New Item +
                </button>
              </div>
              <div className="items items__other-items">
                <div className="items-header">
                  <h3 className="header-text">others</h3>
                </div>
                {
                  deal.others ? deal.others.map((other, i) =>
                  <EditDealFields
                    key={indexCounter++}
                    value={other.value}
                    clearEdit={this.clearEdit}
                    onItemChange={this.onItemChange}
                    propertyKey={other.key}
                    index={i}
                    isKeyEditable={selectedField === other.key && selectedSection === 'others' && i === index && type === 'key'}
                    isValueEditable={selectedField === other.value && selectedSection === 'others' && i === index && type === 'value'}
                    section={'others'}
                    editField={this.editField}
                />)
                : ''}
                <button
                  onClick={() => this.addItem('others')}
                  className="button add-item-button">
                  New Item +
                </button>
              </div>
            </div>
          </Content>
        : ''}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    deal: state.getDeal.deal
  });
}
const mapDispatchToProps = {
  getDeal: getDeal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deal);
