'use strict';

const React = require('react');

class NavbarRightUser extends React.Component {
    constructor() {
        super();

        this.showLoginModal = this.showLoginModal.bind(this);
    }

    showLoginModal() {
        //  TO DELETE
        console.info('login');  //  eslint-disable-line
    }

    render() {
        const userInfo = this.props.userInfo;
        const userName = userInfo.userName || 'Guest,please login...';
        const hrefLink = userInfo.userName ? '/user' : 'javascript:;';
        const domClass = userInfo.userName ? 'nav-link' : 'nav-link login-link';

        return (
            <li className="nav-item">
                <a
                    className = {domClass}
                    href = { hrefLink }
                    onClick = { () => this.showLoginModal() }
                >
                    { userName }
                </a>
            </li>
        );
    }
}

module.exports = NavbarRightUser;
