import React from 'react';

import './main.css';

class PageInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    var user = this.props.user;
    var name = user.page.name;
    var birth = user.page.birth;

    return (
      <div className="page-info page-block page-block--wrap">
        <div className="page-block page-block--inner">
          <div className="page-info__main">
            <div className="page-info__online-status">
              <span>Online</span>
            </div>
            <h1 className="page-info__profile-name">
              {name.first} {name.second}
            </h1>
          </div>
          <div className="page-info__profile-info">
            <div className="page-info__info-row">
              <div className="page-info__label">
                День рождения:
              </div>
              <div className="page-info__labeled">
                {birth.day} {birth.month}
              </div>
            </div>
            <div className="page-info__info-row">
              <div className="page-info__label">Семейное положение:</div>
              <div className="page-info__labeled">влюблён в Администратора</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageInfo;