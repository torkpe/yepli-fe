import React from 'react';
import './index.scss';
import DealCard from './DealCard';
import Dummy from '../../assets/svg/dummy-image.svg';
import { connect } from 'react-redux';
import { getDeals } from '../../actions/deals/actionCreators';
import { convertFirstLetterToUppercase, formatNumber } from '../../utils/helpers';
import ColoredButton, { BUTTON_TYPES } from '../../components/coloredButton/ColoredButton';
class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getDeals()
  }

  render() {
    const { deals} = this.props;
    console.log(deals);
    let indexCounter = 0;
    return (
      <div className="deals">
        <div className="header">
          <h1 className="title">Deals</h1>
            See Deals
          <div className="deal-action-buttons">
            <ColoredButton
              symbolType={BUTTON_TYPES.plus}
              onClick={() => console.log('hjfdhj')}
              text={"Create Deal"}
            />
          </div>
        </div>
        <div className="deals-list">
          {
            deals ? deals.map(deal =><DealCard
              key={indexCounter++}
              image={deal.images && deal.images[0] ? deal.images[0] : Dummy}
              amount={`$${formatNumber(deal.value)}`}
              createdBy={convertFirstLetterToUppercase(`${deal.createdBy.firstName} ${deal.createdBy.lastName}`)}
              title={deal.name}
              dealId={deal._id}
            />)
            : ''
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    deals: state.getDeals.deals
  });
}
const mapDispatchToProps = {
  getDeals: getDeals
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deals);

