
// const catchAsync = (fn, method) => (dispatch) => fn(dispatch).catch( err => method( err ) )
const catchAsync = (fn, method) => (dispatch) => fn(dispatch).catch( method )
