import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CmpServices from '@schibstedspain/react-cmp-services'

import {CmpBannerContainer} from './CmpBanner/index'

class CmpBanner extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <CmpServices>
        {({getConsentStatus, getPurposesAndVendors, sendConsents}) => (
          <CmpBannerContainer
            {...this.props}
            getConsentStatus={getConsentStatus}
            getPurposesAndVendors={getPurposesAndVendors}
            sendConsents={sendConsents}
          />
        )}
      </CmpServices>
    )
  }
}

CmpBanner.displayName = 'CmpBanner'

CmpBanner.defaultProps = {
  lang: 'es'
}

CmpBanner.propTypes = {
  /**
   * Name of the company which the consents are for
   */
  companyName: PropTypes.string.isRequired,
  /**
   * ISO 639-1 code language in order to get the text translated to it
   */
  lang: PropTypes.string,
  /**
   * URL of the static image that will be the logo for the Modal
   */
  logo: PropTypes.string,
  /**
   * Method to execute when the user accepts the consents, useful for tracking
   */
  onAccept: PropTypes.func,
  /**
   * Method to execute when the user configure the consents, useful for tracking
   */
  onConfigure: PropTypes.func,
  /**
   * URL where the user will go in order to know more about the privacy conditions of the website
   */
  privacyUrl: PropTypes.string.isRequired
}

export default CmpBanner
