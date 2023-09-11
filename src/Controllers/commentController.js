exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Created successfully' });
  };
  
  exports.read = async (req, res) => {
   res.status(200).json({ status: 'success', data: 'Read successfully' });
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Deleted successfully' });
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Updated successfully' });
  };