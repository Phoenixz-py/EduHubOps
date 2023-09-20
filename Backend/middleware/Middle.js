const validateInput = (req, res, next) => {
    const { name, age } = req.body;
  
    if (!name || !age) {
      return res.status(400).json({
        error: "Please provide a name and age",
      });
    }
  
    next();
  };
  

exports = {
    validateInput
}