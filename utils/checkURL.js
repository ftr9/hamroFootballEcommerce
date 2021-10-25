module.exports = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3040';
    } else {
        return 'https://hamrofootball.herokuapp.com'
    }
}