import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Scripts = ({ _ID, _relativeURL }) => (
	<Fragment>
		<script src="https://www.googletagmanager.com/gtag/js?id=UA-23571257-4"></script>
		<script type="text/javascript" src={ _relativeURL( `/assets/js/script.min.js`, _ID ) }/>
	</Fragment>
);

Scripts.propTypes = {};

Scripts.defaultProps = {};

export default Scripts;
