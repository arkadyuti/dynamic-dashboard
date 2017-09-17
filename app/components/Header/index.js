/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="dashboardHead" className="container-fluid">
        <div className="row dashboard-heading">
          <div className="col-xs-12 col-sm-6 col-md-6">Card game</div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="heading-right">
              <div className="heading-cta-dd">one</div>
              <div className="heading-cta-dd">two</div>
              <div className="heading-cta-dd">three</div>
              <div className="heading-cta-dd">four</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
