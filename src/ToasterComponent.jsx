import React from 'react'
import ToastComponent from "./components/ToastComponent"
import ToasterTheme from "./components/ToasterTheme"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


const sortToasts = (a, b) => b.time - a.time

class ToasterComponent extends React.Component {
    render() {
        const {toasts, dispatch} = this.props
        const items = toasts
            .sort(sortToasts)
            .map((toast, idx) => (
                <ToastComponent theme={this.props.theme} dispatch={dispatch} key={toast.id} idx={idx} {...toast}/>)
            )
        return (
            <div>
                {items}
            </div>
        )
    }
}

ToasterComponent.propTypes = {
    theme: PropTypes.object
}
ToasterComponent.defaultProps = {
    theme: ToasterTheme
}

export default connect((store) => ({
    toasts: store.toaster.toasts
}))(ToasterComponent)
