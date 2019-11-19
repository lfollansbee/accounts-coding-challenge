import React from 'react';
import AccountDataList from './AccountDataList';

// I broke this out into it's own component because the three columns had identical functionality, just received different data.
class AccountColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {
      accounts,
      classProp,
      headerText,
    } = this.props;

    return (
      <section className='account-column grid' id={`${classProp}-account-column`}>
        <div className='account-container-title' id={`${classProp}-account-container-title`}>
          <h3>{headerText}</h3>
        </div>
        <div className={`account-container ${classProp}-account`}>
          {accounts.length !== 0 ?
            accounts.map((account, index) => (
              <AccountDataList account={account} key={index} />
            ))
            : null
          }
        </div>
      </section>
    )
  }
}

export default AccountColumn;