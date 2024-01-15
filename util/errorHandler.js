function handleServerError(error) {
    console.error('Error:', error);

    let errorMessage = 'Server error: ';

    if (error.name === 'SequelizeUniqueConstraintError') {
        errorMessage += 'Duplicate entry found.';
    } else {
        errorMessage += error.message || 'Unknown error occurred.';
    }
    return errorMessage;
}
module.exports = handleServerError
