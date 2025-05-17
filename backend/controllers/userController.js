// @desc    Register a new user
// @route: /api/users
// @access: Public

const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// @desc    Login a user
// @route: /api/users/login
// @access: Public

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @desc    Get user data
// @route: /api/users/me
// @access: Public

const getMe = (req, res) => {
  res.json({ message: "User data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
