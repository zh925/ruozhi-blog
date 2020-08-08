;(function () {
    window.request = {}

    const _ = window._ || {}
    _.isPhone = (phone) =>  /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(phone)
    _.isEmail = (email) => /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/.test(email)
})()

window.onload = function () {
    const _alert = function () {
        this.alertCnt = document.querySelector('.alert-global')
        this.alertMsgCnt = this.alertCnt.querySelector('.alert-message')
        this.alertIconCnt = this.alertCnt.querySelector('.alert-icon')
        this.timeId = null
        this.show = (msg) => {
            this.alertMsgCnt.innerHTML = msg
            clearInterval(this.timeId)
            this.alertCnt.show()
            this.timeId = setInterval(() => {
                this.alertCnt.hide()
            }, 3000)
        }
    }
    _alert.prototype.success = function(msg) {
        this.alertCnt.setAttribute('type', 'success')
        this.alertIconCnt.setAttribute('name', 'check2-circle')
        this.show(msg)
    }
    _alert.prototype.error = function(msg) {
        this.alertCnt.setAttribute('type', 'danger')
        this.alertIconCnt.setAttribute('name', 'exclamation-octagon')
        this.show(msg)
    }
    _alert.prototype.info = function(msg) {
        this.alertCnt.setAttribute('type', 'primary')
        this.alertIconCnt.setAttribute('name', 'info-circle')
        this.show(msg)
    }
    _alert.prototype.warning = function(msg) {
        this.alertCnt.setAttribute('type', 'warning')
        this.alertIconCnt.setAttribute('name', 'exclamation-triangle')
        this.show(msg)
    }
    window._alert = new _alert()
}
